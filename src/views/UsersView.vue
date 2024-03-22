import Registro from '@/components/Registro.vue';
<template>
  <div>
    <h1>Usuarios:</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <RouterLink :to="{ name: 'Usuario', params: { email: user.email } }"
          >Correo: {{ user.email }}, Nombre y Apellido: {{ user.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import PostService from '../service/PostService'

// OBETENER LOS DATOS Y EL VALOR DE LOS USUARIOS
const service = new PostService()
const users = service.getUsers()

onMounted(async () => {
  await service.obtenerUsers()
  console.log(users.value)
})
</script>

<style scoped></style>
