<template>
  <section class='team background'>
    <div class='container'>
      <app-heading :title="'Nuestros Agentes Destacados'" :subtitle="'El viaje tiene un alto contenido emocional y consideramos muy relevante percibir las sensaciones de los huéspedes e inquilinos.'"/>
  
      <div class='content mtop grid3'>
        <div class='box' v-for="(val, index) in team" :key="index">
          <button class='btn3'>{{ val.list }} Listados</button>
          <div class='details'>
            <div class='img'>
              <img :src="val.cover" alt='' />
              <i class='fa-solid fa-circle-check'></i>
            </div>
            <i class='fa fa-location-dot'></i>
            <label>{{ val.address }}</label>
            <h4>{{ val.name }}</h4>
  
            <ul>
              <li v-for="(icon, iconIndex) in val.icon" :key="iconIndex">{{ icon }}</li>
            </ul>
            <div class='button flex'>
              <button>
                <i class='fa fa-envelope'></i>
                Mensaje
              </button>
              <button class='btn4'>
                <i class='fa fa-phone-alt'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeading from "../../common/AppHeading"
import { team } from "../../data/Data"

export default {
  name: 'OurTeam',
  components: {
    AppHeading
  },
  data() {
    return {
      team
    }
  }
}
</script>

<style scoped src="./Team.css"></style>