import { useState } from 'react';
import C from './Child';
function P() {
    const[data,setData]=useState(0)
    function hai(k,m) {
        setData(k,m)
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <h2>received:{data}</h2>
            <C value={hai} />
        </div>
    );
}

export default P;