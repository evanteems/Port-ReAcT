import React from "react";
import Nav from '../Nav';

function Header() {
    return(
        <div className="page-header">
            <div className="col-sm p-3">
                <h1>Evan Teems</h1>
            </div>
            <div className="col-sm p-3">
                <Nav />
            </div>
        </div>
    )
}

export default Header;