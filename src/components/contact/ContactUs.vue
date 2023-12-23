<template>
  <section class='contacto mb'>
    <AppBack :name="'Contacto'" :title="'Obtén ayuda y soporte amigable'" :cover="img" />
    <div class='container'>
      <form class='shadow'>
        <h4>Rellena el formulario</h4> <br />
        <div>
          <input type='text' placeholder='Nombre' />
          <input type='text' placeholder='Correo electrónico' />
        </div>
        <input type='text' placeholder='Asunto' />
        <textarea cols='30' rows='10'></textarea>
        <button>Enviar solicitud</button>
      </form>
    </div>
  </section>
</template>

<script>
import AppBack from "../common/AppBack.vue"
import img from "../images/pricing.jpg"

export default {
name: 'ContactUs',
components: {
  AppBack
},
data() {
  return {
    img
  }
}
}
</script>

<style scoped src="./contact.css"></style>