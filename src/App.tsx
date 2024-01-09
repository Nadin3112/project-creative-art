import './App.css';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { AmazingWeek } from './layout/sections/amazingWeek/AmazingWeek';
import { Best } from './layout/sections/bestNFTs/BestNFTs';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <AmazingWeek/> 
            <Best/>
        </div>
    );
}

export default App;
