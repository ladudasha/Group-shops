import './App.css';

import { BrowserRouter } from 'react-router-dom';
import PopularProducts from './components/popular-products/PopularProducts';
import Header from './components/common/header/Header.jsx';
import Content from './components/common/content/Content.jsx';
import Footer from './components/common/footer/Footer.jsx';







function App() {

   

    return ( 
    <BrowserRouter >

        <div >

            <Header/>
            <Content/>
            <Footer/>

        
        

        </div>

        <div >
        <PopularProducts/>
        </div>





        </BrowserRouter>
    );
}

export default App;