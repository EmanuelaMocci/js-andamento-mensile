const URL = "http://staccah.fattureincloud.it/testfrontend/data.json";

function getInfo() {
  axios.get(URL).then((response) => {
    console.log(response.data.mesi);
    for (let i = 0; i < response.data.mesi.length; i++) {
      document.querySelector(`.importo-${i}`).innerHTML =
        response.data.mesi[i].importo + "€";
      document.querySelector(`.documenti-${i}`).innerHTML =
        response.data.mesi[i].documenti;
    }
  });
}
getInfo();
