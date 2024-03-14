<template>
    // MENSAJE DE ALERTA DE ERROR
    <div class="alerta" :class='error2' >
        {{ error1 }}
    </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// DEFINIR LAS PROPIEDADES DEL ERROR Y UNA ALERTA
    const props = defineProps(['error1', 'error2']);
    console.log(props.error2)
    const tipo = 'MENSAJE DE ALERTA'
</script>

<style>

.alerta {
    padding: 1rem 1rem;
    max-width: 60rem;
    margin: 1rem auto 1rem auto;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
}
.alerta.error {
    background-color: #fff;
    border-left: 5px solid #b91c1c;
    color: #b91c1c;
}
.alerta.advertencia {
    background-color: #fff;
    border-left: 5px solid #f6c34d;
    color: #f6c34d;
}

</style>