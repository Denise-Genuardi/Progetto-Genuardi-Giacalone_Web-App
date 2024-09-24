<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container header">
    <div class="row align-items-center">
      <div class="col">
        <img src="../assets/Logo_Reply.png" alt="logo" />
      </div>
      <div class="col text-center">
          <router-link to="/">Home</router-link>
      </div>
      <div class="col text-center">
          <router-link to="/about">About</router-link>
      </div>
      <div class="col text-center">
        <router-link to="/prenotazione">
          <button type="button" class="btn btn-outline-secondary">
            Prenota
          </button>
        </router-link>
      </div> 
    </div>
    <router-view />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: "HeaderBar",
};
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.header {
  padding: 30px;
  align-items: center;
}

img {
  width: 80%;
  height: auto;
  float: left;
}

a {
  font-family: IBM Plex Sans JP;
  text-decoration: none;
  color: #004E59;
  font-weight: bold;
  font-size: 25px;
  margin-left: 20px;
}

a:hover {
  color: #002D34; /* Cambia colore al passaggio del mouse */
}

button {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: 'IBM Plex Sans JP', sans-serif;
  color: white;
  border-color: #004E59;
  background-color: #004E59;
  margin-left: 20px;
  font-family: IBM Plex Sans JP;
  font-size: 20px;

}

button:hover {
  background-color: #003D48; /* Scuro al passaggio del mouse */
}

.col {
  text-align: center;
}

</style>
