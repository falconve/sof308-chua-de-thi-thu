<script setup>
// Bước 1: Khai báo 1 cái object để lưu dữ liệu từ API
// Bước 2: Khai báo 1 hàm, sau đó sử dụng axios để gọi API
// Bước 3: Hiển thị dữ liệu
// Bước 4: Khai báo 1 hàm để cập nhật dữ liệu

import { useRoute } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
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

// Bước 4
async function handleSubmit() {
  // Gọi API và lưu dữ liệu người dùng sửa
  await axios.put(`http://localhost:3000/students/${params.id}`, student.value)
  // Sau khi lưu dữ liệu xong đưa người dùng về trang danh sách
  router.push({ name: 'home' })
}

fetchStudents()
</script>

<template>
  <!-- Thêm sự kiện submit.prevent vào thẻ form để chặn trang web tải lại -->
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập tên..."
        v-model="student.name"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Age</label>
      <input
        type="number"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập tuổi..."
        v-model="student.age"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập email..."
        v-model="student.email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Link ảnh</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Nhập link ảnh..."
        v-model="student.image"
      />
    </div>

    <button class="btn btn-primary" type="submit">Sửa</button>
  </form>
</template>

<style scoped></style>
