

 function Choice(tour)
 {
   k=0;
  green= GamePrototype.green
    red= GamePrototype.red

  let t;
  
  if(!tour){
   t=GamePrototype.tourPart;
   GamePrototype.t=t;
   }
    if(tour==1){console.log("je change en rouge") ;GamePrototype.t = 0;}
   if(tour==0){ console.log("je change en vert"); GamePrototype.t = 1; }
  
      affichage(GamePrototype.tabs,0,GamePrototype.t)
  // si t=1 , tour = vert 
  // si t=0 , tour = rouge
  if(GamePrototype.t==1){
   GamePrototype.pos = [ ];
   let i=0;let n = 12
 
   
    for(i=0;i<green/4;i++){
             n--
         GamePrototype.pos[i] = n; 
    }

   
for(k=GamePrototype.pos.length;k>0;k--){

    document.getElementById("td"+GamePrototype.pos[k-1].toString()).classList.add("joueur1");

    }
   }
  if(GamePrototype.t==0){

      GamePrototype.pos = [];

   let i=0;let m = red/4
 
   
    for(i=0;i<red/4;i++){
             
         GamePrototype.pos[i] = i; 
    }



       for(k=0;k<GamePrototype.pos.length;k++){
document.getElementById("td"+GamePrototype.pos[k].toString()).classList.add("joueur2");


 }
}
 }
 function HideWinner(){

   document.getElementById("winnerbtn").addEventListener("click",(e)=>{
    GamePrototype.ClickOther=true
     document.getElementById("winner").innerHTML = " ";
   });
    document.getElementById("quit").addEventListener("click",(e)=>{
       window.location.reload();
   })
 }

 function ViewWinner(){
   

 let taillered = GamePrototype.red/4;let taillegreen = GamePrototype.green/4;

  let c=0;

GamePrototype.ClickOther=false;

 document.getElementById("winner").innerHTML= `
<div id="part" class="part">
  <h4>Partie Gagné par: </h4>
  ${((GamePrototype.red!=GamePrototype.green))? `
  <img src="${(GamePrototype.red>GamePrototype.green)?"tour2.png":"tour1.png"}">
   `: `<p>Aucun Gagnant</p>`} 
<p>${(GamePrototype.red==4 || GamePrototype.green==4)? "Jeu Terminé" : "Jeu Non Terminé"}</p>

<div>

<table>
<tr> 
 
 <td id="t0"> <img src="4.png" /></td>  <td id="t1">  <img src="4.png" /></td>  <td id="t2">  <img src="4.png" /> </td>  <td id="t3">  <img src="4.png" /> </td>  <td id="t4">  <img src="4.png" /> </td>
 <td id="t5">  <img src="4.png" /> </td>
</tr>
<tr> 
 

 <td id="t11">  <img src="4.png" /></td>  <td id="t10">  <img src="4.png" /> </td>  <td id="t9">  <img src="4.png" /> </td>  <td id="t8"> <img src="4.png" />  </td><td id="t7">  <img src="4.png" /></td> 
 <td id="t6">  <img src="4.png" /></td>   
</tr>

</table>
</div>
  <div>
    

 </div>

 <div>

  ${(GamePrototype.red==4 || GamePrototype.green==4)? `
   <button id="winnerbtn">
    </button>
  <button id="quit">
      Quitter
    </button>
    `:  `
 <button id="winnerbtn">
      Continuer le jeu
    </button>

    <button id="quit">
      Quitter
    </button>
    `}
    

  </div>
<div>
`

  for(c=0;c<taillered;c++){
    document.getElementById("t"+c.toString()).classList.add("joueur2");
  }

  for(c=taillered;c<taillegreen+taillered;c++)
  {
        document.getElementById("t"+c.toString()).classList.add("joueur1");

  }
  HideWinner();

 }

 function CantGame(tab){
  let taillered = GamePrototype.red/4;let taillegreen = GamePrototype.green/4;

  let c=0;
  for(c=0;c<taillered;c++) GamePrototype.temp_tab_red+=tab[c];
  for(c=taillered;c<taillegreen+taillered;c++)GamePrototype.temp_tab_green+=tab[c];
  if(GamePrototype.temp_tab_green==0) { 
      console.log("vert null") ;
      GamePrototype.t=1;
    }
  if(GamePrototype.temp_tab_red==0) {
    GamePrototype.t=0;
      console.log("red null");

     }
  
  console.log("taille_red",GamePrototype.temp_tab_red)
    console.log("taille_green",GamePrototype.temp_tab_green)

  GamePrototype.temp_tab_red=0;
  

  GamePrototype.temp_tab_green=0;
  
 }

   const affichage = (tab,reste,tour)=>{
        
       document.getElementById("score").innerHTML=`

        <div> 

          <p class=" ballevert"> <img src="${GamePrototype.temp_green}.png" class="balle" /> </p>

        
          <p class="ballerouge">  <img src="${GamePrototype.temp_red}.png" class="balle" /> </p>
        </div>
       
       `;

        document.getElementById('bar').innerHTML = `

   
<div  class="tour tour2"> 
   <img src="tour2.png" />
   <p id="tour2">${(tour==0)?"Jouer":" "}</p>
 </div>

<table>
<tr> 

 <td id='td0'> <img rel="preload" id='0' src="${tab[0]}.png" as="image" /> </td>  <td   id='td1'>  <img rel="preload" id = '1' src="${tab[1]}.png" as="image" />  </td>  <td  id='td2'>  <img id = '2' src="${tab[2]}.png" as="image" />   </td>  <td id='td3'>  <img rel="preload" id = '3'  src="${tab[3]}.png" as="image" />   </td>  <td id='td4'>  <img rel="preload" id = '4'  src="${tab[4]}.png" as="image" />   </td>
  <td id='td5'>  <img rel="preload" id = '5'  src="${tab[5]}.png" as="image"/>   </td>
</tr>
<tr> 
<td  id='td11'>  <img rel="preload" id = '11' src="${tab[11]}.png" as="image"/>   </td>   <td id='td10'>  <img rel="preload" id = '10'  src="${tab[10]}.png" as="image"/>   </td>
  <td id='td9'>  <img as="image" rel="preload" id = '9'  src="${tab[9]}.png"/>   </td> <td id='td8'>  <img as="image" rel="preload" id = '8'  src="${tab[8]}.png"/>   </td>    <td id='td7'>  <img as="image" rel="preload" id = '7'  src="${tab[7]}.png"/>  </td>  
<td id='td6'>  <img rel="preload" id = '6'  src="${tab[6]}.png" as="image"/>   </td>  
</tr>

</table>
     <div class="tour tour1"> 
   <img src="tour1.png" />
   <p id="tour1">${(tour==1)?"Jouer":" "}</p>
 </div>


` 
if(!reste) reste=0;
document.getElementById('reste').innerHTML = `<img src="${reste}.png"/>`
 
}

