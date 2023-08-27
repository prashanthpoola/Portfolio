import './App.css';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { darkTheme} from './utils/Themes';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Body = styled.div`background-color:${({theme})=>theme.bg};
    width:100%;
    height:100%;
    overflow-x: hidden;`;

    const wrapper = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%,
     rgba(201, 32, 184, 0) 50%),
     linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
    `;

function App() {
  return (
    <ThemeProvider theme= {darkTheme}>
      <Router>
        <Navbar/>
      <Body>
        <About/>
        <wrapper>
        <Skills/>
        <Education/>
        <Contact/>
        <Footer/>
        </wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
