
//var obj = jQuery.parseJSON( '{ "name": "John" }' );
//alert( obj.name === "John" );


function getText(){
    var url = "http://verksamtproxy.hackastack.de18292d.svc.dockerapp.io";
    $.getJSON(url, function(data){
        alert(data);
    });
}
