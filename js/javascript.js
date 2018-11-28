$(document).ready(function () {
  
  $.ajax({
    url: "/ajax-GET-list",
    dataType: "html",
    type: "GET",
    data: { format: "html-list" },
    success: function (data) {
      console.log("SUCCESS HTML:", data);
      $("#current-showing").html(data);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }

  });


  $.ajax({
    url: "/ajax-GET-list",
    dataType: "json",
    type: "GET",
    data: { format: "json-list" },
    success: function (data) {
      console.log("SUCCESS JSON:", data);
      
      var area = $("#coming-soon");
      var htmlStr = '<div class="title">Current Showing</div>';
      for (let i = 0; i < data.length; i++) {
        var img = data[i]["img"];
        var name = data[i]["name"];
        var rating = data[i]["rating"];
        var duration = data[i]["duration"];
        console.log(img, name, rating, duration);

        htmlStr += '<div class="row">';
        htmlStr += '<div class="two columns"><img src="' + img + '"></div>';
        htmlStr += '<div class="six columns">' + name + '<br />' + rating + ' ' + duration + '</div>';
        htmlStr += '<div class="four columns"><button>View</button></div>';
        htmlStr += '</div>';
      }
      area.html(htmlStr);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("ERROR:", jqXHR, textStatus, errorThrown);
    }
  });
  

});





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}