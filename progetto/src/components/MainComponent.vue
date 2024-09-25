<template>

  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra: Descrizione del webinar -->
      <div class="col-md-8 mb-4 intro">
        <h1 style="font-size: 20px;"><b>WEBINAR</b></h1>
        <h2 style="font-size: 40px;"><b>Strategie di Marketing Automation <br/>con Reply</b></h2>        
        <img src="../assets/imgwebinar.png" alt="teamworking" class="img-fluid teamworking">

        <h3 class="titolo" style="font-size: 20px; padding-top: 30px; padding-bottom: 20px;"><b>Massimizza il Tuo Potenziale</b></h3>
        <p style="margin-bottom: 20px;">
          Unisciti a noi per un webinar esclusivo in cui esploreremo come Reply
          può rivoluzionare le tue strategie di marketing automation. Scoprirai
          come ottimizzare le campagne, aumentare l'engagement e migliorare il
          ROI attraverso l'uso intelligente di strumenti di automazione. 
        </p>
        <p style="margin-bottom: 20px;">I
          nostri esperti condivideranno case study reali e best practices,
          offrendoti insight preziosi per implementare soluzioni efficaci nella
          tua azienda. </p>
          <p style="margin-bottom: 20px;" ><b>Non perdere l'occasione di portare il tuo marketing al
            livello successivo!</b></p>
          <ul>
            <li><b>Data:</b> 20 marzo 2024</li>
            <li><b>Ora:</b> 15:30</li>
            <li><b>Durata:</b> 2 ore 30 minuti</li>
            <li><b>Modalità:</b> Online, tramite piattaforma Zoom</li>
            <li><b>Lingua:</b> Italiano</li>
            <li><b>Costo:</b> Gratuito</li>

          </ul>
        <div class="justify-content-center" style="margin-top: 50px;">
          <router-link to="/about">
        <button class="btn btn-primary btn-lg" 
        style="
        font-family: IBM Plex Sans JP; 
        color:#004E59; 
        border-color:#004E59;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: white; ">Scopri di più</button></router-link>

        <router-link to="/prenotazione">
          <button class="btn btn-primary btn-lg" 
          style="
          font-family: IBM Plex Sans JP; 
          color:white; 
          border-color:#004E59;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
          background-color: #004E59; 
          margin-left: 20px;">Prenota ora
          </button>
      </router-link>
        </div>
      </div>

      <div class=" col-md-4">
        <h2 style="font-size: 20px; padding-bottom: 10px;"><b>I NOSTRI ESPERTI</b></h2>
        <!-- Ripeti questo blocco per ogni speaker -->
        <div class="card mb-3" v-for="speaker in speakers" :key="speaker.id">
          <img
            :src="speaker.image"
            class="card-img-top"
            :alt="speaker.name"
          />

          <div class="card-body">
            <h5 class="card-title">{{ speaker.name }}</h5>
            <p class="card-text">{{ speaker.bio }}</p>
            <a class="btn btn-primary argomento_speaker" 
            data-bs-toggle="collapse" 
            :href="'#collapse' + speaker.id" 
            role="button" aria-expanded="false" 
            :aria-controls="'collapse' + speaker.id"
            style= "font-family: IBM Plex Sans JP; 
        color:white; 
        padding: 10 px;
        margin-bottom: 5px;
        background-color: #004E59;
        " > Argomento 
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

.webinar_img {
  width: 100%;
  height: 650px;
}

.card {
  max-width: 350px; /* Dimensione massima della card */
  margin: 0 auto; /* Centratura della card */
  background-color: #f8f9fa; /* Grigio chiarissimo */
  border: none; /* Rimuove il bordo della card */
  border-radius: 8px; /* Arrotonda gli angoli */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Aggiunge ombra */
}

.card-img-top {
  border-radius: 8px;
  width: 50%;
  height: auto;
  padding:10px;
}

.card-body {
  text-align: center; /* Allinea il testo a sinistra */
}

.card-title {
  font-size: 18px; /* Dimensione del titolo */
  font-weight: bold;
}

.card-text {
  font-size: 14px; /* Dimensione del testo */
  color: #333;
}

.argomento_speaker {
  font-family: IBM Plex Sans JP; 
  color: white; 
  border-color: #004E59;
  padding: 10px;
  background-color: #004E59; /* Colore del pulsante */
}

@media (max-width: 768px) {
  .card {
    max-width: 80%; /* Su dispositivi mobili, le card occupano l'intera larghezza */
  }
}
.teamworking {
  width: auto;
  height: 100%;
}


</style>
