import {useState} from 'react'
import './App.css'

function App() {
    const [number, setNumber] = useState(0);
    const Increase = () => {
        setNumber(number + 1);
    }
    const Decrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <button onClick={Decrease}>Decrease</button>
            <span style={{padding: 10, color: "green"}}>
                <b>{number}</b>
            </span>
            <button onClick={Increase}>Increase</button>
        </div>
    )
}

export default App