function Recommencer(){
  document.getElementById("recommencer").addEventListener("click",(e)=>{
    console.log(window);
    window.location.reload();
  })


}

function AffichAbout(){
  about.addEventListener("click",(e)=>{
       document.getElementById("about1").classList.add("about2");
  })

  quit.addEventListener("click",(e)=>{
       document.getElementById("about1").classList.remove("about2");
  })


}

function DidNone(Click_id,addId, clasNone){
     
  document.getElementById(Click_id).addEventListener("click",(e)=>{
      if(e.target.id=="indication2")GamePrototype.ClickOther=true;
       document.getElementById(addId).classList.add(clasNone);
  })

}
function DidId(Click_id,addId, clasNone){
  document.getElementById(Click_id).addEventListener("click",(e)=>{
       document.getElementById(addId).classList.delete(clasNone);
  })

}
function DidHelp(Click_id,addId, clasNone){

       document.getElementById(addId).classList.remove(clasNone);


}
function HelpFunc(Click_id,addId, clasNone){
  help.addEventListener("click",(e)=>{
       GamePrototype.ClickOther=false;
DidHelp("indication2","began4","beginNone");
  DidHelp("indication","began3","beginNone");
  DidHelp("debutgreen","began2","beginNone");
  DidHelp("debutred","began1","beginNone");
})
}

