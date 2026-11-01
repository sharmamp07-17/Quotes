const btN = document.getElementById('btn');
const quote = document.getElementById('quote');
const auhtor = document.getElementById('author');
// const apiKey = "https://api.quotable.io/random";

// // let remainNum = 1;

// async function Next(url) {
//   btN.classList.add('load');
//   btN.innerText = "loading..";
//   let response = await fetch(url);
//   let data = await response.json();

//   quote.innerText = `"${data.content}"`;
//   auhtor.innerText = `( ${data.author} )`;
//   btN.innerText = "Next";
//   btN.classList.remove('load');

//   console.log(data);

// };

// Next(apiKey);
// Switch to a working API. Note: ZenQuotes often requires a proxy or 
    // specific headers, so using a public dummy API for this example:
    const apiKey = "https://dummyjson.com/quotes/random";

    async function Next(url) {
      try {
        btN.classList.add('load');
        btN.innerText = "loading..";

        let response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        let data = await response.json();

        // Update these keys based on the API response structure
        // DummyJSON uses 'quote' and 'author'
        quote.innerText = `"${data.quote}"`;
        auhtor.innerText = `( ${data.author} )`;

        btN.innerText = "Next";
        btN.classList.remove('load');
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        quote.innerText = "Could not load quote. Please try again.";
        btN.innerText = "Retry";
        btN.classList.remove('load');
      }
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
