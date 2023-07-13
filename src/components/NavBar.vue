<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">My Site</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sales" class="nav-link">Sales</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>



<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #333;
}

.navbar-list {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 50%;
  justify-content: space-between;
}

.navbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-link {
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: #ddd;
}

.navbar-link-active {
  color: #f9a828;
}
</style>
