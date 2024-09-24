<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="@/assets/Logo_Reply.png" alt="Logo" class="footer-logo" />
      <div class="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/twitter.png" alt="X" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/xing.png" alt="Xing" />
        </a>
      </div>
      <p class="copyright">© 2024 Reply. Tutti i diritti riservati.</p>
    </div>
    
    <div class="footer-center">
      <h4><b>Contattaci</b></h4>
      <p>Email: <a href="mailto:info@reply.com">info@reply.com</a></p>
      <p>Telefono: +39 123 456 7890</p>
      <p>Indirizzo: Via Roma, 123, Roma, Italia</p>
    </div>

    <div class="footer-right">
      <h4><b>Link Utili</b></h4>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/prenota">Prenota</router-link></li>
      </ul>
    </div>
  </footer>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: 'FooterBar'
}
</script>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: flex-start; /* Allinea tutto a sinistra */
  align-items: flex-start;
  flex-wrap: wrap;
  font-family: IBM Plex Sans JP;
}

.footer-left, .footer-center, .footer-right {
  flex: 1;
  margin: 0 10px;
}

.footer-left {
  display: flex;
  flex-direction: column; /* Allinea verticalmente gli elementi */
  align-items: flex-start; /* Allinea gli elementi a sinistra */
}

.footer-center {
  display: flex;
  flex-direction: column; /* Allinea verticalmente gli elementi */
  align-items: flex-start; /* Allinea gli elementi a sinistra */
  margin-right: auto; /* Spinge il contenuto verso sinistra */
}

.footer-right {
  display: flex;
  flex-direction: column; /* Allinea verticalmente gli elementi */
  align-items: flex-start; /* Allinea gli elementi a sinistra */
}

.footer-right ul {
  list-style-type: none; /* Rimuove i puntini */
  padding: 0; /* Rimuove il padding predefinito */
  margin: 0; /* Rimuove il margine predefinito */
}

.footer-logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.social-icons {
  display: flex; /* Rende le icone dei social un flex container */
  align-items: center; /* Allinea verticalmente le icone */
}

.social-icons a {
  margin-right: 10px; /* Spazio a destra di ogni icona */
}

.social-icons a:last-child {
  margin-right: 0; /* Rimuove lo spazio dell'ultima icona */
}

.social-icons img {
  width: 24px;
  height: 24px;
}

.copyright {
  margin-top: 10px;
  font-size: 0.8em;
  color: #6c757d;
}
</style>
