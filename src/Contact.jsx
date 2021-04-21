 import React,{ useState } from 'react';
 import Navbar from "./Navbar.jsx";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "./index.css";

 const Contact=()=>{

    const[detail,setdetail]=useState({
     
      fname:"",
      phone:"",
      email:"",
      msg:"",
    });

    const inputevent=(e)=>{
           
          const value=e.target.value;
          const name=e.target.name;    
         
          setdetail((prevalue)=>{
               if(name==="fname"){
                return{
                  fname:value,
                  phone:prevalue.phone,
                  email:prevalue.email,
                  msg:prevalue.msg,

                };
               }
               else if(name==="phone"){
                return{
                  fname:prevalue.fname,
                  phone:value,
                  email:prevalue.email,
                  msg:prevalue.msg,

                };
               }
               if(name==="email"){
                return{
                  fname:prevalue.fname,
                  phone:prevalue.phone,
                  email:value,
                  msg:prevalue.msg,

                };
               }
               if(name==="msg"){
                return{
                  fname:prevalue.fname,
                  phone:prevalue.phone,
                  email:prevalue.email,
                  msg:value,

                };
               }
          })
         
        }

   const submit=(e)=>{
     e.preventDefault();
     alert(`Your name is :${detail.fname},Your phone number is :${detail.phone},Your email is :${detail.email} and Your msg is :${detail.msg}`)
   }

    return (
        <>
        <Navbar/>
        <div className="container-fluid pl-5 pr-5">
        <h1 className="text-center">Contact Us</h1>
        <form className="m-auto" onSubmit={submit} method="post">
        <div class="form-group">
    <label for="exampleInputPassword1">full Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Full Name" required name="fname" onChange={inputevent}/>
     </div>
     <div class="form-group">
    <label for="exampleInputPassword1">Mobile Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile Number" required name="phone" onChange={inputevent}/>
     </div>
        <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" required onChange={inputevent} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" name="msg" id="exampleFormControlTextarea1" required onChange={inputevent} rows="3"></textarea>
  </div>
    <button type="submit" className="btn btn-primary">Submit</button>
   </form>
  
   </div>
       
       </>
    )
 }

 export default Contact;