<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-7">
        <h3 class="webinar-subtitle" :style="{ color: headingColor }">
          <b>WEBINAR</b>
        </h3>
        <TitleComponent
          titleText="Strategie di Marketing Automation con Reply"
        />

        <p class="about-text">
          Il mondo del marketing è in continua evoluzione e le aziende devono
          adattarsi rapidamente per mantenere un vantaggio competitivo.
        </p>
        <p class="about-text">
          In questo webinar, scoprirai come Reply può aiutarti a rivoluzionare
          le tue strategie di marketing automation, ottimizzando ogni fase delle
          tue campagne, dall'acquisizione del lead fino alla conversione e
          oltre. Durante l'evento, i nostri esperti ti guideranno attraverso
          esempi pratici e case study di successo, mostrandoti come sfruttare al
          meglio i dati, segmentare il pubblico e automatizzare i processi
          chiave. Questo webinar ti fornirà insight e strumenti immediatamente
          applicabili per migliorare l'efficienza e aumentare il ROI.
        </p>
      </div>

      <div class="col-12 col-md-5">
        <div
          id="aboutCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          aria-label="Carosello delle immagini di marketing"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing1.png')"
                alt="Strategia di Marketing Automation 1"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing2.png')"
                alt="Strategia di Marketing Automation 2"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing3.png')"
                alt="Strategia di Marketing Automation 3"
              />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
            aria-label="Slide precedente"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
            aria-label="Slide successiva"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "AboutComponent",
  components: {
    TitleComponent,
  },
  data() {
    return {
      headingColor: "#004e59",
    };
  },
};
</script>

<style scoped>
.about-component {
  padding: 20px;
}

.webinar-title {
  text-transform: uppercase;
  font-size: 20px;
  text-align: left;
}

.webinar-subtitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.about-text {
  font-size: 16px;
  text-align: justify;
  margin-bottom: 20px;
}

.carousel {
  margin: 20px 0;
}

.carousel img {
  max-width: 100%;
  height: auto;
}
</style>
