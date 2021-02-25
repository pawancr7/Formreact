import './App.css';
import Emp from './employee/Emp';
function  App() {
     const na ='pawan' 
     let obj ={car:["volvo", "suziki"],
               bike:["honda","pulsar"]};
    function tester()
    {
       alert('hello')
    }
       let show =["anime","/';.....movie"];
  return (
     <>
      <Emp name={na}  o={obj} test={tester}  sh={show}/>
      </>
     )  
   }
export default App;
