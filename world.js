window.onload=function(){
var lookupbtn = document.getElementById("lookup");
lookupbtn.addEventListener('click',search);
};

function search(){
    var textfield = document.getElementById("country");
    var checkbox = document.getElementById("all");
    var url;
    var  text= textfield.value;
    console.log(text);
    var xmlhttp = new XMLHttpRequest();
     xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML =
      this.responseText;
      alert(clearTags(text));
      //instructions in lab were not clear for alert box in excercise 3 part 3 of the lab. So alert box was left.
    }
        
    };
    
    if (checkbox.value == true){
        
        url = "world.php?all=true";
    }
    else{
        url = "world.php?country="+text;
        
    }

    
     xmlhttp.open("GET", url, true);
     xmlhttp.send();
    
}

function clearTags(text){
    var txt = text;
    var rex = /(<([^>]+)>)/ig;
    return txt.replace(rex, "  ");

}