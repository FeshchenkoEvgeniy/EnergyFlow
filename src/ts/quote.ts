import { fetchQuote } from "./api";

const quoteContainer = document.querySelector('.js-quote-container') as HTMLElement;

const date = new Date()
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const objQuote = JSON.parse(localStorage.getItem('qoute') ?? "null")

if (!objQuote || objQuote.formattedDate !== formattedDate) {
    fetchQuote()
      .then(data => {
        localStorage.setItem('qoute', JSON.stringify({ ...data, formattedDate }))
        quoteContainer.insertAdjacentHTML('beforeend', markup(data))
      })
    .catch(err => console.log(err))
} else {
  quoteContainer.insertAdjacentHTML('beforeend', markup(objQuote))
}

function markup({quote, author}: Iqoute) {
  return `<p class='quote__text'>${quote}</p>
          <p class='quote__author'>${author}</p>`
}

interface Iqoute {
  quote: string,
  author: string
}