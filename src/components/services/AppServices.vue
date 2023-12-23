<template>
    <section class='servicios mb'>
      <Back :name="'Servicios'" :title="' Servicios - Todos los Servicios'" :cover="img" />
      <div class='featured container'>
        <FeaturedCard />
      </div>
    </section>
  </template>
  
  <script>
  import Back from "../common/AppBack.vue"
  import FeaturedCard from "../home/featured/FeaturedCard.vue"
  import img from "../images/services.jpg"
  
  export default {
    name: 'AppServices',
    components: {
      Back,
      FeaturedCard
    },
    data() {
      return {
        img
      }
    }
  }
  </script>
  
  <style scoped src="./Services.css"></style>