// var enabled = false;


// chrome.storage.sync.set({"enable": true}, function(){
//     console.log("enabled");
// });


console.log("Chrome Extension works");

const head = document.querySelector('head');
var isopen = false;
var pickerno;

chrome.storage.sync.get(["enable"], function(data){
    console.log("getenable");
    enabled=data.enable;
    if(enabled){
        createSelectors()
    }
    else{
    }
});

// var script = document.createElement('script');
// script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
// head.appendChild(script);
//add jquery
// console.log(head);
// head.appendChild('<script src="https://code.jquery.com/jquery-3.5.0.js"></script>');

// .appendChild('<script src="https://code.jquery.com/jquery-3.5.0.js"></script>')

//select all datepicker objects on the website
const dateselectorlist = document.querySelectorAll('input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]');
console.log(dateselectorlist);
// const dateselector2 = document.querySelectorAll('input[class*=Date]');
// const dateselector3 = document.querySelectorAll('input[id*=date]');
// const dateselector4 = document.querySelectorAll('input[id*=Date]');

//functions and definitions

//setting the date in the field to a specific value
function setDate(event, date){
    event.preventDefault();
    console.log("setDate");
    console.log("nodelist:", dateselectorlist.item(0));
    console.log(event);
    i = event.srcElement.id.match(/\d+/)[0];
    //dateselectorlist.item(0).setAttribute("value","1.1.2020"); 
    //dateselectorlist.item(i).click();
    // var input = $('input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]');
    // input[0].selectionStart = input[0].selectionEnd = input.val().length;
    $("input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]").eq(i).val(date);
}


function createSelectors(){



    //iterate through all of them and add buttons
    var btn;
    var no = 0;
    for(var i = 0; i < dateselectorlist.length; i++) {

        div = document.createElement("div");
        div.id = "pickerparent" + i;


        btn = document.createElement("BUTTON");
        btn.innerHTML = "setDate";
        btn.className = "detectorbutton";
        btn.id ="detectorbutton"+i;
        btn.number = i;

        div.appendChild(btn);

        
        dateselectorlist.item(i).parentNode.appendChild(div);
        //btn.onclick = openpicker;
        var butReg = new ZingTouch.Region(btn);
        butReg.bind(btn,'tap', openpicker);

        console.log("button added");
    };
}

// if(document.getElementById("detectorbutton0") == null){}
// else{
//     document.getElementById("detectorbutton0").addEventListener("click", setDate(event));
// }
// const body = document.querySelector('body');
// body.appendChild(btn);

function openpicker(event){
    console.log(" new picker is opened")
    if(isopen){

    } else {
    console.log("openpicker");
    i = event.srcElement.id.match(/\d+/)[0];
    div = document.getElementById("pickerparent" + i);
    console.log(div);
    pickerno = i;
    isopen = true;
    // var selstr = "[id*=pickerparent" + i + "]";
    // console.log(selstr);
    // console.log($(selstr));
    // console.log("test");
    // $(selstr).load("./datepickerwidget/datepickerwidget.html")
    temp = div.innerHTML
    div.innerHTML += htmlstring;
    viewchange(new Date(),1);
    addlisteners();
    }
}

function closepicker(){
    div = document.getElementById("pickerparent" + pickerno);
    div.removeChild(div.childNodes[2]);
    isopen = false;
    btn = div.firstChild;
    console.log(btn);
    var butReg = new ZingTouch.Region(btn);
    butReg.bind(btn,'tap', openpicker);
}



//html for the date picker
var htmlstring =`
<div>
    <div id="pickercontainer">
        <p class="navdat" id="navtopleft">topleft</p>
        <p class="navdat" id="navtopright">topright</p>
        <h2 id="mon">Month</h2>
        <h2 id="yea">Year</h2>
        <table id="pickertable">
            <tr>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
            </tr>
            <tr>
                <td id="d00" onclick="clickevent()"></td>
                <td id="d01"></td>
                <td id="d02"></td>
                <td id="d03"></td>
                <td id="d04"></td>
                <td id="d05"></td>
                <td id="d06"></td>
            </tr>
            <tr>
                <td id="d10"></td>
                <td id="d11"></td>
                <td id="d12"></td>
                <td id="d13"></td>
                <td id="d14"></td>
                <td id="d15"></td>
                <td id="d16"></td>
            </tr>
            <tr>
                <td id="d20"></td>
                <td id="d21"></td>
                <td id="d22"></td>
                <td id="d23"></td>
                <td id="d24"></td>
                <td id="d25"></td>
                <td id="d26"></td>
            </tr>
            <tr>
                <td id="d30"></td>
                <td id="d31"></td>
                <td id="d32"></td>
                <td id="d33"></td>
                <td id="d34"></td>
                <td id="d35"></td>
                <td id="d36"></td>
            </tr>
            <tr>
                <td id="d40"></td>
                <td id="d41"></td>
                <td id="d42"></td>
                <td id="d43"></td>
                <td id="d44"></td>
                <td id="d45"></td>
                <td id="d46"></td>
            </tr>
            <tr>
                <td id="d50"></td>
                <td id="d51"></td>
                <td id="d52"></td>
                <td id="d53"></td>
                <td id="d54"></td>
                <td id="d55"></td>
                <td id="d56"></td>
            </tr>
        </table>
        <p class="navdat" id="navbotleft">bottomleft</p>
        <p class="navdat" id="navbotright">bottomright</p>
    </div>

    <h1 id="output">Selected date is:</h1>


    <script src="datepickerwidget.js"></script>
</div>
`


