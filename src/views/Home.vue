<template>
  <div class="home d-flex flex-column align-items-center justify-content-center">
    <navbar></navbar>
    <header-component></header-component>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import MainComponent from '../components/MainComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}
</style>
