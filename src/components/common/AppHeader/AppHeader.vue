<template>
  <header>
    <div class='container flex'>
      <div class='logo'>
        <img src="/images/logo.png" alt="" />
      </div>
      <div class='nav'>
        <ul :class="navList ? 'small' : 'flex'">
          <li v-for="(list, index) in nav" :key="index">
            <router-link :to="list.path">{{ list.text }}</router-link>
          </li>
        </ul>
      </div>
      <div class='button flex'>
        <h4>
          <span>2</span> Notificaciones
        </h4>
        <select v-model="selectedLanguage">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
        <button class='btn1'>
          <i class='fa fa-sign-out'></i> Iniciar Sesión
        </button>
      </div>

      <div class='toggle'>
        <button @click="toggleNavList">
          <i class='fa fa-times' v-if="navList"></i>
          <i class='fa fa-bars' v-else></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { nav } from '../../data/Data.js'

export default {
  name: 'AppHeader',
  setup() {
    const navList = ref(false)

    const toggleNavList = () => {
      navList.value = !navList.value
    }

    return {
      nav,
      navList,
      toggleNavList
    }
  }
}
</script>

<style scoped src="./header.css"></style>