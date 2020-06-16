//this is where i do date picker interaction

var today = new Date();
//today.setDate(today.getDate() - 1);


console.log(today);
setField(0,1,"1000");
console.log(findpos(today))
writemonth(4,2020)


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
    x1 = today.getDay();
    x1 = (x1 + 6)%7;
    y1 = Math.ceil(date.getDate()/7);
    return{
        line: x1,
        row: y1
    }
}

function writemonth(month,year){
    const datemp = new Date(month + ' 1 ' + year)
    console.log(datemp)
    x = findpos(datemp);
    console.log(x);
    var rowtemp = x.row;
    var linetemp = x.line;

    var d = 1;

    for(var i = linetemp; i<6; i++){
        for(var j = rowtemp; j<7; j++){
            setField(i,j,d);
            d++;
            if (d>31){
                d = 1;
            }
        }
        rowtemp = 0;
    }
}
