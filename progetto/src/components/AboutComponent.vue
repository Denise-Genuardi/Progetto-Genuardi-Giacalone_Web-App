<template>
  <div class="about-component">
    <!-- Sottotitolo e Titolo -->
    <h3 class="subtitle">{{ subtitle }}</h3>
    <h1 class="title">{{ title }}</h1>

    <!-- Struttura a due colonne con larghezza uguale -->
    <div class="row mt-4">
      <!-- Colonna sinistra (testo) -->
      <div class="col-md-6">
        <p class="about-text">
          Il mondo del marketing è in continua evoluzione e le aziende devono
          adattarsi rapidamente per mantenere un vantaggio competitivo. In
          questo webinar, scoprirai come Reply può aiutarti a rivoluzionare le
          tue strategie di marketing automation, ottimizzando ogni fase delle
          tue campagne, dall'acquisizione del lead fino alla conversione e
          oltre. Durante l'evento, i nostri esperti ti guideranno attraverso
          esempi pratici e case study di successo, mostrandoti come sfruttare al
          meglio i dati, segmentare il pubblico e automatizzare i processi
          chiave. Questo webinar ti fornirà insight e strumenti immediatamente
          applicabili per migliorare l'efficienza e aumentare il ROI.
        </p>
      </div>

      <!-- Colonna destra (carosello di immagini Bootstrap) -->
      <div class="col-md-6">
        <div id="aboutCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing1.png')"
                alt="Marketing1"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing2.png')"
                alt="Marketing2"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                :src="require('@/assets/marketing3.png')"
                alt="Marketing3"
              />
            </div>
          </div>

          <!-- Controlli del carosello -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#aboutCarousel"
            data-bs-slide="next"
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
export default {
  name: "AboutComponent",
  props: {
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.about-component {
  padding: 20px;
}

.subtitle {
  text-transform: uppercase;
  font-size: 14px;
  text-align: left;
  color: #666;
}

.title {
  font-size: 36px;
  text-align: left;
  color: #333;
  margin-top: 10px;
}

.about-text {
  font-size: 16px;
  text-align: justify;
}

.carousel {
  margin-top: 20px;
}
</style>
