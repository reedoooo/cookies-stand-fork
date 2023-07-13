<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <NavBar />
  </header>

  <RouterView />
</template>

<style>
@import './assets/main.css';
</style>
