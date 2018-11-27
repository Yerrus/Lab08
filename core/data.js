let movie_html = "<ul><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ul>";

let movie_js = [
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
      return movie_js;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}