<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
