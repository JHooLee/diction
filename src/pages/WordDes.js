import React from "react";
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
// import words from '../wordData'
import './Word.css'
import Button from "../Button";

function WordDes(props){
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
    const wordsFiltered = props.words.filter(word => {
        const filter = searchParams.get('filter')
        if(!filter) return false;
        const wrd = word.r_des.toLowerCase()
        // const wrd2 = word.r_word.toLowerCase()
        return wrd.includes(filter.toLowerCase()) 
        // || wrd2.includes(filter.toLowerCase())
    })
    // const worddesFiltered = props.words.filter(word => {
    //     const filter = searchParams.get('filter')
    //     if(!filter) return false;
    //     const wrd = word.r_des.toLowerCase()
    //     return wrd.includes(filter.toLowerCase())
    // })
    const word = wordsFiltered[params.wordsdesId]
    const arrList = []
    let index2 = 0
    return(
        <>
        {/* 검색 */}
        <div className="input-container">
        <br/><input className="filter-word" value={searchParams.get('filter')||""} onChange={changeQueryString} placeholder="search"/><br/>
        </div>
        <div className="search-result">
            {wordsFiltered 
            .map((id) => {
                arrList.push(id)     
                index2 = index2 + 1  
                console.log(arrList)     
                return(
                    <div key={index2}></div>
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
                <QueryNavLink key={id} to={`/wordsdes/${id}`} className="word-item" style={applyActiveColor}>
                    <div className="word-list-p">{word.r_word}{word.r_chi}<sup>{word.r_seq}</sup></div>
                    {/* <div>{id}</div> */}
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
            <a href={word.r_link} onClick="window.open"><Button>자세히보기</Button></a>
        </div>:
        <div className="word-card-emp">
        </div>}
        </div>
        </>
    )
}

export default WordDes
