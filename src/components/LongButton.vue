<template>
  <v-btn
    class="w-100 text-white my-2"
    :color="color"
  >
    {{ text }}
  </v-btn>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    text:{
        type:String,
        default: 'Login'
    },
    color:{
        type:String,
        default:'primary'
    }
})
console.log(props.text)
</script>