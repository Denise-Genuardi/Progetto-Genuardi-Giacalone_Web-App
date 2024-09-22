<!-- eslint-disable prettier/prettier -->
<template>
  <img src="../assets/teamworking.jpg" alt="webinar" class="webinar_img" />

  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra: Descrizione del webinar -->
      <div class="col-md-8 mb-4 intro">
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
        <button class="btn btn-primary btn-lg">Scopri di più</button>
      </div>

      <div class="col-md-4">
        <!-- Ripeti questo blocco per ogni speaker -->
        <div class="card mb-3" v-for="speaker in speakers" :key="speaker.id">
          <img
            :src="speaker.image"
            class="img-fluid rounded-start card-img-top"
            :alt="speaker.name"
          />

          <div class="card-body">
            <h5 class="card-title">{{ speaker.name }}</h5>
            <p class="card-text">{{ speaker.bio }}</p>
            <p class="card-text">{{ speaker.argument }}</p>
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
  data() {
    return {
      speakers: [
        {
          id: 1,
          name: "Francesca Bianchi",
          bio: "Data Analyst & Automation Specialist",
          argument:
            "Strategie per ottimizzare workflow automatizzati, lead nurturing e conversioni.",
          image: "../assets/francesca.jpg",
        },
        {
          id: 2,
          name: "Luca Rossi",
          bio: "Data Analyst & Automation Specialist",
          argument:
            "Come usare i dati per ottimizzare le campagne e migliorare il ROI.",
          image: "../assets/luca.jpg",
        },
        {
          id: 3,
          name: "Elisa Moretti",
          bio: "Project ManagerCustomer Success Manager",
          argument:
            "Tecniche per segmentare e personalizzare le comunicazioni, migliorando l'engagement.",
          image: "../assets/elisa.jpg",
        },
        // Aggiungi altri speaker come necessario
      ],
    };
  },
};
</script>
<!-- eslint-disable prettier/prettier -->
<style>
img {
  margin-bottom: 50px;
}
.intro {
  text-align: left;
  vertical-align: center;
}

.webinar_img {
  width: 100%;
  height: 650px;
}
</style>
