import React,{useState} from 'react'
import './App.css';

const App=()=>{
  let time=new Date().toLocaleTimeString();
  const[cTime, setCTime]=useState(time);
  const[color, setColor] = useState();

  const UpdateTime=()=>{
    let time=new Date().toLocaleTimeString();
    let seconds = new Date().getSeconds();

    if(seconds%2 === 0){
      setColor('black');
    } else{
      setColor('white');
    }

  
    setCTime(time);
  };
  setInterval(UpdateTime,1000);



  return(
    <>
    <div style={{ backgroundColor: color }}>
    <div style={{height:"1000px" ,paddingTop:"100px"}} >
      <div style={{backgroundColor:"#6F73D2", width:"700px", height:"500px",marginLeft:"400px",textAlign:"center"}}>
        <h2 style={{fontSize:"60px",textAlign:"center",color:"white",paddingTop:"150px"}}>Digital Clock</h2>
    <h1 style={{fontSize:"70px",textAlign:"center", paddingTop:"50px" ,color:"white",fontFamily:"monospace"}}>{cTime}</h1>
    </div>
    </div>
    </div>

    </>

  );
}

export default App;
