<script setup>
// Bước 1: Khai báo 1 cái object để lưu dữ liệu từ API
// Bước 2: Khai báo 1 hàm, sau đó sử dụng axios để gọi API
// Bước 3: hiển thị dữ liệu

import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

// Bước 1
const student = ref({})

// Lấy id từ thanh url
const { params } = useRoute()
//console.log(params.id)

// Bước 2
async function fetchStudents() {
  // Khai báo biến response dùng để gọi API
  const response = await axios.get(`http://localhost:3000/students/${params.id}`)

  // Cập nhật lại giá trị cho biến studentList
  student.value = response.data

  //console.log(studentList)
}

fetchStudents()
</script>

<template>
  <h1>Student Detail</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <img :src="student.image" class="card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Id: {{ student.id }}</h5>

            <p class="card-text">Tên:{{ student.name }}</p>
            <p class="card-text">Tuổi:{{ student.age }}</p>
            <p class="card-text">Email:{{ student.email }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
