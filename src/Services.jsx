import React from 'react';
import Navbar from "./Navbar.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card.jsx";

const Services=()=>{

    return(
        <>
        <Navbar/>
        <div className="container  my-5">
        <div className="row services gy-5">
        <Card
         img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
         title="Web Development"
        >
           
        </Card>
        <Card
        img="https://images.unsplash.com/photo-1613288092085-eb081fde1509?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="App Development"
        ></Card>
        <Card
        img="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Software Development"
        ></Card>
        <Card
        img="https://images.unsplash.com/photo-1557838923-2985c318be48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Digital Marketing"
        ></Card>
        <Card
        img="https://images.unsplash.com/photo-1590935217281-8f102120d683?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5kcm9pZCUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Android Development"
        ></Card>
        <Card
        img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        title="Data Science"
        ></Card>
        </div>
        </div>
</>
    )
}
        

 export default Services;