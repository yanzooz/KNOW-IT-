const LANGUAGE_SELECTED = sessionStorage.getItem("languageSelected");
const volumeOnButton = document.getElementById("volumeOn");
const volumeOffButton = document.getElementById("volumeOff");

const FR_DISPLAY = document.getElementById("cityPictureDisplayFR");
const UK_DISPLAY = document.getElementById("cityPictureDisplayUK");
const FR_FLAG = document.getElementById("flagDisplayFR");
const UK_FLAG = document.getElementById("flagDisplayUK");

const volumeState = sessionStorage.getItem("volume") || "on";
updateVolumeUI(volumeState);

// Fonction pour mettre à jour l'interface en fonction de l'état du volume
function updateVolumeUI(volumeState) {
  if (volumeState === "on") {
    console.log("Volume activé");
  } else {
    console.log("Volume désactivé");
  }
}

function flagDisplayOfLanguageChosen() {
  if (LANGUAGE_SELECTED) {
    if (LANGUAGE_SELECTED === "french") {
      FR_DISPLAY.style.display = "block";
      FR_FLAG.style.display = "block";
      UK_DISPLAY.style.display = "none";
      UK_FLAG.style.display = "none";
    } else if (LANGUAGE_SELECTED === "english") {
      FR_DISPLAY.style.display = "none";
      FR_FLAG.style.display = "none";
      UK_DISPLAY.style.display = "block";
      UK_FLAG.style.display = "block";
    }
  }
}

function themeSelectedSetting() {
  let themeSelected = document.getElementById("themeSelect").value;
  console.log(themeSelected);
}

function menu() {
  const SELECT_FORM_THEME = document.getElementById("themeSelect");
  flagDisplayOfLanguageChosen();
  SELECT_FORM_THEME.addEventListener("click", () => {
    themeSelectedSetting();
  });

  // Gestion des clics sur les boutons
volumeOnButton.addEventListener("click", () => {
    sessionStorage.setItem("volume", "on"); // Sauvegarde l'état dans sessionStorage
    updateVolumeUI("on"); // Met à jour l'interface
  });
  
  volumeOffButton.addEventListener("click", () => {
    sessionStorage.setItem("volume", "off"); // Sauvegarde l'état dans sessionStorage
    updateVolumeUI("off"); // Met à jour l'interface
  });
  
}
menu();
