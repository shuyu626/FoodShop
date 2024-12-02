<template>
  <v-app-bar
    elevation="0"
    style="height: 64px;"
  >
    <v-container class="d-flex align-center">
      <div class="d-flex">
        <router-link to="/">
          <v-avatar
            size="large"
          >
            <v-img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" />
          </v-avatar>
        </router-link>
        <div
          class="flex-grow-1 rounded bg-white border-sm ms-8 my-auto d-none d-md-flex"
        >
          <div
            class="d-flex align-center ps-5 text-third"
          >
            <v-icon icon="mdi-map-marker" /> 
            <span class="me-2">New York</span>
          </div> 
          <v-btn
            height="38px"
            rounded="0"
            variant="flat"
          >
            <v-icon
              icon="mdi-crosshairs-gps"
              color="third"
            />
          </v-btn>
          <v-text-field
            width="20vw"
            placeholder="Search for restaurant"
            density="compact"
            hide-details
            single-line
            rounded="0"
            variant="plain"
          />
          <v-btn
            icon="mdi-magnify"
            height="40px"
            rounded="e-true s-0"
            color="third"
            elevation="0"
            size="small"
          />
        </div>
      </div>
      <v-spacer />
      <div>
        <v-btn
          class="bg-transparent"
          prepend-icon="mdi-account-circle-outline"
          variant="flat"
          @click=" login = !login"
        >
          ACCOUNT
        </v-btn>
        <v-btn
          class="bg-transparent"
          prepend-icon="mdi-cart-outline"
          variant="flat"
          @click=" cart = !cart"
        >
          (8)
        </v-btn>
        <v-btn
          class="bg-transparent"
          icon="mdi-menu"
          variant="flat"
          rounded="0"
          size="small"
          @click=" drawer = !drawer"
        />
      </div>
    </v-container>
  </v-app-bar>
 
  <LoginDialog v-model="login" />
  <!-- 側邊欄 -->
  <SideBar v-model="drawer" />
  <CartSidebar v-model="cart" />
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(false)
const login = ref(false)
const cart = ref(false)
</script>