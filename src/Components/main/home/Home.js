import "./home.scss"
import React from "react";


const Home = () => {

    return (
        <section className={"home"}>

            <div className={"home-content"}>
                <h1>Hi, I'm Paweł Kąsek</h1>
                <h3>Frontend Developer</h3>
                <p>I started my adventure with programming almost a year ago.
                    During this time I have been learning and increasing my tech stack.
                    I invite you to browse through my portfolio.
                </p>
                <a className={"btnHire"} href={"#"}>Hire Me!</a>
                <div className={"home-sci"}>
                    <a href={"https://www.facebook.com/paolo.wielki/"} target={"_blank"}><i className='bx bxl-facebook'></i></a>
                    <a href={""}><i className='bx bxl-twitter'></i></a>
                    <a href={"https://www.linkedin.com/in/pawe%C5%82-k%C4%85sek-256404266/"} target={"_blank"}><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>

            <div className={"home-img"}>
                <div className={"glowing-circle"}></div>
            </div>
        </section>
    )

}
export default Home