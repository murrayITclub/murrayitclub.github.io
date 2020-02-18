var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
    
    var inneracc = document.getElementsByClassName("inneraccordion");

for (i = 0; i < inneracc.length; i++) {
  inneracc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var subacc = document.getElementsByClassName("subaccordion");
var j;  
for (j = 0; j < subacc.length; j++) {
  subacc[j].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var nb = document.getElementsByClassName("nextbutton");
var k;
for (k = 0; k < nb.length; k++) {
  nb[k].addEventListener("click", function() {
    var par = this.parentElement.parentElement;
    par.previousElementSibling.classList.toggle("active");

    if (par.style.display === "block") {
      par.style.display = "none";
    } else {
      par.style.display = "block";
    }
    var nextacc=par.nextElementSibling;
    nextacc.classList.toggle("active");
    var nextpanel=nextacc.nextElementSibling;
    nextpanel.style.display="block";
    nextacc.scrollIntoView();
    window.scrollBy(0, -20);
  });
}