"use strict";
var Client;
(function (Client) {
    console.log("Client läuft");
    const url = "http://127.0.0.1:3000";
    const path = "/convertDate";
    const myForm = document.getElementById("myform");
    const sendButton = document.getElementById("send-button");
    const answer = document.getElementById("answer");
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        sendForm();
    });
    async function sendForm() {
        let formData = new FormData(myForm); //formData übergeben
        let query = new URLSearchParams(formData); //query - richtig formatieren beim formData
        let urlWithQuery = url + path + "?" + query.toString();
        let response = await fetch(urlWithQuery);
        let responseText = await response.text();
        let edition = document.createElement("p");
        edition.textContent = responseText;
        answer.appendChild(edition);
        console.log(responseText);
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map