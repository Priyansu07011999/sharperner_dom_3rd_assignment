// Write your code below:
document.getElementById("main-heading").innerHTML = 'Fruit World';
document.getElementById("main-heading").style.color = 'orange';
document.getElementById("header").style.backgroundColor  = 'green';
document.getElementById("header").style.borderBottom = "thick solid orange";
document.getElementById('basket-heading').style.color ='green';
var thank = document.getElementById('thanks');
var para = document.createElement('p');
para.textContent = 'Please visit us again';
thank.appendChild(para);
