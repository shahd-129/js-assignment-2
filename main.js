 const quotes = [
  { "author":  "― Ralph Waldo Emerson", 
    "quote": "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
  },
  {"author":  "― Mahatma Gandhi", 
   "quote":    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”" 
  },
  {"author":  "― Frank Zappa", 
    "quote":   "A room without books is like a body without a soul.”" 
  },
  {"author":  "―  David Mitchel,Ghostwritten", 
    "quote":  "“The act of memory is an act of ghostwriting.”"
  },
  {"author": "― J.K. Rowling, Harry Potter and the Sorcerer's Stone" , 
   "quote": "“To the well-organized mind, death is but the next great adventure.”" , 
  },
  {"author": "― Stephenie Meyer, Twilight", 
    "quote":"“I like the night. Without the dark, we'd never see the stars.”"
  },
  {"author": "― Winston S. Churchill", 
    "quote":"“Success is not final, failure is not fatal: it is the courage to continue that counts.”"
  },
  {"author": "― Pablo Picasso", 
    "quote":"“Everything you can imagine is real.”"
  }
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length );
  const randomQuote = quotes[randomIndex];
 document.querySelector('#quoteOutput').textContent = `\"${quotes[randomIndex].quote}\"`;
 document.querySelector('#authorOutput').textContent = `--${quotes[randomIndex].author}`;
}
