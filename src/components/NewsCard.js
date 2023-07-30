import { Box,HStack,Heading,Image } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import "../App.css"

  
  export const NewsCard = () => {
      const [records,setRecords]=useState([]);
      const fetchdata = ()=>{
        fetch("https://backendtaknikiwizz--prem2310.repl.co/api/getNews")
        .then((res) => res.json())
        .then((res)=> setRecords(res));
      }
      
    fetchdata();
     
   
     console.log(records);
      return (
         <div className='card-contain'>
        {records.map((record)=>{
          return(
            <div className='card'> 
              
              <img src={record.image} placeholder=''/>
              <div className='container'>
                <h4>{record.title}</h4>
                <p>{record.author}</p>
              </div>
          </div>
          );
        })}
        
        </div>
        );
        }
