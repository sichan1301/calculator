import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState,HISTORY } from '../store';

const Result = () =>{
 const {currentNumber,resultNumber,holdNumber,operator,equal,canClear,history,index} = useSelector((state:RootState)=> state)
 const dispatch = useDispatch()

 const displayNumber = equal ? history[history.length-index] : (currentNumber === "" ? holdNumber : currentNumber)

 useEffect(()=>{
  console.log(`canClear : ${canClear}`);
  console.log(`equal : ${equal}`);
  console.log(`holdNumber : ${holdNumber}`);
  console.log(`currentNumber : ${currentNumber}`);
  console.log(`operator : ${operator}`);
  console.log(`resultNumber : ${resultNumber}`);
  console.log(`history : ${history}`);
  console.log(`index : ${index}`);
  
  console.log("-------------------------");

 },[currentNumber,resultNumber,holdNumber,operator,equal,canClear,history,index])

 const handleArrow = (e:React.MouseEvent) =>{
  dispatch(HISTORY((e.target as HTMLButtonElement).name))
 }

 return (
  <State>
    {/* {
      equal ? <Number>{history[history.length-index]}</Number>: (currentNumber === "" ? <Number>{holdNumber}</Number>:<Number>{currentNumber}</Number>  )
    } */}

    {
      index>history.length-1 ? null: <Arrow name="down" onClick = {handleArrow}>↓</Arrow>
    }

    {
      index <= 1 && <Arrow name="up" onClick = {handleArrow}>↑</Arrow>
    }

  <Number>{displayNumber}</Number>
  {/* <Arrow ></Arrow> */}
  </State>
 )
}   
  
export default Result

interface IInnerArrow {
  name:string
}

const State = styled.div`
  position:relative;
  color:#fff;
  background-color:rgb(90,90,90);
  border-radius:20px 20px 0 0;
  padding: 20px;
  height:50px;
  margin:0;
`

const Number = styled.p`
  text-align: right;
  font-size:50px;
  margin:0;
`

const Arrow = styled.button<IInnerArrow>`
  position:absolute;
  font-size:16px;
  right:8px;
  background:none;
  border:none;
  color:#fff;
  cursor:pointer;
  top:${props => props.name ==="up" && "8px"};
  bottom: ${props => props.name ==="down" && "4px"};
`

