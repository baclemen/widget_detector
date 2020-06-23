// var enabled = false;


// chrome.storage.sync.set({"enable": true}, function(){
//     console.log("enabled");
// });


console.log("Chrome Extension works");

const head = document.querySelector('head');
var isopen = false;
var pickerno;

chrome.storage.sync.get(["enable"], function(data){
    //console.log("getenable");
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
//onsole.log(dateselectorlist);
// const dateselector2 = document.querySelectorAll('input[class*=Date]');
// const dateselector3 = document.querySelectorAll('input[id*=date]');
// const dateselector4 = document.querySelectorAll('input[id*=Date]');

//functions and definitions

//setting the date in the field to a specific value
function setDate(event, date){
    event.preventDefault();
    //console.log("setDate");
    //console.log("nodelist:", dateselectorlist.item(0));
    //console.log(event);
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
    //console.log(" new picker is opened")
    if(isopen){

    } else {
    //console.log("openpicker");
    i = event.srcElement.id.match(/\d+/)[0];
    div = document.getElementById("pickerparent" + i);
    //console.log(div);
    pickerno = i;
    isopen = true;
    // var selstr = "[id*=pickerparent" + i + "]";
    // console.log(selstr);
    // console.log($(selstr));
    // console.log("test");
    // $(selstr).load("./datepickerwidget/datepickerwidget.html")
    temp = div.innerHTML
    div.innerHTML += htmlstring;
    viewchange(new Date(),0);
    addlisteners();
    }
}

function closepicker(){
    div = document.getElementById("pickerparent" + pickerno);
    div.removeChild(div.childNodes[2]);
    isopen = false;
    btn = div.firstChild;
    //console.log(btn);
    var butReg = new ZingTouch.Region(btn);
    butReg.bind(btn,'tap', openpicker);
}



//html for the date picker
var htmlstring =`
<div id="pickercontainer">
<p class="navdat" id="navtopleft">topleft</p>
<p class="navdat" id="navtopright">topright</p>
<p id="mon">Month</p>
<p id="yea">Year</p>
<table id="pickertable" class="cbdatepicker">
    <tr class="cbdatepicker" id="cbdatepickerheader">
        <th class="cbdatepicker">Mon</th>
        <th class="cbdatepicker">Tue</th>
        <th class="cbdatepicker">Wed</th>
        <th class="cbdatepicker">Thu</th>
        <th class="cbdatepicker">Fri</th>
        <th class="cbdatepicker">Sat</th>
        <th class="cbdatepicker">Sun</th>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d00" ></td>
        <td class="cbdatepicker" id="d01"></td>
        <td class="cbdatepicker" id="d02"></td>
        <td class="cbdatepicker" id="d03"></td>
        <td class="cbdatepicker" id="d04"></td>
        <td class="cbdatepicker" id="d05"></td>
        <td class="cbdatepicker" id="d06"></td>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d10"></td>
        <td class="cbdatepicker" id="d11"></td>
        <td class="cbdatepicker" id="d12"></td>
        <td class="cbdatepicker" id="d13"></td>
        <td class="cbdatepicker" id="d14"></td>
        <td class="cbdatepicker" id="d15"></td>
        <td class="cbdatepicker" id="d16"></td>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d20"></td>
        <td class="cbdatepicker" id="d21"></td>
        <td class="cbdatepicker" id="d22"></td>
        <td class="cbdatepicker" id="d23"></td>
        <td class="cbdatepicker" id="d24"></td>
        <td class="cbdatepicker" id="d25"></td>
        <td class="cbdatepicker" id="d26"></td>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d30"></td>
        <td class="cbdatepicker" id="d31"></td>
        <td class="cbdatepicker" id="d32"></td>
        <td class="cbdatepicker" id="d33"></td>
        <td class="cbdatepicker" id="d34"></td>
        <td class="cbdatepicker" id="d35"></td>
        <td class="cbdatepicker" id="d36"></td>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d40"></td>
        <td class="cbdatepicker" id="d41"></td>
        <td class="cbdatepicker" id="d42"></td>
        <td class="cbdatepicker" id="d43"></td>
        <td class="cbdatepicker" id="d44"></td>
        <td class="cbdatepicker" id="d45"></td>
        <td class="cbdatepicker" id="d46"></td>
    </tr>
    <tr class="cbdatepicker">
        <td class="cbdatepicker" id="d50"></td>
        <td class="cbdatepicker" id="d51"></td>
        <td class="cbdatepicker" id="d52"></td>
        <td class="cbdatepicker" id="d53"></td>
        <td class="cbdatepicker" id="d54"></td>
        <td class="cbdatepicker" id="d55"></td>
        <td class="cbdatepicker" id="d56"></td>
    </tr>
</table>
<p class="navdat" id="navbotleft">bottomleft</p>
<p class="navdat" id="navbotright">bottomright</p>
</div>
`


//this is where the date picker interaction happens

//this is where i do date picker interaction

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesshort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var zingdist = new ZingTouch.Distance({
    threshold: 50
})
var globdate = new Date();
var globview = 0 //0 : month , 1 : year, 2: 25 years
var globviewmax = 2;
//today.setDate(today.getDate() - 1);


//console.log(globdate);
//viewchange(globdate,2);
//addlisteners();



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
    //console.log(x1);
    x1 = (x1 + 6)%7;
    //console.log(x1);
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

    globdate = date;

    document.getElementById("yea").innerHTML = date.getFullYear();
    document.getElementById("mon").innerHTML = monthNames[date.getMonth()];
    document.getElementById("cbdatepickerheader").style.display = "table-row";
    //$("[id=cbdatepickerheader]").show();


    const datemp = new Date((date.getMonth()+1) + ' 1 ' + date.getFullYear())
    //console.log(datemp)
    x = findpos(datemp);
    //console.log("writemonth");
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

function writeyear(date){

    globview = 1;
    var d = 0;

    document.getElementById("yea").innerHTML = date.getFullYear();
    document.getElementById("mon").innerHTML = " Year ";
    document.getElementById("cbdatepickerheader").style.display = "none";
    //$("[id=cbdatepickerheader]").hide();

    for(var i = 1; i<4; i++){
        for(var j = 1; j<5; j++){
            setField(i,j,monthNames[d].substring(0,3));
            d++;
        }
    }

}

function write25years(date){

    var d = Math.floor(date.getFullYear()/25)*25
    document.getElementById("yea").innerHTML = d + " - " + (d+25);
    document.getElementById("mon").innerHTML = " Years ";
    document.getElementById("cbdatepickerheader").style.display = "none";


    //$("[id=cbdatepickerheader]").hide();

    for(var i = 1; i<6; i++){
        for(var j = 1; j<6; j++){
            setField(i,j,d);
            d++;
        }
    }

    globview = 2;

}

function writecorners(date){

    var navtopleft = document.getElementById("navtopleft");
    var navtopright = document.getElementById("navtopright");
    var navbotleft = document.getElementById("navbotleft");
    var navbotright = document.getElementById("navbotright");

    if(globview == 0){
    navtopleft.innerHTML = monthNames[(date.getMonth()-1+12)%12];
    navbotright.innerHTML = monthNames[(date.getMonth()+1)%12];
    navtopright.innerHTML = date.getFullYear() + 1;
    navbotleft.innerHTML = date.getFullYear() - 1;
    } 
    else if(globview == 1){
        navtopleft.innerHTML = date.getFullYear() - 1;
        navbotright.innerHTML = date.getFullYear() + 1;
        navtopright.innerHTML = date.getFullYear() + 25;
        navbotleft.innerHTML = date.getFullYear() - 25;
    }
    else if (globview == 2){
        var d = Math.floor(date.getFullYear()/25)*25

        navtopleft.innerHTML = d - 1;
        navbotright.innerHTML = d + 25;
        navtopright.innerHTML = d + 100;
        navbotleft.innerHTML = d - 200;
    }

}

function daysInMonth (date) { 
    x = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
    return x;
} 

function viewchange (date, view){
    globview = view;
    //console.log(date.getMonth());
    //console.log(date.getFullYear());

    globdate.setMonth(date.getMonth());
    globdate.setYear(date.getFullYear());
    clearboard();
    //console.log("viewchange");
    if(globview == 0){
        //console.log("viewchange0");
        writemonth(date);
    }
    else if (globview == 1){
        //console.log("viewchange");
        writeyear(date);
    }
    else if (globview == 2){
        write25years(date);
    }
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
                activeRegion.bind(rows[i].cells[j],'tap', celllistener);
                //rows[i].cells[j].addEventListener('click', selectDate);
        }
    }

    // var pickercontainer = document.getElementById("pickercontainer")
    // pickercontainer.addEventListener("touchstart", handleStart);
    // pickercontainer.addEventListener("touchend", handleEnd);
    // pickercontainer.addEventListener("touchcancel", handleCancel);
    // pickercontainer.addEventListener("touchmove", handleMove);
    var pickercontainer = document.getElementById('pickercontainer');
    var activeRegion = new ZingTouch.Region(pickercontainer);
    //console.log(activeRegion);
    activeRegion.bind(pickercontainer, 'swipe', onswipe);

    activeRegion.bind(pickercontainer, zingdist, ondist);

    pickercontainer.addEventListener('wheel', onzoom);
    //console.log("scrolllogger")

//    console.log("listeners added")
}

