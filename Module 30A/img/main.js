var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if(hours >=noon){
        meridian = "PM";
    }
     if(hours >= noon){
        meridian= "AM"
     }
     var clockTime = hours + ":" + minutes + ":" + seconds + "" + meridian;
     clock.innerText = clockTime;
     changeImage();

    };
    var oneSecond = 1000;
    setInterval(showCurrentTime, oneSecond);
    function changeImage (){
        var time = new Date().getHours();
        console.log(time);
        var image ="ds_clock.png";
        var imageHTML= document.getElementById("timeImage");
        if(time==wakeuptime){
            images = "morning.gif";
            console.log("morning");

        }
        else if (time == dstime){
            images = "class.gif";

        }
        else if(time==sleepTime){
            images = "night.gif";
        }
        imageHTML.src = image;
        console.log(imageHTML.src);

    }
function uptadeClock (){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
        wakeuptime=wakeUpTimeSelector.value;
    var dsTimeSelector = document.getElementById('sleepTimeSelector');
    dstime = sleepTimeSelector.value;
    var sleepTimeSelector=document.getElementById('sleepTimeSelector');
    sleepTime = sleepTimeSelector.value;
    
}
vsr saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",uptadeClock);