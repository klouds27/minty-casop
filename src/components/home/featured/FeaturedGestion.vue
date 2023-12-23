<template>
  <section class='featured padding'>
    <div class='container'>
      <app-heading :title="'Gestión de alojamientos turísticos'" />
      <featured-card />
    </div>
  </section>
</template>

<script>
import AppHeading from "../../common/AppHeading"
import FeaturedCard from "./FeaturedCard"

export default {
  name: 'FeaturedGestion', 
  components: {
    AppHeading,
    FeaturedCard
  }
}
</script>

<style scoped src="./Featured.css"></style>