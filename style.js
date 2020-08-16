const show = () => {
  const element = document.querySelector("#popup")
  element.style.visibility = "visible"
  element.style.opacity = "1"
}

const hide = () => {
  const element = document.querySelector("#popup")
  element.style.visibility = "hidden"
  element.style.opacity = "0"
  $.cookie("name", "1");

}

function setcookie(){
	$.cookie("name","2");
}


if(window.innerWidth<768){

	//some code here for mobile 
	$("#popup").delay(3000).fadeIn(500);
	// alert("in if block" +window.innerWidth )
}

else{
	// alert("in else block" +window.innerWidth)
	function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if ((!from || from.nodeName == "HTML") && ($.cookie("name") == null)) {
          		show();
          }
    });
});
}


// To detect cursor outside the window


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(window,"load",function(e) {
    addEvent(document, "mouseout", function(e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
           if ((!from || from.nodeName == "HTML") && ($.cookie("name") == null)) {
        	
          		show();
            
        }
    });
});