import React from 'react';
import { useNavigate } from 'react-router-dom'


function Empty() {
    let nav = useNavigate();
    return (
        <>
            <h1>Use anoter account?</h1><button onClick={() => nav("/")}>Re-Login</button>
        </>
    )
}

export default Empty;
