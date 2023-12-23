<template>
    <div>
      <HeroSection />
      <FeaturedGestion />
      <OurApartment />
      <CifrasMint />
      <LocationMint />
      <OurTeam />
    </div>
  </template>
  
  <script>
  import CifrasMint from "./cifras/CifrasMint.vue"
  import FeaturedGestion from "./featured/FeaturedGestion.vue"
  import HeroSection from "./hero/HeroSection.vue"
  import LocationMint from "./location/LocationMint.vue"
  import OurApartment from "./apartment/OurApartment.vue"
  import OurTeam from "./team/OurTeam.vue"
  
  export default {
    name: 'MainPage',
    components: {
      CifrasMint,
      FeaturedGestion,
      HeroSection,
      LocationMint,
      OurApartment,
      OurTeam
    }
  }
  </script>