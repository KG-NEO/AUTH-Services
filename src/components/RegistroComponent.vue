<template>
    <div>
<form v-on:submit="datos" class="errorfor">


<hr>
    // AQUI EMPIEZA LOS DATOS REQUERIDOS
    <div class="regis">
        <label for="nombre"> Nombre y Apellido: </label>
        <input id="nombre" type="text" placeholder="" v-model="nombre">
    </div>
    // GRUPO
    <div class="regis">
        <label for="grupo"> Grupo: </label>
        <input id="grupo" type="text" placeholder="" v-model="grupo">
    </div>
    // EMAIL
    <div class="regis">
        <label for="correo"> Ingresa tu Correo: </label>
        <input id="correo" type="text" placeholder="" v-model="correo">
    </div>
    // CONTRASEÑA
    <div class="regis">
        <label for="contra"> Ingresa tu Contraseña: </label>
        <input id="contra" type="text" placeholder="" v-model="contra">
    </div>
    
    <div class="boton">
        <button type="enviar" value="guardar"> GUARDAR </button>
    </div>

</form>
    </div>

</template>

<script lang="ts" setup> 
import { ref } from 'vue';
import type { Ref } from 'vue';
import PostService from '../service/PostService';

// DECLARANDO LAS VARIABLES
let nombre:Ref<string> = ref('')
let grupo:Ref<string> = ref('')
let correo:Ref<string> = ref('')
let contra:Ref<string> = ref('')

     // DECLARANDO EL ERROR
    let mensaje = ref('')
    let tipo = ref('')

const service = new PostService()

// INICIA EL CLICO DE LOS DATOS REQUERIDOS CON FUNCION DE ERROR
const datos = (e: any) =>{
    e.preventDefault();
    
    if([nombre.value, grupo.value, correo.value, contra.value].includes('')){
        mensaje.value = 'Todos los campos son obligatorios, Gracias'
        tipo.value = 'Error, Revisar los Datos'
        return
    }

    let registro = {
        nombre: nombre.value,
        grupo: grupo.value,
        correo: correo.value,
        contra: contra.value
    }

    // AQUI ESTA LA FUNCION DE SERVICIO DE REGISTRO
console.log(registro);

    service.Registro(registro.nombre, registro.grupo, registro.correo, registro.contra)
}


</script>

<style scoped> </style>