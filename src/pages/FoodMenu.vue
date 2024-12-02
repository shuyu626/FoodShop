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
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <v-img
          src="https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png"
          height="100%"
          cover
        />
      </v-col>
      <v-col
        cols="12"
        lg="6"
      >
        <v-row>
          <v-col
            v-for="img in imgs"
            :key="img"
            cols="6"
          >
            <v-img :src="img" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-row justify-space-between">
          <h1 class="mb-3">
            Starbucks
          </h1>
          <div class="d-flex align-content-center">
            <v-rating
              :model-value="5"
              density="compact"
              size="small"
              color="yellow-darken-2"
              readonly
            />
            <span class="text-body-2 pt-1">4.5 (1004)</span>
          </div>
        </div>
        
        <p class="text-third mb-3">
          Coffee, signature roasts, light bite, quick bite, fast foods
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-map-marker"
            size="x-small"
          />
          The Dorothy Ross Friedman Residence, NY, US -
          <router-link to="/FoodMenu">
            <span class="text-third">Show Map</span>
          </router-link> 
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-clock-outline"
            size="x-small"
          />
          <span class="text-primary"> Open Now </span>
          - Sun - Mon: 9am - 10pm
        </p>
        <p class="text-third mb-3">
          <v-icon
            icon="mdi-earth"
            size="x-small"
          />
          <router-link
            to="/FoodMenu"
            class="text-decoration-none"
          >
            <span class="text-third"> www.starbucks.com</span>
          </router-link>
        </p>
      </v-col>
    </v-row>
    <v-tabs
      v-model="tab"
      align-tabs="start"
      color="primary"
    >
      <v-tab value="option-1">
        Order Online
      </v-tab>
      <v-tab value="option-2">
        Book A Table
      </v-tab>
      <v-tab value="option-3">
        Reviews
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        value="option-1"
      >
        <div
          class="d-flex flex-row"
        >
          <!--  position-relative -->
          <v-tabs
            v-model="subtab"
            color="primary"
            direction="vertical"
            class="mt-5"
            style="width: 280px;border-right: 1px solid #BDBDBD;"
          >
            <!-- position-absolute top-0 -->
            <v-tab
              v-for="(item, index) in category"
              :key="index"
              :value="index"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-tabs-window
            v-model="subtab"
            class="w-100"
          >
            <v-tabs-window-item value="1">
              <v-container>
                <h3 class="pl-5">
                  Recommended
                </h3>
                <v-card
                  v-for="i in 5"
                  :key="i"
                  class="pa-5"
                  variant="text"
                >
                  <v-row>
                    <v-col
                      cols="12"
                      lg="10"
                    >
                      <v-row no-gutters>
                        <v-col
                          lg="3"
                          xl="2"
                        >
                          <v-img
                            src="https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png"
                            width="150px"
                            height="150px"
                          />
                        </v-col>
                        <v-col
                          lg="9"
                          xl="10"
                        >
                          <h4>Tandoori Chicken (Full)</h4>
                          <v-chip
                            density="compact"
                            size="small"
                            class="my-2"
                          >
                            MUST TRY
                          </v-chip>
                          <div class="d-flex justify-content-center align-center">
                            <v-rating
                              :model-value="5"
                              density="compact"
                              size="x-small"
                              color="yellow-darken-2"
                              readonly
                            /> 
                            <span
                              style="line-height: 24px;font-size: 12px;"
                              class="ml-2 text-third"
                            >(57)</span>
                          </div>
                          <p
                            style="font-size: 12px;"
                            class="my-2"
                          >
                            <span
                              class="text-decoration-line-through"
                            >$25</span>
                            $22.5 
                            <span class="text-primary">10% off</span>
                          </p>
                          <p
                            style="font-size: 12px;"
                            class="text-third"
                          >
                            (4 Pcs mutton in chicken keema gravy)
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="2"
                      class="my-auto"
                    >
                      <div>
                        <v-btn
                          variant="outlined"
                          color="primary"
                        >
                          ADD +
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-tabs-window-item>
      <v-tabs-window-item value="option-2">
        <v-row class="my-3 flex-column flex-lg-row">
          <v-col
            cols="12"
            lg="6"
          >
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="select"
                  density="compact"
                  label="Select Date"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="select"
                  density="compact"
                  label="Number Of Guests"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col
                v-for="label in labels"
                :key="label"
                cols="12"
                sm="6"
              >
                <v-text-field
                  :label="label"
                  density="compact"
                  variant="outlined"
                  color="primary"
                  hide-details
                />
              </v-col>

              <v-col cols="12">
                <v-btn
                  color="primary"
                  variant="flat"
                >
                  BOOK
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png"
              style="width: 385px;"
              class="mx-auto"
            />
          </v-col>
        </v-row>
      </v-tabs-window-item>

      <v-tabs-window-item value="option-3">
        <v-row>
          <v-col
            cols="12"
            lg="6"
          >
            <Comment>
              <template #img>
                <v-row class="d-flex flex-row my-2">
                  <v-col cols="6">
                    <v-img
                      src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png"
                    />
                  </v-col>
                </v-row>
              </template>
            </Comment>
            <div class="d-flex flex-row mt-5">
              <v-avatar size="small">
                <v-img
                  alt="John"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png"
                />
              </v-avatar>              
              <h4 class="ml-4 my-auto text-body-2 font-weight-medium">
                Emmet McDermott
              </h4>
            </div>
            <h4 class="font-weight-regular text-third my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
            </h4>
            <div class="d-flex flex-row mt-5">
              <v-avatar size="small">
                <v-img
                  alt="John"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png"
                />
              </v-avatar>              
              <h4 class="ml-4 my-auto text-body-2 font-weight-medium">
                Emmet McDermott
              </h4>
            </div>
            <h4 class="font-weight-regular text-third my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
            </h4>
            <v-divider class="mt-5" />
            <Comment
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/13.35cd907.jpg"
            />
            <Comment
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/9.19544e8.jpg"
            />
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png"
              class="mx-auto"
              style="width:385px;"
            />
          </v-col>
        </v-row>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script setup>
import Comment from '@/components/Comment.vue';
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

const imgs = ref([
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png',
  'https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png',
])
const tab = ref('option-1')
const subtab = ref('1')
const category = ref([
  'Recomended (40)',
  'DPB Special Combos (10)',
  'Chineese Starters (30)',
  'Chinese Main Course (75)',
  'Indian Main Course (63)',
  'Rice & Pulao (7)',
  'Desserts (1)',
  'Soup & wonton (15)',
  'Accompaniment (4)',
  'Biryani (1)',
])
const select = ref([
  'Foo',
  'Bar',
  'Fizz',
  'Buzz'
])
const labels = ref([
  'First Name',
  'Last Name',
  'Email',
  'Phone'
])
</script>