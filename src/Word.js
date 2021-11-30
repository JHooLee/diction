import React from "react";
import './Word.css';

function Word({r_word, r_seq, r_chi, r_pos, r_des, r_link}){
    return(
        <div className="item">
            <div className="r_word">
                <a href={r_link}><b>{r_word}</b> <sup>{r_seq? r_seq:""}</sup></a>
                {r_chi}
                <p class="r_content">{r_pos}
                {r_des}
                 </p>
            </div>
        </div>
    )
}
export default Word;