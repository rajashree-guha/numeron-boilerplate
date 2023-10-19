// Iteration 2: Generate 2 random number and display it on the screen
// math.random range -- >0 and <1
var num1= Math.floor(Math.random()*100);
var num2= Math.floor(Math.random()*100);

let num1_box =document.getElementById("number1")
let num2_box =document.getElementById("number2")

num1_box.textContent = num1;
num2_box.textContent = num2;

function generateRandomNumber(){
    num1= Math.floor(Math.random()*100);
    num2= Math.floor(Math.random()*100);
    num1_box.textContent = num1;
    num2_box.textContent = num2;
}


// Iteration 3: Make the options button functional

function update(){
    score++;
       console.log(score);
       localStorage.setItem("score" , score); // for update the old interval
       restart(interval);
       startInterval(interval);//for clearing old interval
       generateRandomNumber()
}

let score = 0;

let greater_than =document.getElementById("greater-than")
let equal_to =document.getElementById("equal-to")
let lesser_than =document.getElementById("lesser-than")

greater_than.onclick = ()=> {
    console.log(num1 , num2)
    if(num1>num2){
       update()
    }
    else{
        window.open("./gameover.html" ,"_self")
    }
}

equal_to.onclick = ()=> {
    console.log(num1 , num2)
    if(num1==num2){
        update()
    }
    else{
        window.open("./gameover.html","_self")
    }
}

lesser_than.onclick = ()=> {
    console.log(num1 , num2)
    if(num1<num2){
        update()
    }
    else{
        window.open("./gameover.html" , "_self")
    }
}

// Iteration 4: Build a timer for the game
let time=10;
let timer_box = document.getElementById("timer");

let interval;

function startInterval(){
    time=5;
    interval = setInterval(()=>{

        // timer_box.textContent=time;
        
        if(time==0){
            clearInterval(interval);
            window.location = "./gameover.html";
        }

        timer_box.textContent=time;
        time--;

    },1000);
}

startInterval();

localStorage.setItem("score" , score)

function restart(intervalId){
       clearInterval(intervalId);
}
