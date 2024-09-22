<!-- eslint-disable prettier/prettier -->
<template>
  <img src="../assets/teamworking.jpg" alt="webinar" class="webinar_img" />

  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra: Descrizione del webinar -->
      <div class="col-md-6 mb-4 intro">
        <h1>Strategie di Marketing Automation con Reply</h1>
        <p class="lead">Massimizza il Tuo Potenziale</p>
        <p>
          Unisciti a noi per un webinar esclusivo in cui esploreremo come Reply
          può rivoluzionare le tue strategie di marketing automation. Scoprirai
          come ottimizzare le campagne, aumentare l'engagement e migliorare il
          ROI attraverso l'uso intelligente di strumenti di automazione. I
          nostri esperti condivideranno case study reali e best practices,
          offrendoti insight preziosi per implementare soluzioni efficaci nella
          tua azienda. Non perdere l'occasione di portare il tuo marketing al
          livello successivo!
        </p>
        <button class="btn btn-secondary btn-lg btn_scopri">
          Scopri di più
        </button>
      </div>

      <!-- Colonna destra: Cards degli speaker -->
      <div class="col-md-6">
        <!-- Ripeti questo blocco per ogni speaker -->
        <div class="card mb-3" v-for="speaker in speakers" :key="speaker.id">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="speaker.image"
                class="img-fluid rounded-start"
                :alt="speaker.name"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ speaker.name }}</h5>
                <p class="card-text">{{ speaker.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  nome: "MainComponent",
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
.intro {
  text-align: left;
}
.btn_scopri {
  background-color: green;
}
.webinar_img {
  width: 70%;
}
</style>
