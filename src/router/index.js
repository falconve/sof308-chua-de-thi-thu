import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentDetail from '@/views/StudentDetail.vue'
import StudentAdd from '@/views/StudentAdd.vue'
import StudentEdit from '@/views/StudentEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/student',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/students/:id',
      name: 'studentDetail',
      component: StudentDetail,
    },
    {
      path: '/students/add',
      name: 'studentAdd',
      component: StudentAdd,
    },
    {
      path: '/students/edit/:id',
      name: 'studentEdit',
      component: StudentEdit,
    },
  ],
})

export default router
