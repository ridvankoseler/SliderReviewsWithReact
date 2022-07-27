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
    
    <>
      <div className="d-flex justify-content-center">
        <button className="leftButton row col-1 p-2 " onClick={previous}>
          <FaChevronLeft />
        </button>
        <Card data={people} index={index}/>
        
        <button className="rightButton row col-1 p-2 " onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default CardList;
