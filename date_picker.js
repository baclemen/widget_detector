console.log("Chrome Extension works");
//select all datepicker objects on the website
const dateselectorlist = document.querySelectorAll('input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]');
// const dateselector2 = document.querySelectorAll('input[class*=Date]');
// const dateselector3 = document.querySelectorAll('input[id*=date]');
// const dateselector4 = document.querySelectorAll('input[id*=Date]');

console.log(dateselectorlist);

let dateselector = dateselectorlist.item(0);

console.log(dateselector);
//iterate through all of them and add buttons
var btn;
var no = 0;
for(var i = 0; i < dateselectorlist.length; i++) {
    btn = document.createElement("BUTTON");
    btn.innerHTML = "setDate";
    btn.className = "detectorbutton";
    btn.id = "detectorbutton" + i.toString;
    dateselectorlist.item(i).parentNode.appendChild(btn);
    console.log("button added");
};


//document.getElementById("detectorbutton").addEventListener("click", console.log("clicked"))


// const body = document.querySelector('body');
// body.appendChild(btn);
