console.log("Chrome Extension works");

const head =document.querySelector('head');


var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
head.appendChild(script);
//add jquery
// console.log(head);
// head.appendChild('<script src="https://code.jquery.com/jquery-3.5.0.js"></script>');

// .appendChild('<script src="https://code.jquery.com/jquery-3.5.0.js"></script>')
$("head");

//select all datepicker objects on the website
const dateselectorlist = document.querySelectorAll('input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]');
// const dateselector2 = document.querySelectorAll('input[class*=Date]');
// const dateselector3 = document.querySelectorAll('input[id*=date]');
// const dateselector4 = document.querySelectorAll('input[id*=Date]');

console.log(dateselectorlist);

//functions and definitions

//setting the date in the field to a specific value
function setDate(event){
    event.preventDefault();
    console.log("setDate");
    console.log("nodelist:", dateselectorlist.item(0));
    console.log(event);
    //dateselectorlist.item(0).setAttribute("value","1.1.2020"); //TODO: make this possible for any amount of date pickers
    dateselectorlist.item(0).click();
    //$('input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]').first().trigger("click");
}


let dateselector = dateselectorlist.item(0);

console.log(dateselector);
//iterate through all of them and add buttons
var btn;
var no = 0;
for(var i = 0; i < dateselectorlist.length; i++) {
    btn = document.createElement("BUTTON");
    btn.innerHTML = "setDate";
    btn.className = "detectorbutton";
    btn.id ="detectorbutton"+i;
    btn.onclick = function(event){event.preventDefault(); console.log("click"); setDate(event)}
    dateselectorlist.item(i).parentNode.appendChild(btn);
    console.log("button added");
};


// if(document.getElementById("detectorbutton0") == null){}
// else{
//     document.getElementById("detectorbutton0").addEventListener("click", setDate(event));
// }
// const body = document.querySelector('body');
// body.appendChild(btn);