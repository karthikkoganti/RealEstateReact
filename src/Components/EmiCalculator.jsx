import React from 'react';
import '../Styles/Calculator.css';

export default function Calculator() {
    return (

        
             
       
      
            <div class="calculator" style={{marginTop:"100px"}}>
       <h1 style={{marginRight:"80px"}}>Loan Calculator:</h1> 
      <br/>
  
       
        <p>Amount (₹)     :<br/>
            <input id="amount" type="number" 
            onChange={Calculate} />
        </p>
  
        <p>Interest Rate  :
            <input id="rate" type="number" 
            onChange={Calculate} />
        </p>
  
        <p>Years to Pay :
            <input id="months" type="number" 
            onChange={Calculate} />
        </p>
  
        <h2 id="total"></h2>
    </div>
   
  
            
      
       
    )
}

function Calculate() {
 
 
    const amount = document.querySelector("#amount").value;
 
   
    const rate = document.querySelector("#rate").value;
 
 
    const months = document.querySelector("#months").value;
    const rateOfIntrest=rate/(12*100);
    const n=months*12;
   const r1=(1+ rateOfIntrest);
   const r11=Math.pow(r1,n);
   const r22=r11-1
   const total = amount*rateOfIntrest*(r11/r22);
 
   
 
    document.querySelector("#total")
        .innerHTML = "Monthly Emi : (₹)" + total;
}  