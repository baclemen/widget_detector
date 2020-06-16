//this is where i do date picker interaction

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var globdate = new Date();
//today.setDate(today.getDate() - 1);


console.log(globdate);
viewchange(globdate,1);



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
    navtopleft.addEventListener('click',viewchange(globdate.getDate(), globdate.getMonth()-1,globdate.getYear(),1))
}