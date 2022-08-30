import {useState} from "react"
const Counter = ({stock, onAdd}) => {
    const[count, setCount] = useState(0)

    function add(){
        if(count < stock){
            setCount(count +1)
        }
    }

    function substract(){
        if(count > 0){
            setCount(count -1)
        }
    }

    function reset(){
        setCount(0)
    }
  return (
    <div>
       <div>
          <h1>Contador</h1>
          <p>Stock {stock} </p>
          <p>Cantidad: {count} </p>
       </div>
       <div>
        <button onClick={substract}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={add}>+</button>
       </div>
       <div>
        <button onClick={() => onAdd(count)}>Confirmar</button>
       </div>

    </div>
  )
}

export default Counter 