//this is where the date picker interaction happens

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var globdate = new Date();
//today.setDate(today.getDate() - 1);


// console.log(globdate);
// viewchange(globdate,1);
// addlisteners();

function setField(line, row, val){
    var str = "d" + line + row;
    var x = document.getElementById(str);
    x.innerHTML = val;
}

function displayView(date, view){

    var x = document.getElementById("d01");
    x.innerHTML = "31";
}

function findpos(date){
    x1 = date.getDay();
    console.log(x1);
    x1 = (x1 + 6)%7;
    console.log(x1);
    date0 = date.getDate() - x1;
    y1 = Math.ceil((date0+5)/7);
    return{
        row: x1,
        line: y1
    }
}

function clearboard(){
    for(var i = 0; i<6; i++){
        var b = false;
        for(var j = 0; j<7; j++){
            setField(i,j," ");
        }
    }
}

function writemonth(date){

    document.getElementById("yea").innerHTML = date.getFullYear();
    document.getElementById("mon").innerHTML = monthNames[date.getMonth()];


    const datemp = new Date((date.getMonth()+1) + ' 1 ' + date.getFullYear())
    console.log(datemp)
    x = findpos(datemp);
    console.log(x);
    var rowtemp = x.row;
    var linetemp = x.line;

    var d = 1;

    for(var i = linetemp; i<6; i++){
        var b = false;
        for(var j = rowtemp; j<7; j++){
            setField(i,j,d);
            d++;
            if (d>daysInMonth(date)){
                b = true;
                break
            }
        }
        rowtemp = 0;
        if (b == true){
            break
        }
    }
}

function writecorners(date){
    var navtopleft = document.getElementById("navtopleft");
    var navtopright = document.getElementById("navtopright");
    var navbotleft = document.getElementById("navbotleft");
    var navbotright = document.getElementById("navbotright");

    navtopleft.innerHTML = monthNames[(date.getMonth()-1+12)%12];
    navbotright.innerHTML = monthNames[(date.getMonth()+1)%12];
    navtopright.innerHTML = date.getFullYear() + 1;
    navbotleft.innerHTML = date.getFullYear() - 1;

}

function daysInMonth (date) { 
    x = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
    return x;
} 

function viewchange (date, level){
    console.log(date.getMonth());
    console.log(date.getFullYear());

    globdate.setMonth(date.getMonth())
    globdate.setYear(date.getFullYear())
    clearboard();
    writemonth(date);
    writecorners(date);
}

function addlisteners(){
    var navtopleft = document.getElementById("navtopleft");
    var navtopright = document.getElementById("navtopright");
    var navbotleft = document.getElementById("navbotleft");
    var navbotright = document.getElementById("navbotright");
    navtopleft.addEventListener('click', topleft);
    navtopright.addEventListener('click', topright);
    navbotleft.addEventListener('click', botleft);
    navbotright.addEventListener('click', botright);

    var pickercontainer = document.getElementById('pickercontainer');
    var activeRegion = new ZingTouch.Region(pickercontainer);

        var rows = document.getElementById('pickertable').rows;
        
        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows[i].cells.length; j++ ) {
                activeRegion.bind(rows[i].cells[j],'tap', selectDate);
                //rows[i].cells[j].addEventListener('click', selectDate);
        }
    }

    // var pickercontainer = document.getElementById("pickercontainer")
    // pickercontainer.addEventListener("touchstart", handleStart);
    // pickercontainer.addEventListener("touchend", handleEnd);
    // pickercontainer.addEventListener("touchcancel", handleCancel);
    // pickercontainer.addEventListener("touchmove", handleMove);

    console.log(activeRegion)
    activeRegion.bind(pickercontainer, 'swipe', onswipe);

    console.log("listeners added")
}

//functions for user interaction
function topleft(){
    globdate.setMonth(globdate.getMonth()-1);
    viewchange(globdate,1);
}
function topright(){
    globdate.setYear(globdate.getFullYear()+1);
    viewchange(globdate,1);
}
function botleft(){
    globdate.setYear(globdate.getFullYear()-1);
    viewchange(globdate,1);
}
function botright(){
    globdate.setMonth(globdate.getMonth()+1);
    viewchange(globdate,1);
}
function selectDate(event){
    console.log(event);
    var val =event.srcElement.id.match(/\d+/)[0];
    returnDate(val);
}
function handleStart(event){
    console.log("start");
}
function handleEnd(event){
    console.log("end");
}
function handleCancel(event){
    console.log("cancel");
}
function handleMove(event){
    console.log("move");
}

//Zingtouch gestures
swipe = new ZingTouch.Swipe({
	numInputs: 1,
	maxRestTime: 100,
	escapeVelocity: 0.25
});

function onswipe(e){
    direction = Math.floor(e.detail.data[0].currentDirection/90);
    console.log(direction);
    switch(direction){
            case 0:
                botleft();
                break;
            case 1:
                botright();
                break;
            case 2:
                topright();
                break;
            case 3:
                topleft();
                break;
        }
}

function returnDate(val){
    output = document.getElementById("output")
    var x = Math.floor(val/10)
    var y = val % 10;
    var str =(("d" + x) + y)
    var val = document.getElementById(str).innerHTML;
    globdate.setDate(val);
    $("input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]").eq(pickerno).val((globdate.getDate()) + "." + (globdate.getMonth()+1) + "." + (globdate.getFullYear()));
    closepicker();
}