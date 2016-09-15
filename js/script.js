
function getText(){
    
    var url = "http://verksamtproxy.hackastack.de18292d.svc.dockerapp.io/";
    
    $.getJSON(url, function(data){
        
        var a = data[0]
        alert(a.Letter);
    });

}
