<template>
  <v-navigation-drawer
    v-model="close"
    width="320"
    temporary
    style="position:fixed;height: 100%;"
  >
    <v-toolbar class="px-2 font-weight-bold text-h6">
      <span>Navbar</span>
      <v-spacer />
      <v-btn
        icon="mdi-close"
        @click="closeSidebar()"
      />
    </v-toolbar>
    <v-expansion-panels
      variant="accordion"
    >
      <v-expansion-panel
        v-for="menu in drawMenus"
        :key="menu"
        :title="menu.title"
        :collapse-icon="menu.icon"
        elevation="0"
        selected-class="bg-black"
      >
        <v-expansion-panel-text
          v-for="i in menu.items"
          :key="i"
        >
          {{ i }}
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>
<script setup>
import {  ref, defineProps, defineEmits, watch,computed } from 'vue'

const drawMenus = computed(() => {
  return [
    { title:'Dashboards', icon:'view-dashboard-variant-outline', items:['Review', 'Photos', 'Order List', 'Order History', 'Followers', 'Bookmarks']},
    { title:'Resturant', icon:'silverware-fork-knife', items:['Food Menu', 'Resturant Two Column', 'Search Restutant']}
  ]
})


const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['update:modelValue'])
const close = ref(props.modelValue)

const closeSidebar = () => {
  close.value = false;
};
watch(() => props.modelValue, (newVal) => {
  close.value = newVal;
});
watch(close, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>