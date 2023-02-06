import { useState } from "react";

const Saludar = () => {
    // x defecto es false
    const [saluda, setSaluda] = useState(false);
    
    return (
        <div>
            {saluda ? <h3>Hola!</h3> : null}

            <button onClick={()=> {
                setSaluda(!saluda);
            }}>
                {saluda ? "no saludar" : "saludar" }
            </button>
            
        </div>
    )
}
export default Saludar;

