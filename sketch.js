var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = []; 
var divisions=[]; 

var score=0; 
var turn=0;

//var line; 
var count; 

var particle; 

var divisionHeight=300;
//var score =0; 

var gameState="PLAY"; 

function setup() {
  createCanvas(800, 800); 

  //line= createSprite(400,400,800,20);  

  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);
  ground= new Ground(400,790,800,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
line.shapeColor="yellow";

  noStroke();
  textSize(30)
  fill("white")
  text("SCORE:  " + score, width-280, 50); 
  text("500", 10, 550); 
  text("500", 90, 550);
  text("500", 170, 550);
  text("500", 250, 550); 
  text("100", 330, 550);
  text("100", 410, 550);
  text("100", 490, 550);
  text("200", 570, 550);
  text("200", 650, 550);
  text("200", 730, 550);


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/ 
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();  

   } 


if(particle!=null) 
{ 
  particle.display();  
  console.log(particle.body.position.x);
  if(particle.body.position.y>760) 
 //if(particle.position.y>760)  
 { 
    if(particle.body.position.x < 300)   
    //if(particle.position.x < 300)   
    { 
      score=score+500; 
      particle=null; 
      if(count>=5) gameState="END"; 
    }  
  } 
}
if(particle!=null) 
{ 
  particle.display();  
  console.log(particle.body.position.x);
  if(particle.body.position.y>760) 
 //if(particle.position.y>760)  
 { 
    if(particle.body.position.x>= 300 && particle.body.position.x <600) 
    { 
      score=score+100; 
      particle=null; 
      if(count>=5) gameState="END"; 
    }  
  } 
} 
if(particle!=null) 
{ 
  particle.display();  
  console.log(particle.body.position.x);
  if(particle.body.position.y>760) 
 //if(particle.position.y>760)  
 { 
    if(particle.body.position.x>=600 && particle.body.position.x<900) 
    { 
      score=score+200; 
      particle=null; 
      if(count>=5) gameState="END"; 
    }
  }  
  
}

if(gameState==="END"){ 
  textSize(70)
  fill("red")
  text("GAME OVER", 180, 300);
}

   ground.display(); 
   //line.display(); 
} 

function mousePressed() 
{
  if(gameState!=="END") 
  { 
    //count++;  
    
    particle=new Particle(mouseX, 10,10,10);  
    particles.push(particle);  
    turn=turn+1;  
  }  

  if(turn>=5){ 
    gameState="END";  
  } 

  if(gameState==="END") 
  { 
    particle=null;      
  
  } 
}