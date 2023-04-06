import "./header.scss"
import React, {useState} from "react";
import {Link} from "react-router-dom"

const Header = () => {
    const [isDisplay, setIsDisplay] = useState(false)

    return (
        <>
            <header>

                <Link className={"logo"} to={"/"}>Portfolio.</Link>

                <nav className={"navigation"}>
                   <div className={"icon-container"}>
                       <i onClick={ ()=> setIsDisplay(true)} className={isDisplay ? "fa-solid fa-bars hide " : "fa-solid fa-bars bars"}></i>
                       <i onClick={ () => setIsDisplay(false)} className={isDisplay ? "fa-solid fa-x bars show" : "fa-solid fa-x hide"}></i>
                   </div>

                    <div className={isDisplay ? "container-link show" : "container-link"}>
                        <Link className={"link"}  style={{style: "--i:1;"}} to={"Skills"}>Skills</Link>
                        <Link className={"link"} style={{style: "--i:2;"}} to={"Portfolio"}>Projects</Link>
                        <Link className={"link"} style={{style: "--i:3;"}} to={"Contact"}>Contact</Link>
                    </div>
                </nav>


            </header>
        </>
    )

}

export default Header;