function indication(){
 DidNone("indication2","began4","beginNone");
  DidNone("indication","began3","beginNone");
  DidNone("debutgreen","began2","beginNone");
  DidNone("debutred","began1","beginNone");
  DidNone("debut","began","beginNone")  
}

function WhoWin(tab,index,tour){
    
      let taillered = GamePrototype.red/4;let taillegreen = GamePrototype.green/4;
    
  if(GamePrototype.ClickWin){
     GamePrototype.ClickWin = false;
  if(tab==4 && tour==0){
    GamePrototype.temp_red+=4; 
    GamePrototype.tabs[index]=0;
    GamePrototype.total= GamePrototype.total-4;
      if(GamePrototype.total==4){
           GamePrototype.temp_green+=4;
       }
  }
    if(tab==4 && tour==1){
    GamePrototype.temp_green+=4; 
    GamePrototype.tabs[index]=0;
    GamePrototype.total= GamePrototype.total-4;
     if(GamePrototype.total==4){
           GamePrototype.temp_red+=4;
       }
  }
}  
else{
    if(index<taillered && tab==4){
       GamePrototype.temp_red+=4; 
    GamePrototype.tabs[index]=0;
    GamePrototype.total= GamePrototype.total-4;
     if(GamePrototype.total==4){
           GamePrototype.temp_green+=4;
       }
  }

  if(index>=taillered && tab==4){
  GamePrototype.temp_green+=4; 
    GamePrototype.tabs[index]=0;
    GamePrototype.total= GamePrototype.total-4;
     if(GamePrototype.total==4){
           GamePrototype.temp_red+=4;
       }
  }

}
 


}

function StopPart(){
  if(GamePrototype.total==8){
   
   //changer le tour pour la pertie
    ViewWinner();
    GamePrototype.t=GamePrototype.tourPart;
     if(GamePrototype.tourPart==1){
        GamePrototype.tourPart = 0;
      }
     else{
   if(GamePrototype.tourPart==0){ 
     GamePrototype.tourPart= 1; 
     }

 }
    GamePrototype.total=48;
    GamePrototype.red=GamePrototype.temp_red+4;
    GamePrototype.green=GamePrototype.temp_green+4;
    GamePrototype.tabs= [4,4,4,4,4,4,
                         4,4,4,4,4,4];
                GamePrototype.temp_green =0;

    GamePrototype.temp_red =0;
    GamePrototype.initie=0;
      ViewWinner();
    Choice(GamePrototype.t);
    Select();
    

  }
  if(GamePrototype.total==4){

   //changer le tour pour la pertie
    ViewWinner();
    GamePrototype.t=GamePrototype.tourPart;
     if(GamePrototype.tourPart==1){
        GamePrototype.tourPart = 0;
      }
     else{
   if(GamePrototype.tourPart==0){ 
     GamePrototype.tourPart= 1; 
     }

 }
    GamePrototype.total=48;
    GamePrototype.red=GamePrototype.temp_red;
    GamePrototype.green=GamePrototype.temp_green;
    GamePrototype.tabs= [4,4,4,4,4,4,
                         4,4,4,4,4,4];
    GamePrototype.initie=0;
      ViewWinner();
    Choice(GamePrototype.t);
    Select();
    GamePrototype.temp_green =0;
    GamePrototype.temp_red =0;

  }
}

function lad(tab){
  let p=0;let max = tab[0];
           for(p=0;p<12;p++){
            if(max<tab[p+1]){
              max=tab[p+1];
            }
           }

  document.getElementById("load").innerHTML = `<img rel="preload" src="${max+1}.png" as="image" />
`
console.log("load", max+1)
}

