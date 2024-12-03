<template>
  <v-navigation-drawer
    v-model="close"
    width="320"
    temporary
    location="end"
    style="position: fixed;"
  >
    <div
      class="d-flex flex-column justify-space-between"
      style="height: 100%;"
    >
      <div>
        <v-toolbar
          class="px-2 font-weight-bold text-h6"
          density="comfortable"
          color="white"
        >
          <v-icon
            icon="mdi-shopping-outline"
            size="small"
            color="third"
          />
          <span class="mx-2 text-body-1 text-third font-weight-medium">1 Item</span>
          <v-spacer />
          <v-btn
            icon="mdi-close"
            color="primary"
            size="small"
            @click="closeSidebar"
          />
        </v-toolbar>
        <v-divider />
        <v-list
          v-for="product in products"
          :key="product"
          class="d-flex flex-row align-center my-3"
        >
          <div class="d-flex flex-column ml-2 text-center">
            <v-btn
              icon="mdi-plus"
              variant="outlined"
              color="primary"
              size="x-small"
            />
            <span>{{ 1 }}</span>
            <v-btn
              icon="mdi-minus"
              variant="outlined"
              color="primary"
              size="x-small"
            />
          </div>
          <div class="d-flex align-center text-left px-4">
            <v-avatar
              rounded
              style="width: 64px;height: 64px;"
            >
              <v-img :src="product" />
            </v-avatar>
            <div class="pl-6">
              <h4
                class="d-inline-block text-truncate"
                style="max-width: 120px;"
              >
                Mughal Masala Order Food Online With 50% Off
              </h4> 
              <p class="text-12 mb-0 text-body-2">
                $530 x 1
              </p> 
              <h4 class="text-primary">
                500
              </h4>
            </div>
          </div>
          <div class="me-3">
            <v-btn
              icon="mdi-close"
              color="third"
              size="small"
              variant="text"
            />
          </div>
        </v-list>
      </div>
    
      <div class="px-2">
        <LongButton
          text="Checkout Now ($ 220)"
        />
        <LongButton
          text="VIEW CART"
          variant="outlined"
        />
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script setup>
import {  ref, defineProps, defineEmits, watch } from 'vue'

const products = ref([
  'https://foodhub-nuxt.vercel.app/_nuxt/img/1.d289046.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/2.2633985.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/3.4e7d7b9.png'
])
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits(['update:modelValue'])
const close = ref(props.modelValue)
console.log(close)

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