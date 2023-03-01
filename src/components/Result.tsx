import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store';

const Result = () =>{
 const {currentNumber,resultNumber,holdNumber,operator,equal} = useSelector((state:RootState)=> state)
 
 useEffect(()=>{
  console.log(`holdNumber : ${holdNumber}`);
  console.log(`currentNumber : ${currentNumber}`);
  console.log(`operator : ${operator}`);
  console.log(`resultNumber : ${resultNumber}`);
  console.log("-------------------------");
 },[currentNumber,resultNumber,holdNumber,operator])


 return (
  <>
    {
      equal ? <State>{resultNumber}</State>: (currentNumber === "" ? <State>{holdNumber}</State>:<State>{currentNumber}</State>  )
    }
  </>
 )
}   
  
export default Result

const State = styled.p`
  color:#fff;
  background-color:rgb(90,90,90);
  border-radius:20px 20px 0 0;
  text-align: right;
  font-size:50px;
  padding: 20px;
  height:50px;
  margin:0;
`