function soap() {
    
    jQuery.support.cors = true;
    
    // build SOAP request
    
    var sr =
    
    '<?xml version="1.0" encoding="utf-8"?>' +
    
    '<soap:Envelope ' +
    
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  ' +
    
    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    
    'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
    
    '<soap:Body>' +
    
    '<SendRequest xmlns="http://tempuri.org/">' +
    
    '<Artist>'+document.forms["requestSong"]["artist"].value+'</Artist>' +
    
    '<SongName>'+document.forms["requestSong"]["songname"].value+'</SongName>' +
    
    '<Email>'+document.forms["requestSong"]["email"].value+'</Email>' +
    
    '<Name>'+document.forms["requestSong"]["requester"].value+'</Name>' +
    
    '</SendRequest>' +
    
    '</soap:Body>'+
    
    '</soap:Envelope>';
    
    
    
    var songnameChecker=document.forms["requestSong"]["songname"].value;
    
    var emailChecker=document.forms["requestSong"]["email"].value;
    
    var atpos=emailChecker.indexOf("@");
    
    var dotpos=emailChecker.lastIndexOf(".");
    
    if (songnameChecker==null || songnameChecker=="")
        
    {
        
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=emailChecker.length)
            
        {
            
            /* document.getElementById("songWrong").innerHTML = "Dude! We need a song name.";
             
             document.getElementById("songWrong").style.color='#FF0000';
             
             document.getElementById("emailWrong").innerHTML = "Bro... invalid email.";
             
             document.getElementById("emailWrong").style.color='#FF0000';
             
             return false; */
            
            if(emailChecker==null || emailChecker=="")
                
            {
                
                alert("Broski! We need a song name.");
                
                return false;
                
            }
            
            else
                
            {
                
                alert("Dude! We need a song name and a valid email.");
                
                return false;
                
            }
            
            
            
            //document.location.reload(true);
            
            //document.forms["requestSong"]["songname"].setAttribute("placeholder", "need a song name");
            
            //showAlert();
            
        }
        
        else
            
        {
            
            alert("Broski! We need a song name.");
            
            return false;
            
        }
        
    }
    
    else if((atpos<1 || dotpos<atpos+2 || dotpos+2>=emailChecker.length)){
        
        if(emailChecker==null || emailChecker=="")
            
        {
            var jqxhr = $.ajax({
                               
                               url: 'http://www.isometrictechnologies.com/sean/Request.asmx',
                               
                               type: "POST",
                               
                               dataType: "xml",
                               
                               data: sr,
                               
                               contentType: "text/xml; charset=\"utf-8\"",
                               
                               success:function(result){
                               
                               alert("DJ got it! thanks");
                               
                               }
                               
                               });
            
            return false;
            
        }
        
        else{
            
            alert("Bro... invalid email...");
            
            return false;
            
        }
        
    }
    
    else{
        
        var jqxhr = $.ajax({
                           
                           url: 'http://www.isometrictechnologies.com/sean/Request.asmx',
                           
                           type: "POST",
                           
                           dataType: "xml",
                           
                           data: sr,
                           
                           contentType: "text/xml; charset=\"utf-8\"",
                           
                           success:function(result){
                           
                           alert("DJ got it! thanks");
                           
                           }
                           
                           });
        return false;
    }
    
}