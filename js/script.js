
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

        //alert(description);
        $('div.translated').text(description);
    });
 });     
}

function clearWords(){
    $('#list').remove();
	window.location.reload();
}

function traslateWords(){
    $(document).ready(function() {
        var url = "http://verksamtproxy.hackastack.de18292d.svc.dockerapp.io/";
        var dict = [];
        var letters = ['A','B','C','F','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','V','Y','Å','Ä','Ö'];
        $.getJSON(url, function(data){
            
            var setence = $('#term').val();
            var words = setence.split(" ");
            words.forEach(function(theWord) {
                var word = clearDot(theWord)
                var first = getFirstLetterByWord(word).toUpperCase();
                var indexOf = letters.indexOf(first);
                if(indexOf >= 0 && indexOf < letters.length){
                var allWords = data[indexOf].words;
                allWords.forEach(function(element) {
                  if(word.toUpperCase() == element.word.toUpperCase()){
                    dict.push({
                        key:   element.word,
                        value: element.description
                    });    
                  }
                }, this);
                }   
            }, this);
            
            var text = "<ul class='list'>";
            for (var key in dict) {
                text += "<li>" + dict[key].key + " => " + dict[key].value + "</li>";
            }
            text += "</ul>"
            $('div.translated').html(text);
        });

        
    });
}

function clearDot(word){
    return word.replace('.','');
}

function getFirstLetterByWord(word){
        if(word.length > 0){
          var firstLetter = word.charAt(0);    
          return firstLetter;
        }else{
            return "";
        }
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
