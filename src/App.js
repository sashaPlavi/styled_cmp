 
 import { ThemeProvider } from 'styled-components';
 import {Container} from './components/styles/Container.styled'
 import Header from './components/Header';
 import {Theme} from './components/styles/Theme.stiled'
 import GlobalStyles from './components/styles/Global.styled';

function App() {
  return (
    <ThemeProvider theme={Theme}>

    <>
    <GlobalStyles/>
    <Header/>
    <Container>
    dankica car
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
