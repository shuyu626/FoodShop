<template>
  <v-card
    class="mx-auto"
    max-width="374"
  >
    <v-img
      :src="props.src"
      cover
    />

    <v-card-item>
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <template v-if="sec">
        <div class="d-flex my-2">
          <h4 class="font-weight-medium">
            {{ title }}
          </h4>
          <v-spacer />
          <v-icon
            icon="mdi-star"
            size="small"
            color="yellow-darken-3"
          />
          <span style="font-size: 14px;">4.5 /5</span>
        </div>
      </template>
      <template v-if="des">
        <v-card-subtitle>
          <h3 class="font-weight-regular">
            <span
              style="color:#d23f57;"
              class="font-weight-black"
            >$20</span>
            • Cofee, set menu • 15 - 20 min
          </h3>
        </v-card-subtitle>
      </template>
    </v-card-item>
  </v-card>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:{
        type: String
    },
    src:{
        type:String,
        default:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg'
    },
    sec:{
      type:Boolean,
      default:true
    },
    des:{
      type:Boolean,
      default:true
    }
  });
  console.log(props.title)
</script>