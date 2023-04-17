import request from '@/utils/request'

export default{
    getTeacherListPage(current, limit, docterQuery) {
        return request({
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            // 表示把对象转换成json传递到接口
            data: docterQuery
          })
    },
    deleteTeacher(id) {
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete',
            
          })
    },
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    getTeacher(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },
    updateTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}

