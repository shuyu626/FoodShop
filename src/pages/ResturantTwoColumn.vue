<template>
  <v-container>
    <v-breadcrumbs
      :items="items"
      class="pl-0"
    >
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
  </v-container>
</template>
<script setup>
import { ref } from 'vue'
const items = ref([
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'New York',
    disabled: false,
    href: '/',
  },
  {
    title: 'Resturants',
    disabled: true
  }
])
</script>