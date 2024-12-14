<template>
  <Navbar
    v-if="showNavbar"
  />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
  <v-btn
    icon="mdi-chevron-up"
    color="primary"
    class="position-fixed"
    style="right: 16px;bottom: 16px;"
    size="small"
    elevation="5"
    @click="scrollTo()"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
const route = useRoute();
const scrollTo = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

const showNavbar = ref(true);
// 滾動軸的距離超過視窗一半的時候，出現navbar
const handleScroll = () => {
  if (route.path === '/'){
    showNavbar.value = window.scrollY > window.innerHeight / 2;
  }else{
    showNavbar.value = true
  }
}

// 偵測是否為首頁，是的話隱藏navbar
watch(()=> route.path,
(newPath)=>{
  if(newPath === '/'){
    showNavbar.value = false
  }else {
    showNavbar.value = true
  }
})
// 元件掛載後監聽滾動軸
onMounted(() => {
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll);
    handleScroll()
  }
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>
<style scoped>

</style>