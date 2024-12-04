<template>
  <v-navigation-drawer
    v-model="close"
    width="320"
    temporary
    style="position:fixed;height: 100%;"
  >
    <v-toolbar class="px-2 font-weight-bold text-h6 bg-white">
      <span class="mx-3 text-body-1 font-weight-black text-grey-darken-3">Navbar</span>
      <v-spacer />
      <v-btn
        size="small"
        color="third"
        icon="mdi-close"
        @click="closeSidebar()"
      />
    </v-toolbar>
    <v-expansion-panels
      v-model="openedPanel"
      variant="accordion"
    >
      <v-expansion-panel
        v-for="(menu,index) in drawMenus"
        :key="index"
        :value="menu.title"
        elevation="0"
        @click="togglePanel(menu)"
      >
        <v-expansion-panel-title>
          <v-icon
            :class="menu.open ? 'active-icon me-3' : 'text-third me-3'"
            :icon="menu.icon"
          />
          <span :class="{'active-text': menu.open}">
            {{ menu.title }}
          </span>
        </v-expansion-panel-title>
        
        <v-expansion-panel-text
          v-for="i in menu.items"
          :key="i"
        >
          <router-link
            class="text-decoration-none text-third"
            to="/ResturantTwoColumn"
          >
            <v-btn
              class="w-100 text-capitalize font-weight-regular justify-start pl-15"
              variant="text"
            >
              {{ i }}
            </v-btn>
          </router-link>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-expansion-panels
      variant="accordion"
    >
      <v-expansion-panel
        v-for="menu in drawMenus"
        :key="menu.title"
        v-model="menu.open"
        elevation="0"
        selected-class="primary"
        max-height="40"
      >
        <v-expansion-panel-title>
          <v-icon
            :class="{'active':menu.open}"
            :icon="menu.icon"
            class="text-third me-3"
          />
          <span :class="{'active':menu.open}">
            {{ menu.title }}
          </span>
        </v-expansion-panel-title>
        
        <v-expansion-panel-text
          v-for="i in menu.items"
          :key="i"
        >
          <router-link
            class="text-decoration-none text-third "
            to="/ResturantTwoColumn"
          >
            <v-btn
              class="w-100 text-capitalize font-weight-regular justify-start pl-15"
              variant="text"
            >
              {{ i }}
            </v-btn>
          </router-link>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels> -->
  </v-navigation-drawer>
</template>
<script setup>
import {  ref, defineProps, defineEmits, watch,computed } from 'vue'

const drawMenus = computed(() => {
  return [
    { title:'Dashboards', icon:'mdi-view-dashboard-variant-outline', items:['Review', 'Photos', 'Order List', 'Order History', 'Followers', 'Bookmarks'],open: true},
    { title:'Resturant', icon:'mdi-silverware-fork-knife', items:['Food Menu', 'Resturant Two Column', 'Search Restutant'],open: false}
  ]
})
const openedPanel = ref("Dashboards");

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

const togglePanel = (clickedMenu) => {
  drawMenus.value.forEach(menu => {
    if (menu !== clickedMenu) {
      menu.open = false;
    }
  });

  // Toggle the clicked menu
  clickedMenu.open = !clickedMenu.open;
  
};
watch(() => props.modelValue, (newVal) => {
  close.value = newVal;
});
watch(close, (newVal) => {
  emit('update:modelValue', newVal);
});


</script>
<style scoped>
::v-deep .v-expansion-panel-title__overlay{
  background-color: #d23f57;
}
::v-deep .v-expansion-panel-text__wrapper{
  padding: 0;
}
::v-deep .mdi-chevron-up{
  color: #d23f57;
}
.active-text{
  color:#d23f57;
}
.active-icon {
  color: #d23f57 !important;
}
</style>