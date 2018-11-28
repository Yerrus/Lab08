let movie_html = '<div class="title">Current Showing</div><div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_UY209_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Ralph Breaks the Internet<br />All 112min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_UY209_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Creed II<br />PG 130min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">The Grinch<br />All 86min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BZjFiMGUzMTAtNDAwMC00ZjRhLTk0OTUtMmJiMzM5ZmVjODQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Fantastic Beasts: The Crimes of Grindelwald<br />12 134min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BNDg2NjIxMDUyNF5BMl5BanBnXkFtZTgwMzEzNTE1NTM@._V1_UX140_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Bohemian Rhapsody<br />12 134min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMTkzMzgzMTc1OF5BMl5BanBnXkFtZTgwNjQ4MzE0NjM@._V1_UY209_CR1,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Instant Family<br />PG 118min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BOGQzZDM0NGUtZGE1NS00ZjQwLTk0N2EtMWI0NTgxYTkwYWQ4XkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_UX140_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Robin Hood<br />12 116min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMjM3ODc5NDEyOF5BMl5BanBnXkFtZTgwMTI4MDcxNjM@._V1_UX140_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Widows<br />14A 129min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_UX140_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">Green Book <br />12 130min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>' +
    '<div class="row">' +
    '  <div class="two columns"><img src="https://m.media-amazon.com/images/M/MV5BMjE3MDQ0MTA3M15BMl5BanBnXkFtZTgwMDMwNDY2NTM@._V1_UY209_CR0,0,140,209_AL_.jpg"></div>' +
    '  <div class="six columns">A Star Is Born<br />15 136min</div>' +
    '  <div class="four columns"><button>Reserve</button></div>' +
    '</div>';

let movie_json = [
    {
        "img": "https://m.media-amazon.com/images/M/MV5BNDVmOGI4MTMtYmNmNC00MTliLTlkYjQtYmU2N2EyNDk2YTAwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "Mary Queen of Scots",
        "rating": "14A",
        "duration": "124min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BZGY3ZWMyYjEtMDMzYi00NDQyLWE1MWEtMDNmMjRlOGVkNDc3XkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "Ben is Back",
        "rating": "R",
        "duration": "103min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BOTU2YjVhNjMtMGQ4ZC00ZmUyLWJlZjAtNTgyZjhjZmQwNWUwXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "Vox Lux",
        "rating": "R",
        "duration": "110min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BMTU0NDE3Njk0OV5BMl5BanBnXkFtZTgwMDk4MzA0NjM@._V1_UY209_CR1,0,140,209_AL_.jpg",
        "name": "Tyrel",
        "rating": "N/A",
        "duration": "86min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BMjMzMzQ0NzI5Nl5BMl5BanBnXkFtZTgwNjc2NTY0NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "Spider-Man: Into the Spider-Verse",
        "rating": "PG",
        "duration": "100min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY209_CR34,0,140,209_AL_.jpg",
        "name": "Deadpool 2",
        "rating": "18",
        "duration": "119min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BNzY1MDA2OTQ0N15BMl5BanBnXkFtZTgwMTkzNjU2NTM@._V1_UX140_CR0,0,140,209_AL_.jpg",
        "name": "Mortal Engines",
        "rating": "12",
        "duration": "112min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BMTEzNTYzMTg0OTdeQTJeQWpwZ15BbWU4MDg1OTQzODYz._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "If Beale Street Could Talk",
        "rating": "PG",
        "duration": "119min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BZTI4NTE3ODMtYzBhNi00NmE2LWJjY2QtNTUwY2EzYTAzOWUzXkEyXkFqcGdeQXVyODcyODY1Mzg@._V1_UY209_CR11,0,140,209_AL_.jpg",
        "name": "Capharnaum",
        "rating": "14A",
        "duration": "121min"
    },
    {
        "img": "https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
        "name": "Bumblebee",
        "rating": "PG-13",
        "duration": "113min"
    },
]

module.exports = {
    getHTML: function () {
        console.log("called: getHTML");
        return movie_html;
    },
    getJSON: function () {
        console.log("called: getJSON");
        return movie_json;
    }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}