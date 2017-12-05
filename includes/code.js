numRec=34;
$(document).ready(function() {

   for( var i=0; i<numRec; i++)
   {
   $("#wrapper3 main").append("<section></section>");
 }
  $("#wrapper3 main section:last").attr("id","lastSec");
  $("#lastSec").attr("id","plus").click(function(){
      var temp = $("<section></section>");
      temp.click(function(){
          $(this).toggleClass("star");
      });
      $("#wrapper3 main").prepend(temp);
  });
    $('#wrapper3 main section').click(function(){
        $(this).toggleClass("star");
    });

});
