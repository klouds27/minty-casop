<template>
  <section class='recent padding'>
    <div class='container'>
      <AppHeading title='Nuestras Viviendas' subtitle='Navega en Minty Host y usa nuestros filtros personalizados para encontrar una vivienda que encaje con tu presupuesto y tus necesidades.' />
      <ApartmentCard />
    </div>
  </section>
</template>

<script>
import AppHeading from "../../common/AppHeading.vue"
import ApartmentCard from "./ApartmentCard.vue"

export default {
  name: 'OurApartment',
  components: {
    AppHeading,
    ApartmentCard
  }
}
</script>

<style scoped src="./apartment.css"></style>