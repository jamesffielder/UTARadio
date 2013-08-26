//When the about link is clicked call this function to ajax the the people csv list from -->
// HTTP Request link: http://radio.uta.edu/radiostaff.csv -->

var link = "http://radio.uta.edu/radiostaff.csv";

function aboutUsClicked(){
                    
                    $.ajax({
                           type: "GET",
                           url: link,
                           dataType: "html",
                           success: function( my_text )
                           {
                           
                           var html_text = "<br><br>";
                           
                           //Loop throught the result to get the staffs
                           var lines = my_text.split("\n");
                           var alternate = true;
                           
                           for (l in lines){
                           
                           var result = lines[l].split(",");
                           
                           if (result[0] == "Engineer"){
                           html_text += "<strong>" + result[0] + ", " + result[1] + "</strong>";
                           html_text += "<p>" + result[2] + "</p>";
                           }
                           else{
                           html_text += "<strong>" + result[0] + "</strong>";
                           html_text += "<p>" + result[1] + "</p>";
                           }
                           
                           }
                           
                           //html_text += "<strong>" + lines + "</strong>";
                           $("#aboutStyle").html(html_text);
                           
                           },
                           error: function( my_text )
                           {
                                $("#aboutStyle").html("<br><br><strong>Error Retrieve Staff.<strong>");
                           }
                           });
}
