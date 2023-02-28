import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Result = () =>{
 const currentNumber = useSelector(state => state).currentNumber

  return (
    <State>{currentNumber}</State>
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