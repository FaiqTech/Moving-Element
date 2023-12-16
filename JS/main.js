// 1111111

var square = document.querySelector(".square")

var startBtn = document.querySelector(".start")

var stopBtn = document.querySelector(".stop")
var c = 0


startBtn.addEventListener("click" ,function(){
    var running =true  //burada true di diye dovr edir

setInterval(function(){

  if(running){

      c++                     //burda c ni dovre salariq ve artir
    square.textContent=c      // burda ise o c ye verilmis deyeri number(yeni divin icindeki deyere veririk)


    stopBtn.addEventListener("click", function(){

        running=false;  // Burada false yaziriqki stop a basanda dayansin .True oldugda dovr olur ,false olanda dayanir
    })
}} )

} )


// 222222222222


var btn = document.querySelector('#animate')
var input = document.querySelector('#inp')
var number = document.querySelector('.number')


btn.addEventListener("click" , function(e){ //
    e.preventDefault();    //preventdefault ekranda refresh getmesin yeni yazdigimizi gorsetsin
    number.textContent = input.value  // ekrandaki reqem unputa daxil etdiyimiz edede beraber olsun
})



// 3333333


var around = document.querySelector('.around');
var startBtn = document.querySelector('#start-btn');

startBtn.addEventListener('click', animate);

function animate() {
  
  around.style.transform = 'scale(1.8)';

  setTimeout(function() {
    around.style.transform = 'scale(1)';
  }, 1500);
}



