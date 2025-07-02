import React, { useState } from 'react';
export const Counter = () => {
    const [inc, setInc] = useState(0);
    return <button className="bg-red-400 text-blck p-5" onClick={() => setInc((prev) => prev + 1)}> Add - {inc}</button>
}