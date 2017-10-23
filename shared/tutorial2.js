

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}

var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction1() {
    alert ("Hello World!");
}

function someOtherFunction() {
    alert ("This function was also executed!");
}




function myFunction2() {
    document.getElementById("demo4").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV2").removeEventListener("mousemove", myFunction2);
}



function myFunction() {
    document.getElementById("demo2").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo2").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo2").innerHTML += "Moused out!<br>";
}





