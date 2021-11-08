import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
const KEY = "pk_test_51JfmVjLkNxs1iUavm5kxUy6L5qxaWkv49TTrq2nok2ovpCAO4343H2jc0n1eIrLhhIJFtwKggMAFlXoe7bP4tj3x00fJieCYBE";

const Pay = () => {

    const [stripToken,setStripToken] = useState(null);
    const history = useHistory();

const onToken=(token)=>{
    setStripToken(token);
}
useEffect(() => {
    const makeRequest = async ()=>{
        console.log(stripToken);
        try {
           const res = await axios.post("http://localhost:5000/api/checkout/payment",
           {
               tokenId:stripToken.id,
               amount:2000
           });
           console.log(res);
           history.push("/success")
        }
        catch(err)
        {
            console.log(err);
        }
    };
   stripToken && makeRequest();
}, [stripToken,history])

    return (
        <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {stripToken ?  (<span>Processing, Please wait ...</span>): (
            <StripeCheckout name="the Center shop" image="" billingAddress shippingAddress 
            description="Your total is $20" amount={2000} token={onToken}  stripeKey={KEY}
            >
            <button  style={{border:"none",width:120,borderRadius:5,padding:"20px",backgroundColor:"black",color:"white",fontWeight:"600",cursor:"pointer"}}>
                Pay Now
            </button>
            </StripeCheckout>)}
        </div>
    )
}

export default Pay