function Select(){
     
     tabs =  GamePrototype.tabs;
      pos = GamePrototype.pos
      k = GamePrototype.k
  document.body.addEventListener("click",(e)=>{
   GamePrototype.complet = e.target.id
    
   try { 
   let i;let m =0; let nbre;
    console.log("ch",GamePrototype.initie)
        console.log(GamePrototype.tour)
    if(GamePrototype.initie==0 && GamePrototype.ClickOther==true&&GamePrototype.tour==false){
      lad(tabs);
    for(m=0;m<pos.length;m++){
 if(e.target.id===pos[m].toString() && tabs[pos[m]]!=0){
      
     GamePrototype.initie= 1;
   nbre = tabs[pos[m]];
     
    Avancer(nbre,pos[m]);
  

}
   
};
}else {

 if(e.target.id===pos.toString() && GamePrototype.tour==false){
        lad(tabs);

      //GamePrototype.tour=true;
   nbre = tabs[pos];
     
         Avancer(nbre,pos,e);
 
     
   


   }


}


 }
 catch(error){    
  console.log(error)}
})

}

  function Avancer(nombre, index) {
  let j;let SetTemp = nombre;
  j = index + 1;
  let t = GamePrototype.tabs;
  t[index] = 0;
  affichage(t,0,GamePrototype.t);
 // document.getElementById("td"+index.toString()).classList.add("color")
  
  

  if (j >= 12) j = 0;

  function increment(e) {
    let temp = nombre;
    if (j < 12 && nombre > 0) {

      t[j] = t[j] + 1;
      let c=j;
      GamePrototype.tour=true;
      //GamePrototype.initie=1;
       if(tabs[c]==4 && nombre==1){
           setTimeout(()=>{
             GamePrototype.initie=0;
        CantGame(t);

        Choice(GamePrototype.t);
        Select();
//GamePrototype.tour==true
       },800) }
      j++;
      if (j >= 12) j = 0;
      nombre--;
      if(nombre==0) {
           if(j!=0 )  pos=j-1;
      if(j==0) pos=11;
          if(t[pos]==4) {
        GamePrototype.ClickWin = true;}
      setTimeout(()=>{
        if((t[pos]==1)||(t[pos]==0 && GamePrototype.complet!=pos.toString())){
        console.log("pos",pos);
                console.log("target",GamePrototype.complet);
                     
         GamePrototype.initie=0;
       }
       },50)
      setTimeout(()=>{
        if((t[pos]==1)||(t[pos]==0 && GamePrototype.complet!=pos.toString())){
// GamePrototype.tour=false
GamePrototype.initie=0
        CantGame(t);
        Choice(GamePrototype.t);
        Select();

        }
       },800)
      }
      setTimeout(()=>{ 
        affichage(t,nombre,GamePrototype.t);
  WhoWin(t[c],c,GamePrototype.t);      
   if(GamePrototype.t==0)  {   
   document.getElementById("td"+c.toString()).classList.add("joueur22");



}
 if(GamePrototype.t==1)  { 
          document.getElementById("td"+c.toString()).classList.add("joueur11");
}


      if(GamePrototype.total==8){
        GamePrototype.initie=0;
      }


 },300); 
 if(nombre==0){
     setTimeout(()=>{

 GamePrototype.tour=false;

     
     
 },500);}
      setTimeout(()=>{
          StopPart()

      },1000)
      setTimeout(increment, 300);
     
    

    

     // Ajoutez un délai d'1 seconde ici
    }
  }


        
  increment();
/*
setTimeout(()=>{
          if(t[pos]==1){
        Choice(GamePrototype.t);
        }
       },SetTemp*300)
   */   

  
}

let GamePrototype = {
       load:4,
       tour:false,
       tourPart: Math.floor(Math.random()*2),
       temp_tab_red:0,
       temp_tab_green:0,
       ClickWin: false,
       ClickOther:false,
       total:48,
       temp_red:0,
       temp_green:0,
       initie:0,
       red:24,
       green:24,
       k:0,
       tabs:[4,4,4,4,4,4,
              4,4,4,4,4,4],
       pos:0,

     init: function(){
      indication();
      Choice();
     },
     selectGame: function() {
           Select();   
       },





}
  Recommencer();           
  HelpFunc(); 
  AffichAbout();       
             
GamePrototype.init();
GamePrototype.selectGame();






