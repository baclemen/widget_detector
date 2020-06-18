//this is where i do date picker interaction

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNamesshort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var zingdist = new ZingTouch.Distance({
    threshold: 80
})
var globdate = new Date();
var globview = 0 //0 : month , 1 : year, 2: 25 years
var globviewmax = 1;
//today.setDate(today.getDate() - 1);


console.log(globdate);
viewchange(globdate,1);
addlisteners();



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
    console.log("writemonth");
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

    document.getElementById("cbdatepickerheader").style.display="none"

    for(var i = 1; i<4; i++){
        for(var j = 1; j<5; j++){
            setField(i,j,monthNames[d].substring(0,3));
            d++;
        }
    }

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

}

function daysInMonth (date) { 
    x = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
    return x;
} 

function viewchange (date, view){
    globview = view;
    console.log(date.getMonth());
    console.log(date.getFullYear());

    globdate.setMonth(date.getMonth());
    globdate.setYear(date.getFullYear());
    clearboard();
    console.log("viewchange");
    if(globview == 0){
        console.log("viewchange0");
        writemonth(date);
    }
    else if (globview == 1){
        console.log("viewchange");
        writeyear(date);
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

        var rows = document.getElementById('pickertable').rows;
        
        for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < rows[i].cells.length; j++ ) {
                          
                rows[i].cells[j].addEventListener('click', celllistener);
        }
    }

    // var pickercontainer = document.getElementById("pickercontainer")
    // pickercontainer.addEventListener("touchstart", handleStart);
    // pickercontainer.addEventListener("touchend", handleEnd);
    // pickercontainer.addEventListener("touchcancel", handleCancel);
    // pickercontainer.addEventListener("touchmove", handleMove);
    var pickercontainer = document.getElementById('pickercontainer');
    var activeRegion = new ZingTouch.Region(pickercontainer);
    console.log(activeRegion);
    activeRegion.bind(pickercontainer, 'swipe', onswipe);

    activeRegion.bind(pickercontainer, zingdist, ondist);

    pickercontainer.addEventListener('wheel', onzoom);
    console.log("scrolllogger")

    console.log("listeners added")
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

}
function celllistener(event){
    console.log(event);
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

function onzoom(e){
    console.log(e);
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
    console.log(e.detail.distance);
    if(e.detail.distance < 0){
        var view = Math.max(0,globview-1);
    }
    else{
        var view = Math.min(globviewmax,globview + 1);
    }
    viewchange(globdate,view);
}


function returnDate(val){
    output = document.getElementById("output")
    var x = Math.floor(val/10)
    var y = val % 10;
    var str =(("d" + x) + y)
    var val = document.getElementById(str).innerHTML;
    globdate.setDate(val);
    
    output.innerHTML = "Selected date is:" + globdate;
}