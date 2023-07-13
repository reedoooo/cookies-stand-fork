<template>
  <main class="home d-flex flex-column align-items-center justify-content-center py-5 bg-light vh-100 text-dark">
    <div class="logo-container d-flex justify-content-center align-items-center w-100">
      <img class="logo" src="../assets/img/salmon.png" alt="Salmon logo">
    </div>
    
    <h1 class="title fs-1 fw-bold text-dark text-center my-3">Salmon Cookies</h1>
    
    <div class="info fs-5 text-muted text-center lh-lg mx-auto" style="max-width: 800px;">
      <p>Welcome to Salmon Cookies! A home-cooked, family-run business since 1989...</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f9f9f9;
  height: 100vh;
  color: #333;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* .logo {
  width: 150px;
  height: 150px;
} */

.title {
  font-size: 2.5em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 20px 0;
}

.info {
  font-size: 1.2em;
  color: #666;
  line-height: 1.5;
  text-align: center;
  max-width: 800px;
}
</style>
