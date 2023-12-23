<template>
    <section class='about'>
      <AppBack :name="'Identidad'" :title="'Redefiniendo la gestión de los alojamientos extrahoteleros'" :cover="img" />
      <div class='container flex mtop'>
        <div class='left row'>
          <AppHeading :title="'Cómo empezamos'" />
  
          <p>En el año 2015, Guillermo Martinez, CEO y Cofundador de Minty Host, publicó el apartamento de su hermano en Airbnb. Ante la cantidad de tareas asociadas con la gestión de las reservas y consultas que empezó a recibir, decidió asociarse con Felipe MacLellan (Cofundador y Director de Desarrollo de Negocio)</p>
          <p>Ambos comenzaron a desarrollar un proyecto de gestión profesional de alquileres vacacionales, pasando por la aceleradora de startups del IE (Instituto de Empresa). En ese momento se forjaron los pilares de lo que hoy es Minty Host.</p>
          <button class='btn2'>Más sobre nosotros</button>
        </div>
        <div class='right row'>
          <img src="/images/immio.png" alt="" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AppBack from "../common/AppBack.vue"
  import AppHeading from "../common/AppHeading.vue"
  import img from "../images/about.jpg"
  
  export default {
    name: 'AboutUs',
    components: {
      AppBack,
      AppHeading
    },
    data() {
      return {
        img
      }
    }
  }
  </script>
  
  <style scoped src="./about.css"></style>