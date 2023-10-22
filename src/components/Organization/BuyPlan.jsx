import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


const BuyPlan = () => {
    const {org_id} = useParams()
    const [paymentStatus, setPaymentStatus] = useState()

    const Subscribe= () => {
        axios.post(`/api/organization/payment/${org_id}/`)
        .then((res)=> {
            console.log(res, "<-----------")
            if (res.data == "Alread You are Premium User"){
                setPaymentStatus(res.data);
            }
            else{
                window.location.assign(res.data);
            }
        })
    }
    return (
        <div className="w-full relative flex flex-col items-center justify-center">
            <div className="w-full p-6 bg-white rounded-md shadow-lg border-top min-h-screen flex items-center justify-center">
                <div className="card w-96 glass m-5 bg-gradient-to-r from-purple-700 to-indigo-500">
                <div className="card-body text-center text-gray-100 flex items-center justify-center">
                    <h2 className="card-title center font-bold">Ultimate Plan</h2>
                    <p>Storage upto 100 GB</p>
                    <p>Unlimited Collaboration</p>
                    <p>Unlimited Library Creation</p>
                    <p>1000/- TK Per Month</p>

                    <p>NEED TO WORK ON HERE </p>

                    <div className="card-actions justify-end">
                    <div>
                        { paymentStatus? 
                        <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{paymentStatus}.</span>
                        </div>
                        :"" }
                    </div>
                    <button onClick={()=>{Subscribe()}} className="btn btn-primary w-full bg-gradient-to-r from-purple-500 to-indigo-300">Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default BuyPlan