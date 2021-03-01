$(document).ready(function() {
             console.log( "ready!" );

   $.getJSON( "https://bitmagicgroup.github.io/json/faq.json", function( data ) {
       var response = '<h2>General Questions</h2>';


       data.forEach(faq => {
            response +=  '<button class="collapsible" onclick="togglePanel()">' +
                           faq.question +
                           '</button>' +
                          '<div class="content">' +
                            '<p>' + faq.answer + '</p>' +
                          '</div>';
       });


      console.log(response);
      document.getElementById("faq-section").innerHTML = response;

      var coll = document.getElementsByClassName("collapsible");
      var i;
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      } 

  });

});


 