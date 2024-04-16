<template>

    <div>
        <form @submit.prevent="loginrequest" method="post" class="inicio">
            <!-- AQUI VAN LOS DATOS-->
           <div>
            <label for="correo"> Correo </label>
            <input type="email" 
            name="Email" 
            v-model="inputEmail"
            id="email"
            placeholder="Ingresa tu Correo"/>
           </div>

           <div>
            <label for="contraseña"> Contraseña </label>
            <input type="password"
             name="Password"
             v-model="inputPass" 
             id="password"
             placeholder="Ingresa tu Contraseña"/>

             <button type="submit"> Iniciar Sesión </button>
           </div>
        </form>
    <p v-if="!error && errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>

</template>
<script lang="ts" setup>
import {Ref}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
