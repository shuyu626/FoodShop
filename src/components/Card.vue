<template>
  <v-card
    class="mx-auto"
  >
    <v-img
      :src="props.src"
      cover
      class="position-relative"
    />
    <span
      v-if="disc"
      class="position-absolute top-0 left-0 mt-5 bg-primary rounded-e-xl text-center"
      style="height: 32px;width: 95px;line-height: 32px;font-size: 14px;"
    >Flat 30% Off</span>
    <v-card-item>
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <template v-if="sec">
        <div class="d-flex  my-2">
          <h3
            class="font-weight-black"
            style="max-width: 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
          >
            {{ title }}
          </h3>
          <v-icon
            icon="mdi-star"
            size="small"
            color="yellow-darken-3"
            class="ml-auto"
          />
          <span
            class="font-weight-bold"
            style="font-size: 14px;"
          >{{ star }}
            <span class="font-weight-regular">/5</span>
          </span>
        </div>
      </template>
      <template v-if="desc">
        <v-card-text class="text-third pa-0">
          <h3 class="font-weight-regular text-body-2">
            <span
              style="color:#d23f57;"
              class="font-weight-medium"
            >{{ price }}</span>
            • Cofee, set menu • 15 - 20 min
          </h3>
        </v-card-text>
      </template>
    </v-card-item>
  </v-card>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title:{
        type: String,
        default:''
    },
    src:{
        type:String,
        default:'https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg'
    },
    disc:{
      type:Boolean,
      default:false
    },
    sec:{
      type:Boolean,
      default:true
    },
    desc:{
      type:Boolean,
      default:true
    },
    star:{
      type:Number,
      default:4.5
    },
    price:{
      type:String,
      default:'$20'
    }
  });
  console.log(props.title)
</script>