<template>
    <div class="app-container">
        <el-form :inline="true" class="demo-form-inline">
            <div style="display: flex;">
                <el-form-item label="Department" class="demo-form-item-label" style="margin-left: 100px;">
                    
                    <el-select v-model="doctorQuery.name" placeholder="Fever Clinic">
                    <el-option label="option1" value="1"></el-option>
                    <el-option label="option2" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Date" class="demo-form-item-label" style="margin-left: 300px;">
                    <el-select v-model="doctorQuery.date" placeholder="February 12th">
                    <el-option label="option1" value="1"></el-option>
                    <el-option label="option2" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="demo-form-item-label" style="margin-left: 300px;">
                    <el-button type="success" @click="getList()">search</el-button>
                </el-form-item>
            </div>
        </el-form>
        <el-table
            :data="this.tableData"
            style="width: 100%">
            <el-table-column
                label=""
                width="300"
                prop="avatar"
                >
                <template slot-scope="{ row }">
                <img :src="row.avatar" alt="Image" style="max-width: 200px; max-height: 800px;">
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="name"
                width="180"
                >
            </el-table-column>
            <el-table-column
                prop="intro"
                label="intro">
            </el-table-column>
            <el-table-column
                prop="remaining"
                label="remaining">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button type="success" size="big" icon="el-icon-user" @click="appointment(scope.row.id)">apponitment</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            small
            layout="prev, pager, next, total, jumper"
            :total="total"
            :current-page="page"
            :page-size="limit"
            style="padding: 30px 0; text-align: center;"
            @current-change="getList">
        </el-pagination>
    </div>
</template>

<script>

import teacher from '@/api/edu/teacher'
export default {
    data() {
        return {
            tableData: [
                { name: 'Alice', intro: 'a doctor' , remaining: 5, avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'},
                { name: 'Bob', intro: 'a doctor' , remaining: 0, avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'},
                { name: 'White', intro: 'a doctor' , remaining: 3, avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'},
            ],
            page: 1,
            limit: 5,
            doctorQuery: {},
            list: null,
            total: 0
        }
    }, 
    created() {
        this.getList()
    },
    methods: {
        getList(page=1) {
            this.page = page
            teacher.getTeacherListPage(this.page, this.limit, this.doctorQuery)
            .then(response => {
                this.list = response.data.rows
                this.total = response.data.total
                console.log(this.total)
            })
            .catch(error => {
                console.log(error)
            })
        },
        appointment(id) {
            this.$confirm('confirm appointment?', 'tips', {
                confirmButtonText: 'yes',
                cancelButtonText: 'cancel',
                type: 'warning'
            }).then(() => {
                //apponitment method
                teacher.deleteTeacher(id)
                .then(response => {
                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.getList()
                })
                
            })
        }
    }
}
</script>

<style scoped>
.demo-form-item-label {
    width: 30%;
}
</style>