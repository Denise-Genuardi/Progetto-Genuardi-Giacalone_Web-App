<template>
  <footer class="footer">
    <div class="footer-left">
      <img
        src="@/assets/Logo_Reply.png"
        alt="Logo aziendale di Reply"
        class="footer-logo"
      />
      <div class="social-icons">
        <a href="https://www.facebook.com/ReplyinUK" target="_blank">
          <img src="@/assets/facebook.png" alt="Pagina Facebook di Reply UK" />
        </a>
        <a href="https://x.com/Reply_UK" target="_blank">
          <img src="@/assets/twitter.png" alt="Pagina X di Reply UK" />
        </a>
        <a href="https://www.linkedin.com/company/reply/" target="_blank">
          <img src="@/assets/linkedin.png" alt="Profilo LinkedIn di Reply" />
        </a>
        <a href="https://www.xing.com/pages/reply" target="_blank">
          <img src="@/assets/xing.png" alt="Profilo Xing di Reply" />
        </a>
      </div>
      <p class="copyright">© 2024 Reply. Tutti i diritti riservati.</p>
    </div>

    <div class="footer-center">
      <h4><b>I nostri contatti</b></h4>
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

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
.footer {
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
}

.footer-left,
.footer-center,
.footer-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.footer-center,
.footer-right {
  padding: 20px;
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
  display: flex;
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
  color: #495057;
}

ul {
  text-align: left;
  list-style-type: none;
  font-size: 15px;
  line-height: 25px;
}

a:focus {
  outline: 2px solid #007bff;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }

  .footer-left,
  .footer-center,
  .footer-right {
    margin: 10px;
  }

  .footer-logo {
    width: 40%;
  }

  .social-icons img {
    width: 20px;
  }

  .footer-center,
  .footer-right {
    padding: 10px;
  }
}
</style>
