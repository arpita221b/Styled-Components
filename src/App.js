import { ThemeProvider } from 'styled-components';
import {Container} from './Components/Container.styled';
import Header from "./Components/Header";
import GlobalStyles from './Components/Global';

const theme = { 
  colours: {
    header: '#ebfbff',
    body:'#fff',
    footer:'#003333'
  }
}
function App() {
  return (
    <ThemeProvider theme = {theme}>
       <>
       <GlobalStyles/>
    <Header/>
   <Container>
   <h1> Hello World</h1>
   </Container>

</>
    </ThemeProvider>
   
  );
}

export default App;
