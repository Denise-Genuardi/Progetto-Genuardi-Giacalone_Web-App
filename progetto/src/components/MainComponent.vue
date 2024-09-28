<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra -->
      <div class="col-md-8 mb-4 intro">
        <h3 class="webinar-subtitle" :style="{ color: headingColor }">
          <b>WEBINAR</b>
        </h3>
        <TitleComponent
          titleText="Strategie di Marketing Automation con Reply"
        />

        <img
          v-bind:src="homeImage"
          alt="teamworking"
          class="img-fluid teamworking"
        />

        <h3
          class="webinar-subtitle"
          :style="{ color: headingColor }"
          style="margin-top: 50px"
        >
          <b>Massimizza il Tuo Potenziale</b>
        </h3>
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
          <button class="btn-white" v-on:click="goToAbout">
            Scopri di più
          </button>
          <button class="btn-primary" v-on:click="subscribeNow">
            Iscriviti ora
          </button>
        </div>
      </div>

      <!-- Colonna destra -->
      <div class="col-md-4">
        <h3 class="webinar-subtitle" :style="{ color: headingColor }">
          <b>I NOSTRI ESPERTI</b>
        </h3>

        <div
          class="card mb-3"
          v-for="speaker in speakers"
          :key="`speaker-${speaker.id}`"
        >
          <img :src="speaker.image" class="card-img" :alt="speaker.name" />

          <div class="card-body">
            <h5 class="card-title">{{ speaker.name }}</h5>
            <p class="card-text">{{ speaker.bio }}</p>
            <button
              class="argomento_speaker"
              data-bs-toggle="collapse"
              :href="'#collapse' + speaker.id"
              role="button"
              aria-expanded="false"
              :aria-controls="'collapse' + speaker.id"
            >
              Argomento
            </button>
            <div class="collapse" :id="'collapse' + speaker.id">
              <div class="card-body">
                <p class="card-text">{{ speaker.argument }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
export default {
  name: "MainComponent",
  data() {
    return {
      homeImage: require("../assets/teamworking.jpg"),
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
          bio: "Project Manager & Customer Success Manager",
          argument:
            "Tecniche per segmentare e personalizzare le comunicazioni, migliorando l'engagement.",
          image: require("../assets/elisa.jpg"),
        },
      ],
      headingColor: "#004e59",
    };
  },
  methods: {
    goToAbout() {
      this.$router.push("/about"); // Naviga alla pagina "about"
    },
    subscribeNow() {
      this.$router.push("/prenotazione"); // Naviga alla pagina di prenotazione
    },
  },
  components: {
    TitleComponent,
  },
};
</script>

<style>
.webinar-subtitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.webinar-title {
  font-size: 40px;
  margin-bottom: 30px;
  font-weight: bold;
}

.webinar-heading {
  font-size: 20px;
}

.teamworking {
  width: auto;
  height: 70%;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.btn-white {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #004e59;
  border-color: #004e59;
  background-color: white;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 8px;
}

.btn-white:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.btn-primary {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  border-color: #004e59;
  background-color: #004e59;
  margin-left: 20px;
  font-size: 20px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: #003d48; /* Scuro al passaggio del mouse */
}

img {
  border-radius: 8px;
  width: 40%;
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
  border-color: #004e59;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img {
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
  background-color: #004e59;
  text-decoration: none;
  font-size: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .card {
    max-width: 80%;
  }
}
</style>
