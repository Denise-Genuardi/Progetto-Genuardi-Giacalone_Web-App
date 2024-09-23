<!-- eslint-disable prettier/prettier -->
<template>
  <img src="../assets/teamworking.jpg" alt="webinar" class="webinar_img .img-fluid" />

  <div class="container mt-5">
    <div class="row">
      <!-- Colonna sinistra: Descrizione del webinar -->
      <div class="col-md-8 mb-4 intro">
        <h1 class="titolo" style="font-size: 30px; margin-top: 50px;">WEBINAR</h1>
        <h2 class="titolo" style="font-size: 40px;"><b>Strategie di Marketing Automation <br/>con Reply</b></h2>
        <h3 class="titolo" style="font-size: 20px; margin-bottom: 30px;"><b>Massimizza il Tuo Potenziale</b></h3>
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
          <p style="margin-bottom: 50px;" ><b>Non perdere l'occasione di portare il tuo marketing al
            livello successivo!</b></p>
        <div class="justify-content-center"  style="margin-top: 50px;">
        <button class="btn btn-primary btn-lg" 
        style="
        font-family: IBM Plex Sans JP; 
        color:#004E59; 
        border-color:#004E59;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: white; ">Scopri di più</button>
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
        margin-left: 20px;">Prenota ora</button>
        </div>
      </div>

      <div class="col-md-4">
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
            <a class="btn btn-primary" data-bs-toggle="collapse" :href="'#collapse' + speaker.id" role="button" aria-expanded="false" :aria-controls="'collapse' + speaker.id"> Argomento 
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
<!-- eslint-disable prettier/prettier -->
<style>
img {
  margin-bottom: 20px;
  border-radius: 8px;
  width: 100%;
  height: auto;
}
.intro {
  text-align: left;
  vertical-align: center;
}

.webinar_img {
  width: 100%;
  height: 650px;
}

.titolo {
  font-family: IBM Plex Sans JP; 
  padding-bottom: 10px;
  color: black;
}
p{
  margin-bottom: 50px;
}


</style>
