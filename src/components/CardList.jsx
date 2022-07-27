import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "../helpers/data";
import Card from "./Card";

const CardList = () => {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState(people)
    

    
    const next = () => {
        if(index === 3){
          setIndex(0)
        }else{
          setIndex(index+1)
        }
    }

    const previous = () =>{
      if(index===0){
        setIndex(3)
      }else{
        setIndex(index-1)
      }
    }
    useEffect(() => {
     const slider =  setInterval(() => {
        next()
        
      }, 3000);
      return () => {
        clearInterval(slider)
      }
       
    },[index]);
  
  return (
    <div className='row container m-auto mt-2 p-2'>
      <div className='wrapper d-flex justify-content-center align-items-center col-md-7 col-sm-7 m-auto p-2 rounded-3'>
        <button
          className='leftButton border-0 p-2 d-flex align-items-center justify-content-center  display-4'
          onClick={previous}
        >
          <FaChevronLeft />
        </button>
        <Card data={people} index={index} />
        <button
          className='rightButton border-0 p-2 d-flex align-items-center justify-content-center  display-4  '
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CardList;
