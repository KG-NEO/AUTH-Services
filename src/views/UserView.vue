<template>
    <div>
            <!-- VARIABLES ID -->
        <h3><label>ID: </label>{{ user.id }}</h3>
            <!--  VARIABLE NOMBRE -->
        <h3><label>Nombre y Apellido: </label>{{ user.name }}</h3>
            <!--  GRUPO -->
        <h3><label>Grupo: </label>{{ user.user_group }}</h3>
            <!--  CORREO -->
        <h3><label>Correo: </label>{{ user.email }}</h3>
            <!--  CONTRASEÑA -->
        <h3><label>Contraseña: </label>{{ user.password }}</h3>
    
    </div>
</template>

<script lang="ts" setup> 
import PostService from '../service/PostService';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const service = new PostService()
const user = service.getUser()

    // DEFINO LO QUE ME VA ATRAER EN LA RUTA QUE ES EL CORREO 
onMounted(async () => {
    const router = useRoute()
    const userCorreo = router.params.email as string
    const userName = router.params.name as string
    const userGrupo = router.params.grupo as string
    await service.obtenerUser(userCorreo, userName, userGrupo)
})

</script>

<style scoped> </style>