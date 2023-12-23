<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/AppHeader/AppHeader.vue'
import Footer from './components/common/AppFooter/AppFooter.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './App.css';
</style>