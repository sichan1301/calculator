import { useDispatch } from 'react-redux';
import styled, {css} from 'styled-components';
import { CLEAR, NUMBER, NEGATIVE,PERCENTAGE,EQUAL,OPERATORS } from '../store';

const Buttons = () =>{
  const dispatch = useDispatch()

  const handleNumber = (e) => {
    dispatch(NUMBER(e.target.name))
  }

  const handleOperator = (e) =>{
    dispatch(OPERATORS(e.target.name))
  }

    return (
      <ButtonSection>
        <Button option="etc"      name="AC"  onClick = {()=>dispatch(CLEAR())}>AC</Button>
        <Button option="etc"      name="+/=" onClick ={()=>{dispatch(NEGATIVE())}}>+/=</Button>
        <Button option="etc"      name="%"   onClick = {() =>{dispatch(PERCENTAGE())}}>%</Button>
        <Button option="operator" name="/"   onClick = {handleOperator}>/</Button>
        <Button option="number"   name="7"   onClick = {handleNumber} data-link="dd">7</Button>
        <Button option="number"   name="8"   onClick = {handleNumber}>8</Button>
        <Button option="number"   name="9"   onClick = {handleNumber}>9</Button>
        <Button option="operator" name="x"   onClick = {handleOperator}>x</Button>

        <Button option="number"   name="4"   onClick = {handleNumber}>4</Button>
        <Button option="number"   name="5"   onClick = {handleNumber}>5</Button>
        <Button option="number"   name="6"   onClick = {handleNumber}>6</Button>
        <Button option="operator" name="-"   onClick = {handleOperator}>-</Button>

        <Button option="number"   name="1"   onClick = {handleNumber}>1</Button>
        <Button option="number"   name="2"   onClick = {handleNumber}>2</Button>
        <Button option="number"   name="3"   onClick = {handleNumber}>3</Button>
        <Button option="operator" name="+"   onClick = {handleOperator}>+</Button>

        <Button option="number"   name="0"   onClick = {handleNumber}>0</Button>
        <Button option="number"   name="."   onClick = {handleNumber}>.</Button>
        <Button option="operator" name="="   onClick = {() =>{dispatch(EQUAL())}}>=</Button>
    
      </ButtonSection>
    )
  }   
  
export default Buttons

const ButtonSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`

const Button = styled.button`
  color:#fff;
  height:60px;
  font-size: 24px;
  font-weight: 600;
  border:0.5px solid rgb(120,120,120);
  

  ${(props) => {if(props.option === "number"){
      return (
        css`
          background:rgb(175, 175, 175);
          color:#fff;
        `
      )
    }else if(props.option === "operator"){
      return (
        css`
          background:orange;
        `
      )
    }else if(props.option === "etc"){
        return (
          css`
            background:grey;
          `
        )
      }
    }
  }

  ${(props) => {if(props.name ==="0"){
      return(
        css`
          grid-column:1/3;
          border-bottom-left-radius: 20px;
        `
      )
  }else if(props.name ==="="){
      return(
        css`
          border-bottom-right-radius: 20px;
        `      
      )
      }
    }
  }
`;
