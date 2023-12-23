<template>
  <section class='location padding'>
    <div class='container'>
      <app-heading :title="'¿Dónde estamos?'" :subtitle="'Minty Host ofrece su servicio de gestión de apartamentos turísticos en Madrid, Sevilla y Málaga, pero seguimos trabajando cada día para estar cuando antes en tu ciudad.'"/>
  
      <div class='content grid3 mtop'>
        <div class='box' v-for="(item, index) in location" :key="index">
          <img :src="item.cover" alt='' />
          <div class='overlay'>
            <h5>{{ item.name }}</h5>
            <p>
              <label>{{ item.Sevilla}}</label>
              <label>{{ item.Madrid }}</label>
              <label>{{ item.Málaga }}</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeading from "../../common/AppHeading"
import { location } from "../../data/Data"

export default {
  name: 'LocationMint',
  components: {
    AppHeading
  },
  data() {
    return {
      location
    }
  }
}
</script>

<style scoped src="./style.css"></style>