const LANGUAGE_SELECTED = sessionStorage.getItem("languageSelected");
const VOLUME_ON_BUTTON = document.getElementById("volumeOn");
const VOLUME_OFF_BUTTON = document.getElementById("volumeOff");
VOLUME_OFF_BUTTON.style.display = "none"

const FR_DISPLAY = document.getElementById("cityPictureDisplayFR");
const UK_DISPLAY = document.getElementById("cityPictureDisplayUK");
const FR_FLAG = document.getElementById("flagDisplayFR");
const UK_FLAG = document.getElementById("flagDisplayUK");

const volumeState = sessionStorage.getItem("volume") || "on";
updateVolumeUI(volumeState);

function updateVolumeUI(volumeState) {
  if (volumeState === "on") {
    console.log("Volume activé");
  } else {
    console.log("Volume désactivé");
  }
}

function playSound(sound) {
  if (soundEnabled.value) { // Si le son est activé
    sound.currentTime = 0;
    sound.play(); // Alors on joue le son
  }
}



function themeSelectedSetting() {
  let themeSelected = document.getElementById("themeSelect").value;
  return themeSelected ;
}

function displayVolumeButton(){
  
  VOLUME_ON_BUTTON.addEventListener("click", () => {
  VOLUME_OFF_BUTTON.style.display = "block";
  VOLUME_ON_BUTTON.style.display = "none";

  sessionStorage.setItem("volume", "off");
  updateVolumeUI("off");
  });
  
  VOLUME_OFF_BUTTON.addEventListener("click", () => {
  VOLUME_ON_BUTTON.style.display = "block";
  VOLUME_OFF_BUTTON.style.display = "none";
  sessionStorage.setItem("volume", "on"); 
  updateVolumeUI("on");
  });

}


function menu() {
  const SELECT_FORM_THEME = document.getElementById("themeSelect");
  flagDisplayOfLanguageChosen();
  SELECT_FORM_THEME.addEventListener("click", () => {
  themeSelectedSetting();
  });


  displayVolumeButton();

  //Event Listner Demarer button
  const THEME_SELECTED = themeSelectedSetting();
  sessionStorage.setItem("themeSelected", THEME_SELECTED);
  
}


menu();
