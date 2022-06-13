import React from "react";
import reviews from "../dataComponent/data";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const Review =()=> {
    const[index, setIndex] = useState(0)
    const{name, job, image, text} = reviews[index]
    const checkNumber =(number)=>{
        if(number > reviews.length -1){
            return 0
        }
        if(number < 0){
            return reviews.length -1
        }
        return number;

    }
    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index + 1
            return checkNumber(newIndex);

        })
    }
    const prePerson = () =>{
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex);

        })
    }
    const randomPerson =()=>{
       let randomNumber = Math.floor(Math.random()* reviews.length);
       if(randomNumber === index){
           randomNumber = index +1
       }
       setIndex(checkNumber(randomNumber))
       console.log(randomNumber)
    };
   
   return (  
        <article className="review" >
            
                <div className="img-container">
                    <img src={image} alt={name} className="person-img"
                    />
                    <span className="quote-icon">
                    <FaQuoteRight/>
                    </span>
                    
                </div>
                
                <div className="person-name" >
                    <h3 className="author">{name}</h3>
                    <p className="job">{job}</p>
                    <h5 className="info">{text}</h5>
                </div>
                    
                    
               <div className="button-container">
                        <button className="prev-btn"onClick={prePerson}>
                            <FaChevronLeft/>
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <FaChevronRight/>
                        </button>
                </div>
                    <button className="random-btn" onClick={randomPerson}>
                        supprise me
                    </button>
           
        </article>
    );
}

export default Review