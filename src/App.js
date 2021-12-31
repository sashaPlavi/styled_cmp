 
 import { ThemeProvider } from 'styled-components';
 import {Container} from './components/styles/Container.styled'
 import Header from './components/Header';
 import Card from './components/Card';
 import {Theme} from './components/styles/Theme.stiled'
 import GlobalStyles from './components/styles/Global.styled';
 import content from './content';
 import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme}>

    <>
    <GlobalStyles/>
    <Header/>
    <Container>
    {content.map((item, index)=>(
      <Card key={index} item={item} />
    ))}
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