//functions for user interaction
function topleft(){
    if(globview == 0){
        globdate.setMonth(globdate.getMonth()-1);
        viewchange(globdate, 0);
    }
    else if(globview == 1){
        globdate.setYear(globdate.getFullYear()-1);
        viewchange(globdate, 1);
    }
    else if(globview == 2){
        globdate.setYear(globdate.getFullYear()-25);
        viewchange(globdate, 2)
    }
}
function topright(){
    if(globview == 0){
        globdate.setYear(globdate.getFullYear()+1);
        viewchange(globdate, 0);
    }
    else if(globview == 1){
        globdate.setYear(globdate.getFullYear()+25);
        viewchange(globdate, 1);
    }
    else if(globview == 2){
        globdate.setYear(globdate.getFullYear()+100);
        viewchange(globdate, 2)
    }

}
function botleft(){
    if(globview == 0){
        globdate.setYear(globdate.getFullYear()-1);
        viewchange(globdate, 0);
    }
    else if(globview == 1){
        globdate.setYear(globdate.getFullYear()-25);
        viewchange(globdate, 1);
    }
    else if(globview == 2){
        globdate.setYear(globdate.getFullYear()-100);
        viewchange(globdate, 2)
    }
}
function botright(){
    if(globview == 0){
        globdate.setMonth(globdate.getMonth()+1);
        viewchange(globdate, 0);
    }
    else if(globview == 1){
        globdate.setYear(globdate.getFullYear()+1);
        viewchange(globdate, 1);
    }
    else if(globview == 2){
        globdate.setYear(globdate.getFullYear()+25);
        viewchange(globdate, 2);
    }

}
function celllistener(event){
    //console.log(event);
    if(globview == 0){
        var val =event.srcElement.id.match(/\d+/)[0];
        returnDate(val);
    }
    else if(globview == 1){
        var val = document.getElementById(event.srcElement.id).innerHTML;

        var n = monthNamesshort.indexOf(val);

        var date = new Date(globdate);
        date.setMonth(n);
        viewchange(date,0);
    }
    else if(globview == 2){
        var date = new Date(globdate);
        var val = document.getElementById(event.srcElement.id).innerHTML;
        date.setYear(val);
        viewchange(date,1);

    }
}

//Zingtouch gestures
swipe = new ZingTouch.Swipe({
	numInputs: 1,
	maxRestTime: 100,
	escapeVelocity: 0.25
});

function onzoom(e){
    e.preventDefault();
    //console.log(e);
    if(e.deltaY < 0){
        var view = Math.max(0,globview-1);
    }
    else{
        var view = Math.min(globviewmax,globview + 1);
    }
    viewchange(globdate,view);
}

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

function ondist(e){
    //console.log(e.detail.change);
    if(e.detail.change > 0){
        var view = Math.max(0,globview-1);
    }
    else{
        var view = Math.min(globviewmax,globview + 1);
    }
    viewchange(globdate,view);
}


function returnDate(val){
    var x = Math.floor(val/10)
    var y = val % 10;
    var str =(("d" + x) + y)
    var val = document.getElementById(str).innerHTML;
    globdate.setDate(val);
    $("input[class*=date], input[class*=Date], input[id*=date], input[id*=Date]").eq(pickerno).val((globdate.getDate()) + "." + (globdate.getMonth()+1) + "." + (globdate.getFullYear()));
    closepicker();
}