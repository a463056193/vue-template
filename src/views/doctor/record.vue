<template>
  <div>
    <el-table :data="patientRecords" border>
      <el-table-column prop="id" label="Record Number"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="age" label="age"></el-table-column>
      <el-table-column prop="gender" label="gender"></el-table-column>
      <el-table-column prop="diagnosis" label="diagnosis"></el-table-column>
      <el-table-column prop="treatment" label="treatment"></el-table-column>
      <el-table-column prop="doctor" label="doctor"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientRecords: [
        { id: 1, name: "Jack", age: 30, gender: "male", diagnosis: "Catch a cold", treatment: "Rest and medication", doctor: "White" },
        { id: 2, name: "Peter", age: 25, gender: "female", diagnosis: "fever", treatment: "Fever-reducing medicine, diet conditioning", doctor: "Bob" },
        { id: 3, name: "Leo", age: 40, gender: "male", diagnosis: "hypertension", treatment: "Antihypertensive drugs, dietary conditioning", doctor: "Alice" }
      ]
    };
  }
};
</script>