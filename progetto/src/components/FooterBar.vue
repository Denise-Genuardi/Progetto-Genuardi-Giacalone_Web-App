<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="@/assets/Logo_Reply.png" alt="Logo" class="footer-logo" />
      <div class="social-icons">
        <a href="https://https://www.facebook.com/ReplyinUK" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/facebook.png" alt="Facebook" />
        </a>
        <a href="https://https://x.com/Reply_UK" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/twitter.png" alt="X" />
        </a>
        <a href="https://https://www.linkedin.com/company/reply/" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://https://www.xing.com/pages/reply" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/xing.png" alt="Xing" />
        </a>
      </div>
      <p class="copyright">© 2024 Reply. Tutti i diritti riservati.</p>
    </div>
    
    <div class="footer-center">
      <h4><b>Contattaci</b></h4>
      <ul>
        <li>
          <b>Email:</b> <a href="mailto:info@reply.com">info@reply.com</a>
        </li>
        <li><b>Telefono:</b> +39 123 456 7890</li>
        <li><b>Indirizzo:</b> Via Roma, 123, Roma, Italia</li>
      </ul>
    </div>

    <div class="footer-right">
      <h4><b>Link Utili</b></h4>
      <ul class="link_utili">
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
  width: 100%; /* Estende il footer su tutta la larghezza */
  background-color: lightgray; 
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  font-family: IBM Plex Sans JP;
  text-align: center;
}

.footer-left, .footer-center, .footer-right {
  flex: 1;
  margin: 0 20px; /* Aggiunge spazio tra i blocchi */
  min-width: 200px; /* Aggiunge una larghezza minima per evitare sovrapposizioni */
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra gli elementi nel blocco di sinistra */
}

.footer-center {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra gli elementi nel blocco centrale */
  margin-right: auto;
  margin-top: 15px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra gli elementi nel blocco di destra */
}

.footer-right ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-logo {
  margin-bottom: 10px;
  width: 50%;
}

.social-icons {
  display:flex;
  align-items: left;
  padding-top: 5px;
}

.social-icons a {
  margin-right: 10px;
}

.social-icons img {
  width: 30px;
  height: auto;
}

.copyright {
  margin-top: 10px;
  font-size: 0.8em;
  color: #6c757d;
}
ul{
  text-align: left;
  list-style-type: none;
  font-family: IBM Plex Sans JP;
  font-size: 15px;
  line-height: 25px;
}

</style>
