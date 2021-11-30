import { BrowserRouter } from "react-router-dom";
import App from './App.js'

function Browser(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App></App>
        </BrowserRouter>
    )
}

export default Browser