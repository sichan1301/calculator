import styled, {css} from 'styled-components';

const Buttons = () =>{
    return (
      <ButtonSection>
        <Button type="etc">AC</Button>
        <Button type="etc">+/=</Button>
        <Button type="etc">%</Button>
        <Button type="operator">/</Button>
        <Button type="number">7</Button>
        <Button type="number">8</Button>
        <Button type="number">9</Button>
        <Button type="operator">x</Button>
        <Button type="number">4</Button>
        <Button type="number">5</Button>
        <Button type="number">6</Button>
        <Button type="operator">-</Button>
        <Button type="number">1</Button>
        <Button type="number">2</Button>
        <Button type="number">3</Button>
        <Button type="operator">+</Button>
        <Button type="number" zero>0</Button>
        <Button type="number">.</Button>
        <Button type="operator" equal>=</Button>
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
  z-index: 100;

  ${(props) => {if(props.type === "number"){
      return (
        css`
          background:rgb(175, 175, 175);
          color:#fff;
        `
      )
    }else if(props.type === "operator"){
      return (
        css`
          background:orange;
        `
      )
    }else if(props.type === "etc"){
        return (
          css`
            background:grey;
          `
        )
      }
    }
  }

  ${(props) => props.zero && 
      css`
        grid-column:1/3;
        border-bottom-left-radius: 20px;
      `
    }

  ${(props) => props.equal && 
    css`
      border-bottom-right-radius: 20px;
    `
  }


`;
