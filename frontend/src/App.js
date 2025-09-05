import './App.css';
import {useEffect} from 'react'


const CLIENT_ID = "Ov23liRvM5jyoUAhaWRL"

function App() {

  useEffect(()=>{
const queryString= window.location.search;
const urlParams = new URLSearchParams(queryString);
const codeParam = urlParams.get("code")
  console.log(codeParam)

  },[])

function loginWithGithub(){
  window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)
}

  return (
    <div className="App">
      
      <header className="App-header">
        <h1>user not logged in</h1>
<button onClick={loginWithGithub}>login with github</button>
      </header>
    </div>
  );
}

export default App;
