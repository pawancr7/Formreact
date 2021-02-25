import React from 'react' 
let Emp = (props) => {
   let {name,o,sh}=props;
   
  
       return(
            <>
              <h1>{name}</h1>
              <h1>{o.car[0]}</h1>
              <button onClick={props.test}>click</button>
                     <h1>{sh[1]}</h1>     
                  </>
     )}
 export default Emp;
 