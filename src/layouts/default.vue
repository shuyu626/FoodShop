<template>
  <Navbar v-if="route.path !== '/'" />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer class="d-block pa-0">
      <div class="w-100 mt-8 mb-15">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h2>Popular Localities In & Around New York</h2>
            </v-col>
            <template
              v-for="i in 4"
              :key="i"
            >
              <v-col
                cols="12"
                sm="6"
                lg="3"
                to="/"
                class="d-flex flex-column"
              >
                <router-link
                  to="/"
                  class="mb-2 text-decoration-none text-black"
                >
                  Newport <span class="text-third">(26 places)</span>
                </router-link>
                <router-link
                  to="/"
                  class="mb-2 text-decoration-none text-black"
                >
                  Brooklyn <span class="text-third">(14 places)</span>
                </router-link>
                <router-link
                  to="/"
                  class="mb-2 text-decoration-none text-black"
                >
                  Chinatown <span class="text-third">(10 places)</span>
                </router-link>
                <router-link
                  to="/"
                  class="mb-2 text-decoration-none text-black"
                >
                  Chelsea <span class="text-third">(20 places)</span>
                </router-link>
                <router-link
                  to="/"
                  class="mb-2 text-decoration-none text-black"
                >
                  Coney Island <span class="text-third">(6 places)</span>
                </router-link>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </div>
      <div class="w-100 pt-5 pb-15 bg-second">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="3"
            >
              <div class="mt-10 mb-4">
                <v-avatar
                  size="large"
                >
                  <v-img src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png" />
                </v-avatar>
              </div>
              <h4 class="text-third font-weight-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
              </h4>
              <div class="d-flex flex-wrap mt-5">
                <div
                  class="me-4 rounded-0"
                >
                  <img
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                    width="110"
                  >
                </div> 
                <div
                  class="rounded-0"
                >
                  <img
                    src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"
                    width="110"
                  >
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="3"
            >
              <h2 class="mb-4">
                About Us
              </h2>
              <div
                v-for="link in routerlink.slice(0,5)"
                :key="link"
                class="d-flex flex-column"
              >
                <router-link
                  to="/"
                  class="mb-2 text-third text-decoration-none hover-text-primary"
                >
                  <span class="link-hover">
                    {{ link }}
                  </span>
                </router-link>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="3"
            >
              <h2 class="mb-4">
                Customer Care
              </h2>
              <div
                v-for="link in routerlink.slice(5,10)"
                :key="link"
                class="d-flex flex-column"
              >
                <router-link
                  to="/"
                  class="mb-2 text-third text-decoration-none"
                >
                  <span class="link-hover">
                    {{ link }}
                  </span>
                </router-link>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              lg="3"
            >
              <h2 class="mb-4">
                Contact Us
              </h2>
              <h4 class="mb-2 text-third font-weight-regular">
                Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh. Email: uilib@gmail.com Phone: +880 1123 456 780
              </h4>
              <h4 class="mb-2 text-third font-weight-regular">
                Sylhet, Bangladesh.
              </h4>
              <h4 class="mb-2 text-third font-weight-regular">
                Email: uilib@gmail.com
              </h4>
              <h4 class="mb-2 text-third font-weight-regular">
                Phone: +880 1123 456 780
              </h4>
              <div class="d-flex flex-row">
                <v-btn
                  icon="mdi-facebook"
                  rounded="circle"
                  class="me-2"
                  size="x-small"
                  color="indigo-darken-4"
                />
                <v-btn
                  icon="mdi-twitter"
                  rounded="circle"
                  class="me-2"
                  size="x-small"
                  color="indigo-darken-4"
                />
                <v-btn
                  icon="mdi-instagram"
                  rounded="circle"
                  class="me-2"
                  size="x-small"
                  color="indigo-darken-4"
                />
                <v-btn
                  icon="mdi-youtube"
                  rounded="circle"
                  class="me-2"
                  size="x-small"
                  color="indigo-darken-4"
                />
                <v-btn
                  icon="mdi-google"
                  rounded="circle"
                  size="x-small"
                  color="indigo-darken-4"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
// import { computed, ref } from 'vue'
// import { useDisplay } from 'vuetify';
// const { mobile } = useDisplay()
// const menus = computed(() => {
//   return [
//     {title:'ACCOUNT',to:'/Account',icon:'mdi-account-circle-outline'},
//     {title:'(8)',to:'/Shopping', icon:'mdi-cart-outline'},
//     // {title: 'home', to:'/', icon:'mdi-home'},
//     // {title: 'Food Menu', to:'/FoodMenu', icon:'mdi-silverware'},
//     // {title: 'Resturant Two Column', to:'/ResturantTwoColumn', icon:'mdi-cookie'}
//   ]
// })
// const drawMenus = computed(() => {
//   return [
//     { title:'Dashboards', icon:'view-dashboard-variant-outline', items:['Review', 'Photos', 'Order List', 'Order History', 'Followers', 'Bookmarks']},
//     { title:'Resturant', icon:'silverware-fork-knife', items:['Food Menu', 'Resturant Two Column', 'Search Restutant']}
//   ]
// })
// const drawer = ref(false)

const routerlink = ref([
  'Careers',
  'Our Stores',
  'Our Cares',
  'Terms & Conditions',
  'Privacy Policy',
  'Help Center',
  'How to Buy',
  'Track Your Order',
  'Corporate & Bulk Purchasing',
  'Returns & Refunds'
])


</script>
<style scoped>
.link-hover{
  &:hover{
    color: #d23f57;
  }
}
</style>