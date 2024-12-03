<template>
  <v-card
    class="mx-auto"
    max-height="100%"
    max-width="100%"
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
          <span style="font-size: 14px;">{{ star }}/5</span>
        </div>
      </template>
      <template v-if="des">
        <v-card-content class="text-third">
          <h3 class="font-weight-regular text-body-2">
            <span
              style="color:#d23f57;"
              class="font-weight-medium"
            >{{ price }}</span>
            • Cofee, set menu • 15 - 20 min
          </h3>
        </v-card-content>
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
    sec:{
      type:Boolean,
      default:true
    },
    des:{
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