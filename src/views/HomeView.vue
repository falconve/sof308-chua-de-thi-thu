<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
// Bước 1: Khai báo 1 cái mảng để lưu dữ liệu từ API
// Bước 2: Khai báo 1 hàm, sau đó sử dụng axios để gọi API (kh)
// Bước 3: Lưu dữ liệu gọi từ API vào mảng ở BƯỚC 1
// Bước 4: Sử dụng vào lặp để hiện thử dữ liệu từ mảng sang giao diện bảng bootstrap

// Bước 1
const studentList = ref([])

// Bước 2
async function fetchStudents() {
  // Khai báo biến response dùng để gọi API
  const response = await axios.get('http://localhost:3000/students')

  // Cập nhật lại giá trị cho biến studentList
  studentList.value = response.data

  //console.log(studentList)
}

fetchStudents()

// Hàm xoá
async function handleDelete(id) {
  // Gọi API để xoá dữ liệu
  await axios.delete(`http://localhost:3000/students/${id}`)
  fetchStudents()
}
</script>

<template>
  <h2 class="text-bold">Student List</h2>
  <RouterLink class="btn btn-primary" :to="`/students/Add`">Thêm mới</RouterLink>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in studentList">
              <th scope="row">{{ student.id }}</th>
              <td>{{ student.name }}</td>
              <td>{{ student.age }}</td>
              <td>{{ student.email }}</td>
              <td><img :src="student.image" alt="" /></td>
              <td>
                <RouterLink class="btn btn-primary" :to="`/students/${student.id}`"
                  >Detail</RouterLink
                >
                <RouterLink class="btn btn-primary" :to="`/students/edit/${student.id}`"
                  >Edit</RouterLink
                >
                <button class="btn btn-danger" @click="handleDelete(student.id)">Xoá</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
