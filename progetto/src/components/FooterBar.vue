<!-- eslint-disable prettier/prettier -->

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img src="../assets/Logo_Reply.png" alt="logo_reply" class="logo" />
        </div>
        <div class="col-4">
          <ul class="not_dot">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/prenotazione">Prenota</router-link>
            </li>
          </ul>
        </div>
        <div class="col-4 privacy">
          <p>Policy & Legal</p>
          <ul>
            <li>Privacy & Cookie Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Notice</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: "FooterBar",
};
</script>
<!-- eslint-disable prettier/prettier -->

<style>

footer {
  background-color: lightgray;
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
}
img {
  width: 20%;
  height: auto;
  float: left;
}
.privacy {
  text-align: left;
}
.not_dot {
  list-style-type: none;
  padding: 0; /* Opzionale, rimuove il padding predefinito */
  margin-left: 100px;
  text-align: left;
}
</style>
