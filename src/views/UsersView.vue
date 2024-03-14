import Registro from '@/components/Registro.vue';
<template>

    <div>
        // AQUI CREAS UNA LISTA 
        <ul>
            // AQUI TU LISTA QUE SEA DINAMICA
            <li v-for="(user, index) in users" :key="index">
                <RouterLink :to="{name: 'usuario', params: { correo: user.correo }}"
                >Correo: {{ user.correo }}, Nombre y Apellido: {{ user.nombre }}</RouterLink>
            </li>
        </ul>

        // DIRECTIVA DE REGISTRO
        <Registro />
    </div>

</template>


<script lang="ts" setup>
import type Registro from '@/components/Registro.vue';
import { onMounted } from 'vue';
import PostService from '../service/PostService';

// OBETENER LOS DATOS Y EL VALOR DE LOS USUARIOS
const service = new PostService()
const users = service.getUsers()

onMounted(async () => {
    await service.obetenerUsers()
    console.log(users.value)
})

</script>

<style scoped> </style>