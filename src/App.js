import './App.css';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/common/header/Header.jsx';
import Content from './components/common/content/Content.jsx';
import Footer from './components/common/footer/Footer.jsx';
import Routers from './components/Routers'
// @import './abstracts/mixins';







function App() {

    return ( 
    <HashRouter >
        <div className = "wrapperGreat" >
        <Header/>
        <Content className = "contentBlock"/>
        <Footer/>
        </div> 
    </HashRouter>
    );
}

export default App;