let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: `"Don’t count the days, make the days count."`,
    person: ` Muhammad Ali`,
  },
  {
    quote: `"To live is the rarest thing in the world. Most people just exist."`,
    person: ` Oscar Wilde`,
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: ` Aristotle Onassis`,
  },
  {
    quote: `“Your imagination is your preview of life’s coming attractions.”`,
    person: ` Albert Einstein`,
  },
  {
    quote: ` “Don’t aim for success if you want it, just do what you love and believe in and it will come naturally.” `,
    person: ` David Frost`,
  },
  {
    quote: `“Whether you think you can or think you can’t, you’re right.”`,
    person: ` Henry Ford`,
  },
  {
    quote: `“Nothing is impossible. The word itself says ‘I’m possible!'”`,
    person: ` Audrey Hepburn`,
  },
  {
    quote: `“The most important thing in life is to stop saying ‘I wish’ and start saying ‘I will’. Consider nothing impossible then treat possibilities as probabilities.”`,
    person: ` Charles Dickens`,
  },
  {
    quote: `“Learn as if you will live forever, live like you will die tomorrow.”`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `“May your choices reflect your hopes, not your fears.”`,
    person: ` Nelson Mandela`,
  },
];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
