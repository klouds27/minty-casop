<template>
    <div class='content grid5 mtop'>
      <div class='box' v-for="(items, index) in featured" :key="index">
        <img :src="items.cover" alt='' />
        <h4>{{ items.name }}</h4>
        <label>{{ items.total }}</label>
      </div>
    </div>
  </template>
  
  <script>
  import { featured } from "../../data/Data"
  
  export default {
    name: 'FeaturedCard',
    data() {
      return {
        featured
      }
    }
  }
  </script>