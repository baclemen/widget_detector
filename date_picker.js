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
    btn.onclick = function(event){event.preventDefault(); console.log("click")}
    dateselectorlist.item(i).parentNode.appendChild(btn);
    console.log("button added");
};

function setDate(){
    event.preventDefault()
    console.log("setDate");
}
if(document.getElementById("detectorbutton0") == null){}
else{
    document.getElementById("detectorbutton0").addEventListener("click", setDate(event));
}
// const body = document.querySelector('body');
// body.appendChild(btn);
