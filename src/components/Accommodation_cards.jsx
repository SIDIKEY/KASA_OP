import React, { useState, useEffect } from "react";
import "./Accomodation_cards.css"




  
   
   const DisplayCards = () => {
    const [data, setData] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch("Accomodations.json");
       const jsonData = await response.json();
       console.log(jsonData);
       setData(jsonData);
     } catch (error) {
       console.log(error, "error"); 
     }
   };
   fetchData();
 }, []);    

 return (
  <>
    {
    data.map((dataItem) => (
    <div key = {dataItem.id} className="grid_items"> 
      <img src={dataItem.cover} className="card_cover" alt="accomodation cover" width="340" height="360" />
      <p className="card_title"> {dataItem.title} </p>
      
     
   
    </div>
    )
)}   
  </>
)}; 
export default DisplayCards