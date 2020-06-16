//this is where i do date picker interaction

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var globdate = new Date();
var today = new Date();
//today.setDate(today.getDate() - 1);


console.log(today);
console.log(findpos(today));
viewchange(1,6,2020,1);



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

function writemonth(month,year){

    document.getElementById("yea").innerHTML = year;
    document.getElementById("mon").innerHTML = monthNames[month];


    const datemp = new Date(month + ' 1 ' + year)
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
            if (d>daysInMonth(month,year)){
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

function writecorners(month,year){
    var navtopleft = document.getElementById("navtopleft");
    var navtopright = document.getElementById("navtopright");
    var navbotleft = document.getElementById("navbotleft");
    var navbotright = document.getElementById("navbotright");

    navtopleft.innerHTML = monthNames[(month-1+12)%12];
    navbotright.innerHTML = monthNames[(month+1)%12];
    navtopright.innerHTML = year + 1;
    navbotleft.innerHTML = year - 1;

}

function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 

function viewchange (day, month, year, level){
    globdate.setMonth(month)
    globdate.setYear(year)
    clearboard();
    writemonth(month,year);
    writecorners(month,year);
}

function addlisteners(){
    var navtopleft = document.getElementById("navtopleft");
    var navtopright = document.getElementById("navtopright");
    var navbotleft = document.getElementById("navbotleft");
    var navbotright = document.getElementById("navbotright");
    navtopleft.addEventListener('click',viewchange())
}