var coll = document.getElementsByClassName("notblue");  //the div from the line 27 35 and 43
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(i) {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight)                //if true keep it close
        {
            content.style.maxHeight = null;
            content.style.padding = null;
            content.style.marginBottom = null;
        } 
        else                                        //else will open once you click on the element
        {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "5px 3px"
            content.style.marginBottom = "5px";
        } 
    });
}