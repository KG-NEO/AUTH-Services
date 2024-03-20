import RegistroComponent from '@/components/RegistroComponent.vue'
import UserView from '@/views/UserView.vue'
import UsersView from '@/views/UsersView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  path: '/usuario/:email',
  name: 'Usuario',
  component: UserView
},
{
  path: '/usuarios',
  name: 'Usuarios',
  component: UsersView
},
{
  path: '/registro',
  name: 'Registro',
  component: RegistroComponent
}

  ]
})

export default router
