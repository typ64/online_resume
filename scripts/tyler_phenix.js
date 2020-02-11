/*JAVASCRIPT FOR ENTIRE HTML PAGE TYER_PHENIX.HTML*/

/*Fills in Cover Letter with variables listed*/
$(document).ready(function(){
  var date = "April 25, 2018";
  var company = "Test_Company";
  var position = "Test_Position";

    $("#date").text(date);

    $(".company").each(function(i){
      $(this).text(company)
    });

    $(".position").each(function(i){
      $(this).text(position);
    });
  });
//
//
//

/*adds active class for nav bar of webpage*/
  $(document).ready(function(){
    /*removes "active" class from all list items except the one that is clicked in the nav*/
    $(".nav li a").click(function(){
      $(".nav li").each(function(){
        $(this).removeClass("active");
      });
      /*add active class to div that is clicked*/
      $(this).parent("li").addClass("active");
    });
  });
//
//
//

/*shows the divs (webpages) once they are clicked in the nav*/
  $(document).ready(function(){
    /*reset hash at the end or URL in case page is refreshed*/
    window.location.hash = $(this).attr('href');
    $(".nav a").click(function(){
      /*change URL: add href value to end of URL*/
      window.location.hash = $(this).attr('href');
      /*hide all divs to prepare to show only clicked div*/
      $(".main .sheet").each(function(){
        $(this).hide();
      });
      /*show div corresponding to clicked href values*/
      /*comment #001 in reference to comment in nav*/
      var href = $(this).attr("href");
       $(href).show();
       /*load page scrolled to the top*/
       $("html, body").animate({ scrollTop: 0 }, "fast");
       return false;
    });
  });
//
//
//

/*unhides the first div (the homepage div) since all divs are hidden until selected in the nav bar*/
  $(document).ready(function(){
    /*hide all except first div*/
    //$(".main .sheet").not(":first").hide();
    $(".main .sheet").not(":first").hide();
  });
//
//
//

/*creates dots on Resume webpage in the"skills" section to show skill level for each skill*/
  $(document).ready(function(){
    /*add class "skils_label" to first TD of #skills_table*/
    $("#skills_table tr td:first-child").addClass("skills_label");
    /*add class "skills" to 2nd TD of #skills_table*/
    $("#skills_table tr td:nth-child(2)").addClass("skills");
    /*add class "stars" to last 5 TDs of #skills_table*/
    $("#skills_table tr td:nth-last-child(5),#skills_table tr td:nth-last-child(4),#skills_table tr td:nth-last-child(3),#skills_table tr td:nth-last-child(2),#skills_table tr td:last-child").addClass("stars");
    /*add div inside of td to make into circle*/
    $(".stared").append("<div></div>");
    $(".stared div").addClass("container");
    $(".container").append("<div></div>");
    $(".container div").addClass("star_div");
  });
//
//
//

/*removes dashed lines in Resume webpage when page width is at 1150px to help with displaying on smaller screens*/
/*source: https://codepen.io/richerimage/pen/jEXWWG*/
  jQuery(document).ready(function($) {
    var alterClass = function() {
      var winWidth = document.body.clientWidth;
      if (winWidth < 850) {
        $('.dash_lines').removeClass('dashes');
      } else if (winWidth >= 851) {
      $('.dash_lines').addClass('dashes');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
      //Run it when the page first loads:
    alterClass();
  });
//
//
//

  /*bolds the first letter of each word one the Resume webpage "employment history" section for the company names*/
  /*Source: https://stackoverflow.com/questions/43776067/style-first-letter-of-each-word-in-paragraph/43776199*/
  $(document).ready(function(){
    $('span.boldFirstLetter').each(function(i){
      var str = $(this).text().split(" ");
      var span = $(this);
      $(span).empty();
      str.forEach(function(a) {
        //does not bold the first letter of "of" or "the" in titles
        if(a == 'of' || a == 'the'){
          $(span).append('&nbsp;' + a);
        }
        /*bolds the first letter of all other titles*/
        else{
        $(span).append('&nbsp;<strong>' + a.slice(0, 1) + '</strong>' + a.slice(1))
        }
      });
    });
    /*$("div #employer").css({"word-wrap":"word-break"});*/
  });
//
//
//

/*creates slideshow on Project webpage for "Budget Watch App" project*/
/*JavaScript Slideshow. Source: https://www.w3schools.com/w3css/w3css_slideshow.asp*/
$(document).ready(function(){
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      /*$("#slideShow_caption").empty();*/
      $("#slideShow_caption").append(slideIndex + "/" + x.length);
    }
     x[slideIndex-1].style.display="block";
     $("#slideShow_caption").empty();
      $("#slideShow_caption").append(slideIndex + "/" + x.length);
  }
  //shows next photo once the image (or any space inside of the arrows next to the photo) or the right arrow is clicked
  $("#slideShow_photos, .slideShowButtonRight").on("click" ,function(){
    plusDivs(1);
  });
  //shows the previous photo once the left arrow is clicked
  $(".slideShowButtonLeft").on("click" ,function(){
    plusDivs(-1);
  });
});
//
//
//
