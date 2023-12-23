<template>
  <section class='cifras padding'>
    <div class='container'>
      <app-heading :title="'Minty Host en 3 cifras'" :subtitle="'Contacta con Minty Host'" />
  
      <div class='content grid4 mtop'>
        <div class='box' v-for="(val, index) in cifras" :key="index">
          <div class='icon'>
            <span>{{ val.icon }}</span>
          </div>
          <h1>{{ val.num }}</h1>
          <p>{{ val.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeading from "../../common/AppHeading"
import { cifras } from "../../data/Data"

export default {
  name: 'CifrasMinty', 
  components: {
    AppHeading
  },
  data() {
    return {
      cifras
    }
  }
}
</script>

<style scoped src="./cifras.css"></style>