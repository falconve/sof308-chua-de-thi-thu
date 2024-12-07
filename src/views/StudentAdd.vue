<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
// Bước 1: Khai báo 1 object để lưu thông tin người dùng nhập
// Bước 2: Khai báo hàm để gọi API và lưu dữ liệu ở BƯỚC 1

// Bước 1
const student = ref({
  name: '',
  age: '',
  email: '',
  image: '',
})

// Bước 2
async function handleSubmit() {
  if (!validate()) return

  // Gọi API và lưu dữ liệu người dùng thêm mới
  await axios.post('http://localhost:3000/students', student.value)

  // Sau khi lưu dữ liệu xong đưa người dùng về trang danh sách
  router.push({ name: 'home' })
}

// Validate
// Bước 1: Khai báo biến quản lý trạng thái
let errors = ref({
  name: null,
  age: null,
  email: null,
  image: null,
})
// Bước 2: Khai báo 1 hàm để kiểm tra validate
function validate() {
  // Khai báo 1 biến trạng thái
  // - Nếu người dùng có nhập dữ liệu thì là trạng thái false
  // - Nếu người dùng không nhập dữ liệu thì trạng thái true

  let isValid = true

  if (!student.value.name.trim()) {
    isValid = false
    errors.value.name = 'Bạn phải nhập tên'
  } else {
    errors.value.name = null
  }

  if (!student.value.age || isNaN(student.value.age) || student.value.age <= 0) {
    isValid = false
    errors.value.age = 'Tuổi phải lớn hơn 0'
  } else {
    errors.value.age = null
  }

  if (!student.value.email.trim()) {
    isValid = false
    errors.value.email = 'Bạn phải nhập email'
  } else {
    errors.value.email = null
  }

  if (!student.value.image.trim()) {
    isValid = false
    errors.value.image = 'Bạn phải nhập link ảnh'
  } else {
    errors.value.image = null
  }

  return isValid
}
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
      <div v-show="errors.name" class="text-danger">{{ errors.name }}</div>
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
      <div v-show="errors.age" class="text-danger">{{ errors.age }}</div>
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
      <div v-show="errors.email" class="text-danger">{{ errors.email }}</div>
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
      <div v-show="errors.image" class="text-danger">{{ errors.image }}</div>
    </div>

    <button class="btn btn-primary" type="submit">Thêm mới</button>
  </form>
</template>

<style scoped></style>
