import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Payment() {
    const location = useLocation();
    const data = location.state;  

    return (
        <div>
            <h1>Payment</h1>
        </div>
    )
}
