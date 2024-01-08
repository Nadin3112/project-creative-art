import './App.css';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { AmazingWeek } from './layout/sections/amazingWeek/AmazingWeek';


function App() {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <AmazingWeek/> 
        </div>
    );
}

export default App;
