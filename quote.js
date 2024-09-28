const btN = document.getElementById('btn');
const quote = document.getElementById('quote');
const auhtor = document.getElementById('author');
const apiKey = "https://api.quotable.io/random";

// let remainNum = 1;

async function Next(url) {
  btN.classList.add('load');
  btN.innerText = "loading..";
  let response = await fetch(url);
  let data = await response.json();

  quote.innerText = `"${data.content}"`;
  auhtor.innerText = `( ${data.author} )`;
  btN.innerText = "Next";
  btN.classList.remove('load');

  console.log(data);

};

Next(apiKey);

function speak() {
  let sound = new SpeechSynthesisUtterance(`${quote.innerText}. writer ${auhtor.innerText}`);
  speechSynthesis.speak(sound);
};

function copyText() {
  navigator.clipboard.writeText(quote.innerText);
};

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerText, "Tweet Window", "width = 600, height = 300");
};