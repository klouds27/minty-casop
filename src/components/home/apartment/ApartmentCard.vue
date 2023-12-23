<template>
    <div class='content grid3 mtop'>
      <div v-for="(val, index) in list" :key="index" class='box shadow'>
        <div class='img'>
          <img :src="val.cover" alt='' />
        </div>
        <div class='text'>
          <div class='category flex'>
            <span :style="{ background: val.category === 'Disponible' ? '#25b5791a' : '#ff98001a', color: val.category === 'Disponible' ? '#25b579' : '#ff9800' }">{{ val.category }}</span>
            <i class='fa fa-heart'></i>
          </div>
          <h4>{{ val.name }}</h4>
          <p>
            <i class='fa fa-location-dot'></i> {{ val.location }}
          </p>
        </div>
        <div class='button flex'>
          <div>
            <button class='btn2'>{{ val.price }}</button> 
          </div>
          <span>{{ val.type }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { list } from "../../data/Data"
  
  export default {
    name: 'ApartmentCard',
    data() {
      return {
        list
      }
    }
  }
  </script>
  
  <style scoped></style>