import './App.css';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { AmazingWeek } from './layout/sections/amazingWeek/AmazingWeek';
import { Best } from './layout/sections/bestNFTs/BestNFTs';
import { Artists } from './layout/sections/artists/Artists';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <AmazingWeek/> 
            <Best/>
            <Artists/>
        </div>
    );
}

export default App;
