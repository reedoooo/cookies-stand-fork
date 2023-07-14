<template>
  <header>


    <div class="wrapper">
      <h1 class="title">Welcome to Pat's Salmon Cookies!</h1>
    <img class="logo" src="../assets/img/salmon.png" alt="Salmon logo">
  <main>
    <div class="about">
      <h1 class="about-title">About Us</h1>
      <p class="about-description">We are a leading company in the industry, with a strong commitment to excellence and customer satisfaction. Our team is dedicated to providing the highest quality products and services.</p>
    </div>
  </main>

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>



  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

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

.about {
  margin-top: 2rem;
  text-align: center;
  padding: 0;

}


.about-title {
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  padding: 0;
  margin-bottom: 5px;
}

.about-description {
  font-size: 1em;
  color: #666;
  line-height: 1.4;
  max-width: 600px;
  margin: 0 auto;
  padding: 0px;
}
</style>
