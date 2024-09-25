<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra: Descrizione del webinar -->
      <div class="col-md-8 mb-4 intro">
        <h1 class="webinar-title"><b>WEBINAR</b></h1>
        <h2 class="webinar-subtitle">
          <b>Strategie di Marketing Automation <br />con Reply</b>
        </h2>
        <img
          src="../assets/imgwebinar.png"
          alt="teamworking"
          class="img-fluid teamworking"
        />

        <h3 class="webinar-heading"><b>Massimizza il Tuo Potenziale</b></h3>
        <p class="webinar-text">
          Unisciti a noi per un webinar esclusivo in cui esploreremo come Reply
          può rivoluzionare le tue strategie di marketing automation. Scoprirai
          come ottimizzare le campagne, aumentare l'engagement e migliorare il
          ROI attraverso l'uso intelligente di strumenti di automazione.
        </p>
        <p class="webinar-text">
          I nostri esperti condivideranno case study reali e best practices,
          offrendoti insight preziosi per implementare soluzioni efficaci nella
          tua azienda.
        </p>
        <p class="webinar-text">
          <b
            >Non perdere l'occasione di portare il tuo marketing al livello
            successivo!</b
          >
        </p>
        <ul>
          <li><b>Data:</b> 20 marzo 2024</li>
          <li><b>Ora:</b> 15:30</li>
          <li><b>Durata:</b> 2 ore 30 minuti</li>
          <li><b>Modalità:</b> Online, tramite piattaforma Zoom</li>
          <li><b>Lingua:</b> Italiano</li>
          <li><b>Costo:</b> Gratuito</li>
        </ul>
        <div class="btn-container">
          <router-link to="/about">
            <button class="btn-white">Scopri di più</button>
          </router-link>

          <router-link to="/prenotazione">
            <button class="btn-primary">Prenota ora</button>
          </router-link>
        </div>
      </div>

      <div class="col-md-4">
        <h3 class="webinar-title"><b>I NOSTRI ESPERTI</b></h3>
        <!-- Ripeti questo blocco per ogni speaker -->
        <div class="card mb-3" v-for="speaker in speakers" :key="speaker.id">
          <img :src="speaker.image" class="card-img-top" :alt="speaker.name" />

          <div class="card-body">
            <h5 class="card-title">{{ speaker.name }}</h5>
            <p class="card-text">{{ speaker.bio }}</p>
            <a
              class="btn-primary argomento_speaker"
              data-bs-toggle="collapse"
              :href="'#collapse' + speaker.id"
              role="button"
              aria-expanded="false"
              :aria-controls="'collapse' + speaker.id"
              style="margin-bottom: 10px"
            >
              Argomento
            </a>
            <div class="collapse" :id="'collapse' + speaker.id">
              <div class="card body">
                <p class="card-text card-body">{{ speaker.argument }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
          image: require("../assets/francesca.jpg"),
        },
        {
          id: 2,
          name: "Luca Rossi",
          bio: "Data Analyst & Automation Specialist",
          argument:
            "Come usare i dati per ottimizzare le campagne e migliorare il ROI.",
          image: require("../assets/luca.jpg"),
        },
        {
          id: 3,
          name: "Elisa Moretti",
          bio: "Project ManagerCustomer Success Manager",
          argument:
            "Tecniche per segmentare e personalizzare le comunicazioni, migliorando l'engagement.",
          image: require("../assets/elisa.jpg"),
        },
        // Aggiungi altri speaker come necessario
      ],
    };
  },
};
</script>

<style>
.webinar-title {
  font-size: 20px;
}

.webinar-subtitle {
  font-size: 40px;
}

.webinar-heading {
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 20px;
}

.webinar-text {
  margin-bottom: 20px;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.btn-white {
  color: #004e59;
  border-color: #004e59;
  padding: 10px 20px;
  background-color: white;
  border-radius: 8px;
}

.btn-primary {
  color: white;
  border-color: #004e59;
  padding: 10px 20px;
  background-color: #004e59;
  margin-left: 20px;
  border-radius: 8px;
}

.expert-title {
  font-size: 20px;
  padding-bottom: 10px;
}

img {
  border-radius: 8px;
  width: 80%;
  height: auto;
  display: flex;
}

.intro {
  text-align: left;
  vertical-align: center;
}

.card {
  max-width: 350px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-radius: 8px;
  width: 50%;
  height: auto;
  padding: 10px;
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
  color: #333;
}

.argomento_speaker {
  color: white;
  border-color: #004e59;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #004e59;
}

@media (max-width: 768px) {
  .card {
    max-width: 80%;
  }
}

.teamworking {
  width: auto;
  height: 100%;
}
</style>
