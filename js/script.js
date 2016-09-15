
function getText(){

 $(document).ready(function() {
    var url = "http://verksamtproxy.hackastack.de18292d.svc.dockerapp.io/";
    
    var letters = ['A','B','C','D'];

    $.getJSON(url, function(data){
        var first = getFirstLetter();
        var input = $('#term').val();
        var indexOf = letters.indexOf(first) 
        var allWords = data[indexOf].words;

        var description = "";
        allWords.forEach(function(element) {
            if(input == element.word){
               description = element.description;     
            }
        }, this);

        alert(description);
    });
 });     
}

function getFirstLetter(){
        var word = $('#term').val();
        if(word.length > 0){
          var firstLetter = word.charAt(0);    
          return firstLetter;
        }else{
            return "";
        }
}
