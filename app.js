console.log("Hello script")
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-txt");
console.log(txtInput)
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server! try again after sometime")
}

function clickHandler() {
    var inputTxt = txtInput.value; //takin input
    console.log(inputTxt);

    //callin server for processing
    fetch(getTranslation(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerHTML = translatedTxt;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)