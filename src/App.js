import logo from './logo.svg';
import './App.css';
import { useRef,useState } from 'react';
import Navbar from './Navbar';
import bk1 from "./bk1.jpg"
import bk2 from "./bk2.jpg"
import bk3 from "./bk3.jpg"
import bk4 from "./bk4.jpg"
import Credit from './Credit';
import Pictures from './Pictures'
import Info from './Info';
import { CSSTransition } from 'react-transition-group';




function App() {
  var current = 0;
  const [model,setModel] = useState([{"credits":
  `   Agency:@wesayhi 
  AI: @maison.meta 
  Retouching:@twistedloupe`,
  "credit2":
  `   wesayhi productions
  @adellatucker
  @bloodyhell
  @hey`,
  "image":bk1,
  "color":"PurpleHaze",
  "price":750,
  "name":"Cartier"
},current,{
  "myClass":""
}])
  const models =[
    {"credits":
    `   Agency:@wesayhi 
    AI: @maison.meta 
    Retouching:@twistedloupe`,
    "credit2":
    `   wesayhi productions
    @adellatucker
    @bloodyhell
    @hey`,
    "image":bk1,
    "color":"PurpleHaze",
    "price":750,
    "name":"Cartier"
  },
  {"credits":
  ` Agency: Sayo law 
  AI: @gracey.kase 
  Retouching:wild wild ones`,
  "credit2":
  ` Sayo productions
  @sayolaw
  @bloodyhell
  @hey`,
  "image":bk2,
  "color":"ReddishPink",
  "price":650,
  "name":"Gucci"
},
{"credits":
` Agency: Grace Kase 
AI: @sayo.law 
Retouching:Soweto love`,
"credit2":
`   Kase productions
@sgracekase
@madnesss
@hello`,
"image":bk3,
"color":"MaroonBrown",
"price":250,
"name":"Beckham"
}
  ]
  const myT = useRef(null);
  function handleClick(){
    const limit = models.length;
    var leng = model[1];

    leng++
    if(leng<limit){
    if(model[2].myClass==""){
      var thisClass = "fade-in"
    }
    else{
      var thisClass = ""
    }
    
   
    const newModel = [models[leng],leng,{"myClass":thisClass}];
    
    setModel(newModel);
    }
    else{
      leng=0;
      setModel([models[leng],leng,{"myClass":"fade-in"}]);
    }

  }
  return (
    <div className="App" style={{backgroundImage:`url(${model[0].image})`}}>
      <Navbar />
      <h1 ref={myT} className={'title ' + model[2].myClass}>{model[0].name}
      </h1>
     
      <Credit words={model[0]}/>
      <Pictures details = {models} track={model[1]} handleClick={handleClick}/>
      <Info details ={model[0]}/>
    </div>
  );
}

export default App;
