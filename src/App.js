import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Word } from './pages';
// import Menu from './Menu'
// import Sidebar from './Sidebar';
// import Button from './Button'

class App extends Component {
  homeMenu = [
    {
      url: "/",
      name: "HOME"
    },
    {
      url: "/words",
      name: "단어 검색"
    },
    {
      url: "/wordsdes",
      name: "설명 검색"
    },
  ]
  state = {
    open: false
  }

  showSidebar = () => {
    this.setState({ open: !this.state.open })
  }
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      words: []
    }
  }
  componentDidMount() {
    const BASE_URL = 'https://dictionary-search.herokuapp.com/api/words'
    fetch(BASE_URL).then(
      res => res.json()
    ).then(
      result => {
        const { words } = result
        this.setState({ loading: false, words })
      }
    )
  }


  render() {
    const { words } = this.state
    // const {homeMenu} = this

    return (
      <div className="App">
        {/* <Button handleClick={this.showSidebar}>Menu</Button> */}
        {/* <Sidebar open={true}>
          <Menu menus={homeMenu}></Menu>
        </Sidebar> */}
        <Routes>
          <Route exact path="/" element={<Home words={words} />} />
          <Route path="/words" element={<Word words={words} />}>
            <Route path=":wordId" element={<Word words={words} />} />
          </Route>
          {/* <Route path ="/wordsdes" element={<WordDes words={words}/>}>
            <Route path=":wordsdesId" element={<WordDes/>}/>
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

export default App;