var count = 0;
var customer = setInterval(customer,100);
function customer(){
  
    count++;
    var num1 = document.getElementById('num1').innerHTML = count;
    if(count==12){
        clearInterval(customer);
    }
};

var count1 = 0;
var business = setInterval(business,10);
function business(){
  
    count1++;
    var num2 = document.getElementById('num2').innerHTML = count1;
    if(count1==99){
        clearInterval(business);
    }
};

var count2 = 0;
var project = setInterval(project,10);
function project(){
  
    count2++;
    var num3 = document.getElementById('num3').innerHTML = count2;
    if(count2==210){
        clearInterval(project);
    }
};

var count3 = 0;
var year = setInterval(year,100);
function year(){
  
    count3++;
    var num4 = document.getElementById('num4').innerHTML = count3;
    if(count3==10){
        clearInterval(year);
    }
};



// navigation 

let bar = document.getElementById('bar');

bar.addEventListener('click', function(){
    let navi = document.getElementById('navi');
    navi.classList.toggle('open');
    
})