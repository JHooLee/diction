import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home(){

    let navigate = useNavigate()
    function handleClick(){
        navigate("/words")
    }
    
    return(
        <>
        {/* 검색 */}
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
        <div className="home-container">
          <br/>
          <a onClick={handleClick}><input className="filter-word" /></a><br/>
        </div>      
        </>
    )
}

export default Home