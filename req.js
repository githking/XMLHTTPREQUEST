const Jokes = document.querySelector(".Jokes");
const xhttp = new XMLHttpRequest();
xhttp.open("GET","https://official-joke-api.appspot.com/random_joke ");
xhttp.send();

xhttp.addEventListener("load",function(){
    const data = JSON.parse(xhttp.responseText);
    console.log(data);
    let html = `<h1>Setup: ${data.setup} </h1>
    <h2> Punchline: ${data.punchline}</h2>`

    Jokes.insertAdjacentHTML("beforeend",html);
})