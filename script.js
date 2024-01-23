//Services Tabs
function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();

//COntact Fomr, Check for empty cellss
  function EmptyCheck(){
    var i, field;
    field = document.getElementsById("important");
    for (i=0;  i< field.length; i++) 
    {
        if(field[i].length == 0)
        {
          field[i].style.backgroundColor = "red";
        }    
    }
    alert("Important fields cannot be left empty");
  }

//About Page Screen Overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}

