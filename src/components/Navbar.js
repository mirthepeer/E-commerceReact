import React from "react"


export default function Navbar() {
    return (
        <div>
        <nav>
            
            <div>
            <img src="https://cdn.worldvectorlogo.com/logos/mir-3.svg" className="nav--logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li><a href="">About</a></li>
                <li>Login</li>
                <li>Catagories</li>
                <li>Cart ($0)</li>
            </ul>
            
            </div>
        </nav>

        </div>
    )
}