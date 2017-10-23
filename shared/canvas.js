


	var canvas = document.getElementById("drawLines");
	var context = canvas.getContext("2d");
        
        var data = [];
        var currentElement = 0;



var image = new Image();
image.src = "../shared/image11.jpg";


function executeSequence()

{

document.getElementById("controls-div").style.display = "block";
document.getElementById("button-controls").style.display = "block";
document.getElementById("random-controls").style.display = "none";

}

function executeRandom()

{    
    document.getElementById("controls-div").style.display = "block";
    document.getElementById("button-controls").style.display = "none";
    document.getElementById("random-controls").style.display = "block";
    var element = parseInt(Math.random() * 20);
    currentElement = element;
    
    if (currentElement > 0 && currentElement < 20)
    
    {
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
    }
    
}

function generateSlide()

{
    var element = parseInt(Math.random() * 20);
    currentElement = element;
    
    if (currentElement > 0 && currentElement < 20)
    
    {
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
    }
    
}

function previousSlide()

{
    if (currentElement > 0)
    
    {
        currentElement--;
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
    }
    
}

function stopSlide()

{
        currentElement = 0;
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
        document.getElementById("controls-div").style.display = "none";
}

function startSlide()

{
        currentElement = 0;
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
}

function nextSlide()

{
    if (currentElement < 19)
    
    {
        currentElement++;
        var currentImage = data[currentElement].image;
        var currentCaption = data[currentElement].caption;
        context.clearRect(0, 0, canvas.width, canvas.height);
        image = new Image();
        image.src = currentImage;
        context.drawImage(image, 0, 0, 1000, 500);
        document.getElementById("caption").innerHTML = currentCaption;
    }
    
}

function callWebService(methodAndArguments, callBack)

{
var location = window.location.href;
var locationLength = location.length;
var directory = location.substr(0, locationLength - 10);
var requestUrl = directory + "data.json";


try
{
var asyncRequest = new XMLHttpRequest();
asyncRequest.addEventListener("readystatechange", function() {callBack(asyncRequest);}, false);
asyncRequest.open("GET", requestUrl, true);
asyncRequest.setRequestHeader("Accept", "application/json; charset=utf-8");
asyncRequest.send();
}

catch (exception)

{
alert("Request Failed");
}

}

function parseData(asyncRequest)

{

if ((asyncRequest.readyState == 4) && (asyncRequest.status == 200))

{
    data = JSON.parse(asyncRequest.responseText);
    currentElement = 0;
    var currentImage = data[currentElement].image;
    var currentCaption = data[currentElement].caption;
    context.clearRect(0, 0, canvas.width, canvas.height);
    image.src = currentImage;
    context.drawImage(image, 0, 0, 1000, 500);
    document.getElementById("next-button").addEventListener("click", draw, false); 
    document.getElementById("caption").innerHTML = currentCaption;
}

}

function draw()

{
var canvas = document.getElementById("drawLines");
context = canvas.getContext("2d");
context.drawImage(image, 0, 0, 1000, 500);
}


function start()

{
document.getElementById("sequential").addEventListener("click", executeSequence, false);
document.getElementById("random").addEventListener("click", executeRandom, false);    
callWebService("/", parseData);
}





