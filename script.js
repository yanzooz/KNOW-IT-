let questions = [];

const BUTTON_TO_QUIZ_SETTING = document.getElementById(
  "buttonFromMenuToQuizSetting"
);
const FR_DISPLAY = document.getElementById("cityPictureDisplayFR");
const UK_DISPLAY = document.getElementById("cityPictureDisplayUK");
const FR_FLAG = document.getElementById("flagDisplayFR");
const UK_FLAG = document.getElementById("flagDisplayUK");
function flagDisplayOfLanguageChosen() {
  let languageSelected = document.getElementById("languageSelect").value;
  if (languageSelected) {
    if (languageSelected === "french") {
      FR_DISPLAY.style.display = "block";
      FR_FLAG.style.display = "block";
      UK_DISPLAY.style.display = "none";
      UK_FLAG.style.display = "none";
      return languageSelected
    } else if (languageSelected === "english") {
      FR_DISPLAY.style.display = "none";
      FR_FLAG.style.display = "none";
      UK_DISPLAY.style.display = "block";
      UK_FLAG.style.display = "block";
      return languageSelected
    } else {
      console.log("on ne change rien");
    }
  }
}

function menu() {
  const SELECT_FORM_LANGUAGE = document.getElementById("languageSelect");
  UK_DISPLAY.style.display = "none";
  UK_FLAG.style.display = "none";

  SELECT_FORM_LANGUAGE.addEventListener("click", () => {
    flagDisplayOfLanguageChosen();
  });

  BUTTON_TO_QUIZ_SETTING.addEventListener ("click", ()=>{
    const LANGUAGE_SELECTED = flagDisplayOfLanguageChosen()
    sessionStorage.setItem("languageSelected", LANGUAGE_SELECTED);
    window.location.href = "startQuiz.html";
})

  
}

menu();
