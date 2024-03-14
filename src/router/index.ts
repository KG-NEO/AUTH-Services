import UserView from '@/views/UserView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  path: '/usuario',
  name: 'Usuario',
  component: UserView
},
{
  path: '/usuarios',
  name: 'Usuarios',
  component: UsersView
}

  ]
})

export default router
