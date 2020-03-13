var imgObj;
var animate = null;

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

startStopImg = function () {
    if (animate != null) {
        stop();
    } else {
        moveRight();
    }
    change();
};

function moveRight() {
    imgObj.style.left = (parseInt(imgObj.style.left) + 10) + 'px';
    animate = setTimeout(moveRight, 50);
}

change = function () {
    var elem = document.getElementById("startButton");
    if (elem.value == "Stop") elem.value = "Start";
    else elem.value = "Stop";
};

stop = function () {
    clearTimeout(animate);
    animate = null;
};
