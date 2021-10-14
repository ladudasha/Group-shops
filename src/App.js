import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/header/Header.jsx';
import Content from './components/common/content/Content.jsx';
import Footer from './components/common/footer/Footer.jsx';



function App() {

    return ( 
    <BrowserRouter >
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </BrowserRouter>
    );
}

export default App;