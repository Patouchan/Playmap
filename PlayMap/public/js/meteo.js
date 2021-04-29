
const cityTemp = document.getElementById('cityTemp');
const temp = document.getElementById('temp');
var askWeather = new XMLHttpRequest();

askWeather.onreadystatechange = function() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    var response = JSON.parse(this.responseText);
      
      switch (response.current_condition.condition){
        case 'Faiblement nuageux': 
        temp.setAttribute("src", "/images/MétéoNuages.png");
        temp.setAttribute("alt", "Météo Nuages");
        break;

        case 'Eclaircies': 
        temp.setAttribute("src", "/images/MeteoSoleilNuage2.png");
        temp.setAttribute("alt", "Météo Soleil Nuages");
        break;

        case 'Ensoleillé': 
        temp.setAttribute("src", "/images/meteoSoleil.png");
        temp.setAttribute("alt", "Météo Soleil");
        break;

        case 'Ciel voilé': 
        temp.setAttribute("src", "/images/MétéoNuages.png");
        temp.setAttribute("alt", "Météo Nuages");
        break;

        case 'Faibles passages nuageux': 
        temp.setAttribute("src", "/images/MétéoNuages.png");
        temp.setAttribute("alt", "Météo Nuages");
        break;

        case 'Nuit claire': 
        temp.setAttribute("src", "/images/MeteoNuitEtoile.png");
        temp.setAttribute("alt", "Météo Nuit Claire");
        break;

        case 'Nuit-nuageuse': 
        temp.setAttribute("src", "/images/MeteoNuitNuage2.png");
        temp.setAttribute("alt", "Météo Nuit Nuages");
        break;

        case 'Fortement nuageux': 
        temp.setAttribute("src", "/images/MétéoNuages.png");
        temp.setAttribute("alt", "Météo Nuages");
        break;

        case 'Pluie faible': 
        temp.setAttribute("src", "/images/MétéoPluie.png");
        temp.setAttribute("alt", "Météo Pluies");
        break;

        case 'Nuit légèrement voilée': 
        temp.setAttribute("src", "/images/MeteoNuitNuage.png");
        temp.setAttribute("alt", "Météo Nuages");
        break;

        default:
        temp.setAttribute("src", "/images/meteoSoleil.png");
        temp.setAttribute("alt", "Météo Soleil");   
      }
      cityTemp.innerHTML = `${response.city_info.name} ${response.current_condition.tmp}°C <br> Temps min/max ${response.fcst_day_0.tmin}°C / ${response.fcst_day_0.tmax}°C`;
  }
};
askWeather.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
askWeather.send();