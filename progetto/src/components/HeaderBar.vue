<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" @click="goToHome">
        <img src="../assets/Logo_Reply.png" alt="logo" class="logo" />
      </a>

      <!-- Burger Menu -->
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu Items -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item no_btn">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item no_btn">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/prenotazione" class="nav-link">
              <button type="button" class="btn-custom">Iscriviti</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "HeaderBar",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logo {
  width: 200px;
  height: auto;
  margin-top: 20px;
  margin-left: 50px;
}

.nav-link {
  font-size: 25px;
  font-weight: bold;
  color: #004e59;
  text-decoration: none;
  margin-left: 50px;
  margin-right: 50px;
}

.router-link-active {
  text-decoration: underline;
}

.no_btn {
  padding-top: 10px;
}

.btn-custom {
  padding: 10px 20px;
  font-size: 20px;
  color: white;
  border-color: #004e59;
  background-color: #004e59;
  margin-top: 3px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-custom:hover {
  background-color: #003d48;
}

.router-link-active .btn-custom {
  background-color: white;
  color: #004e59;
  font-weight: bold;
}

.navbar-toggler.custom-toggler {
  background-color: #004e59;
  color: white;
  border-color: #004e59;
}

.navbar-toggler-icon {
  background-image: none;
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: relative;
}

@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }
  .logo {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
