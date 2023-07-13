<template>
  <div class="about">
    <h1 class="about-title">About Us</h1>
    <p class="about-description">We are a leading company in the industry, with a strong commitment to excellence and customer satisfaction. Our team is dedicated to providing the highest quality products and services.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f4f4f4;
  height: 100vh;
}

.about-title {
  font-size: 2em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.about-description {
  font-size: 1.2em;
  color: #666;
  line-height: 1.5;
  text-align: center;
  max-width: 800px;
}
</style>
