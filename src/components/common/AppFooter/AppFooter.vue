<template>
    <div>
      <section class='footerContact'>
        <div class='container'>
          <div class='send flex'>
            <div class='text'>
              <h1>¿Tienes preguntas?</h1>
              <p>Te ayudaremos a crecer en tu carrera y desarrollo.</p>
            </div>
            <button class='btn5'>Contáctanos hoy</button>
          </div>
        </div>
      </section>
  
      <footer>
        <div class='container'>
          <div class='box'>
            <div class='logo'>
              <img src="/images/logo.png" alt="" />
              <h2>¿Necesitas ayuda con algo?</h2>
              <p>Recibe actualizaciones, ofertas especiales, tutoriales, descuentos enviados directamente a tu bandeja de entrada cada mes</p>
  
              <div class='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Suscribirse</button>
              </div>
            </div>
          </div>
  
          <div class='box' v-for="(val, index) in footer" :key="index">
            <h3>{{ val.title }}</h3>
            <ul>
              <li v-for="(item, itemIndex) in val.text" :key="itemIndex">{{ item.list }}</li>
            </ul>
          </div>
        </div>
      </footer>
      <div class='legal'>
        <span>© 2023 Minty Host. Diseñado por Adolfo González del Corral.</span>
      </div>
    </div>
  </template>
  
  <script>
  import { footer } from '../../data/Data'
  
  export default {
    name: 'AppFooter',
    setup() {
      return {
        footer
      }
    }
  }
  </script>
  
  <style scoped src="./footer.css"></style>