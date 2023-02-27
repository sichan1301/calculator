import styled from 'styled-components';

import './App.css';
import Result from './components/Result';
import Buttons from './components/Buttons';

function App() {
  return (
    <AppSection>
      <Result />
      <Buttons />
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  margin: 250px auto;
  width:300px;
  border:0.5px solid rgb(92, 92, 92);
  border-radius: 20px;
`
