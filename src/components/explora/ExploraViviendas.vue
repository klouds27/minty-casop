<template>
  <section class='blog-out mb'>
    <Back :name="'Explora'" :title="'Descubre nuestras viviendas'" :cover="img" />
    <div class='container recent'>
      <ApartmentCard />
    </div>
  </section>
</template>

<script>
import Back from "../common/AppBack.vue"
import ApartmentCard from "../home/apartment/ApartmentCard.vue"
import img from "../images/about.jpg"

export default {
  name: 'ExploraViviendas',
  components: {
    Back,
    ApartmentCard
  },
  data() {
    return {
      img
    }
  }
}
</script>

<style scoped src="../home/apartment/apartment.css"></style>