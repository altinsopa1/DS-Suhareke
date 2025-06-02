
setInterval(changeNames,1000);//function printNames(){
    //document.write("john");
    //document.write("<br");
    //setTimeout(function () {document.write("ana")},3000);
   // document.write("bob");
//}
//printNames();

var colors=['red','green','blue','purple'];

function changeBgColor(){
        document.querySelector('body').style.background=colors[Math.floor(Math.random()*colors.length)];

}
var names=['john','ana','bob','mark'];

function changeNames(){
    document.querySelector('p').innerHTML=
names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor,1000);