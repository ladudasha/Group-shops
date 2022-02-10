import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/header/Header.jsx';
import Content from './components/common/content/Content.jsx';
import Footer from './components/common/footer/Footer.jsx';
import Routers from './components/Routers'
// @import './abstracts/mixins';







function App() {

    return ( 
    <BrowserRouter >
        <div className = "wrapperGreat" >
        <Header/>
        <Content className = "contentBlock"/>
        <Footer/>
        </div> 
    </BrowserRouter>
    );
}

export default App;