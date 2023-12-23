<template>
  <section class='hero'>
    <div class='container'>
      <app-heading title='A fresh stay starts with Minty' subtitle='Alquiler de apartamentos amueblados.' />
  
      <form class='flex'>
        <div class='box'>
          <span>Ciudad</span>
          <input type='text' placeholder='Ciudad' />
        </div>
        <div class='box'>
          <span>Nº Huéspedes</span>
          <input type='text' placeholder='nº huespedes' />
        </div>
        <div class='box'>
          <span>Llegada</span>
          <input type='text' placeholder='Llegada' />
        </div>
        <div class='box'>
          <span>Salida</span>
          <input type='text' placeholder='Salida' />
        </div>
        <button class='btn1'>
          <i class='fa fa-search'></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="js">
import AppHeading from "../../common/AppHeading.vue"

export default {
  name: 'HeroSection', 
  components: {
    AppHeading
  }
}
</script>

<style scoped src="./hero.css"></style>