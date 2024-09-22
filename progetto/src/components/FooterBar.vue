<!-- eslint-disable prettier/prettier -->

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img src="../assets/Logo_Reply.png" alt="logo_reply" class="" />
        </div>
        <div class="col-4"></div>
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
  width: 30%;
  height: auto;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
  margin-right: 10px;
}
.privacy {
  text-align: left;
}
</style>
