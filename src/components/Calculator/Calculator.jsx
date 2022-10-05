import React, { useState } from 'react';
import './calculator.css';
import { motion } from 'framer-motion';

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, -1)); // Or -1
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }        
    }
    return (
        <>
          <div className="container">
              <form>
                  <input type="text" value={result} readOnly />
              </form>

              <div className="keypad">
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}} 
				  	className="highlight" onClick={clear} id="clear">Clear</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" onClick={backspace} id="backspace">C</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" name="/" onClick={handleClick}>&divide;</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="7" onClick={handleClick}>7</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="8" onClick={handleClick}>8</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="9" onClick={handleClick}>9</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" name="*" onClick={handleClick}>&times;</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="4" onClick={handleClick}>4</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="5" onClick={handleClick}>5</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="6" onClick={handleClick}>6</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" name="-" onClick={handleClick}>&ndash;</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="1" onClick={handleClick}>1</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="2" onClick={handleClick}>2</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="3" onClick={handleClick}>3</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" name="+" onClick={handleClick}>+</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="0" onClick={handleClick}>0</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  name="." onClick={handleClick}>.</motion.button>
                  <motion.button 
				 	whileTap={{
						scale: 0.75
					}}  
				  className="highlight" onClick={calculate} id="result">=</motion.button>
              </div>
          </div>
        </>
    );
}

export default Calculator;