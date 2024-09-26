<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <!-- Aggiungi l'evento @click qui -->
      <a class="navbar-brand" @click="goToHome">
        <img src="../assets/Logo_Reply.png" alt="logo" class="logo" />
      </a>

      <!-- Burger Menu per mobile -->
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
              <button type="button" class="btn btn-outline-secondary">
                Iscriviti
              </button>
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
      this.$router.push("/"); // Reindirizza alla home page
    },
  },
};
</script>

<style scoped>
/* Dimensione del logo */
.logo {
  width: 200px;
  height: auto;
}

/* Stili per i link */
.nav-link {
  font-family: "IBM Plex Sans JP";
  font-size: 25px;
  font-weight: bold;
  color: #004e59;
  text-decoration: none;
  margin-left: 40px;
}

.nav-link:hover {
  color: #002d34;
}

.no_btn {
  padding-top: 8px;
}

/* Stili per il pulsante */
button {
  padding: 10px 20px;
  font-size: 20px;
  color: white;
  border-color: #004e59;
  background-color: #004e59;
}

button:hover {
  background-color: #003d48;
}

/* Stili per il burger menu */
.navbar-toggler.custom-toggler {
  background-color: #004e59;
  color: white;
  border-color: #004e59;
}

/* Stile personalizzato per l'icona del burger menu */
.navbar-toggler-icon {
  background-image: none; /* Rimuove l'immagine SVG di default */
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: white; /* Imposta il colore dell'icona */
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: "";
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: white;
  position: absolute;
  left: 0;
}

.navbar-toggler-icon::before {
  top: -8px;
}

.navbar-toggler-icon::after {
  top: 8px;
}

/* Spazio extra sotto la navbar per evitare che il contenuto venga coperto */
body {
  padding-top: 80px; /* Modifica questa altezza in base all'altezza effettiva della navbar */
}

/* Stili per schermi piccoli (max-width: 768px) */
@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }
}
</style>
