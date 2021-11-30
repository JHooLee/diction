import {React, useState} from "react";
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
// import words from '../wordData'
import './Word.css'
import Button from "../Button";

function Word(props){
    const params = useParams();
    let [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({isActive}) => (isActive? {color:'white', padding:'15px', margin:'-15px', background:'tan'}:{})

    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }
    const QueryNavLink = ({to, children, ...props}) => {
        const location = useLocation();
        return <NavLink to={to + location.search} {...props}>{children}</NavLink>
    }
    const selectList = ["단어", "뜻", "단어+뜻"];
    const [selected, setSelected] = useState("단어");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    // console.log(selected)
    
    const wordsFiltered = props.words.filter(word => {
        const filter = searchParams.get('filter')
        if(!filter) return false;
        if(selected==='단어'){
        const wrd = word.r_word.toLowerCase()//r_word: 단어 검색
        return wrd.includes(filter.toLowerCase())}
        if(selected==='뜻'){
            const wrd = word.r_des.toLowerCase()//r_des: 뜻 검색
            return wrd.includes(filter.toLowerCase())}
        if(selected==='단어+뜻'){
            const wrd = word.r_word.toLowerCase()
            const wrd2 = word.r_des.toLowerCase()//r_word: 단어 검색, r_des: 뜻 검색
            return wrd.includes(filter.toLowerCase()) || wrd2.includes(filter.toLowerCase()) }
    })

    const word = wordsFiltered[params.wordId]
    const arrList = []

    let index = 0
    return(
        <>
        {/* 검색 */}
        <div className="input-container">
            <br/>
            <select className="select-box" 
                    onChange={handleSelect} 
                    value={selected}>
                {selectList.map((item) => (
                    <option className="select-opt" value={item} key={item}>
                      {item}
                    </option>
                ))}
            </select>
            <input className="filter-word" 
            value={searchParams.get('filter')||""} 
            onChange={changeQueryString} placeholder="search" autoFocus/><br/>
        </div>
        {/* <select onChange={handleSelect} value={selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select> */}
        <div className="search-result">   
            {wordsFiltered 
            .map((id) => {
                arrList.push(id) 
                index = index+1
                return(
                    <div key={index}></div>
                )           
            })}      
            <div>검색 결과 : &nbsp;&nbsp;{arrList.length} 개</div>         
        </div>
        <div className="container">
        {/* 전체 단어 */}
            <div className="word-list">
            {wordsFiltered 
            .map((word, id) => {                
                return(
                    <QueryNavLink key={id} to={`/words/${id}`} className="word-item" style={applyActiveColor}>
                        <div className="word-list-p">{word.r_word}{word.r_chi}<sup>{word.r_seq}</sup></div>
                    </QueryNavLink>
                )
            })}
            </div>
            {/* 특정 단어 */}
            {word?
            <div className="word-card">
                <h1>{word.r_word}<sup>{word.r_seq}</sup></h1>
                <h2>{word.r_chi}</h2>
                <h2>{word.r_pos}</h2>
                <h2>{word.r_des}</h2>
                <a href={word.r_link}><Button>자세히보기</Button></a>
            </div>:
            <div className="word-card-emp">
            </div>}
        </div>
        </>
    )
}

export default Word
