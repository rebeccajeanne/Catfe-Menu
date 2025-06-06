filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("carousel-spacing");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        filRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) filAddClass(x[i], "show");
    }
}

function filAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function filRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
	    while (arr1.indexOf(arr2[i]) > -1) {
	        arr1.splice(arr1.indexOf(arr2[i]),  1);
	    }
    }
    element.className = arr1.join(" ");
}

// Add active class to current button (highlight it)
var filbtnContainer = document.getElementById("filBtnContainer");
var filbtns = filbtnContainer.getElementsByClassName("btn");
for (var i = 0; i < filbtns.length; i++) {
    filbtns[i].addEventListener("click", function(){
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
    });
}