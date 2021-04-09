const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var time = null;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    // add condition to check if any background image is there to add
    background(backgroundImg);
    
    Engine.update(engine);

    // write code to display time in correct format here
    strokeWeight(10);
    text("time :" + hour + " " +time, 600, 50);    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    var datetime = responseJson.datetime;
    hour = datetime.slice(11, 13);
    
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset

    if(hour >= 04 && hour <= 06){
    
        backgroundImg = loadImage("sunrise1.png");

    }
    else if(hour >= 06 && hour < 07){
        
        backgroundImg = loadImage("sunrise2.png");

    }
    else if(hour >= 07 && hour < 09){
        
        backgroundImg = loadImage("sunrise3.png");

    }
    else if(hour >= 09 && hour < 11){
        
        backgroundImg = loadImage("sunrise4.png");

    }
    else if(hour >= 11 && hour < 13){
        
        backgroundImg = loadImage("sunrise5.png");

    }
    else if(hour >= 13 && hour < 15){
        
        backgroundImg = loadImage("sunrise6.png");

    }
    else if(hour >= 15 && hour < 16){
        
        backgroundImg = loadImage("sunset7.png");

    }
    else if(hour >= 16 && hour < 17){
        
        backgroundImg = loadImage("sunset8.png");

    }
    else if(hour >= 17 && hour < 18){
        
        backgroundImg = loadImage("sunset9.png");

    }
    else if(hour >= 18 && hour < 19){
        
        backgroundImg = loadImage("sunset10.png");

    }
    else if(hour >= 19 && hour < 21){
        
        backgroundImg = loadImage("sunset11.png");

    }
    else{
        
        backgroundImg = loadImage("sunset12.png");

    }
   
    if(hour > 0 && hour < 12){
        time = "AM";
    }
    else{
        time = "PM";
    }
    console.log(time);
    //load the image in backgroundImg variable here

}
