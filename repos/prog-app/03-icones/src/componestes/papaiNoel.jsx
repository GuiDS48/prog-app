import React, { useState } from 'react'

function papaiNoel() {
    const [falaPapaiNoel, setfalaPapaiNoel] = useState(" ")

    function calculoHoHoHo(){
        const Resultado = "Ho"

        for(let x = 0;x <= 10;x++){

        }
    }

    return (
        <div>
            <input 
            type="number"
            value={0} 
            onChange={(e) => setfalaPapaiNoel(e.target.value)}
            />
            <button onClick={calculoHoHoHo}>Mostra</button>
            {}

        </div>
    )
}

export default papaiNoel