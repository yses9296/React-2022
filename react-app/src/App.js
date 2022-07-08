import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){
  
  return (
    <header>
      <h1>
        <a href="#" onClick={(e) => {
          e.preventDefault();  
          props.onChangeMode();
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

function Nav(props){
  const list = [ ];

  for(let i = 0; i < props.topics.length; i++){
    let getTopic = props.topics[i];
    list.push(
      <li key={getTopic.id}>
        <a id={getTopic.id} href={'./read'+getTopic.id} 
          onClick={ e => {
              e.preventDefault();
              props.onChangeMode(Number(e.target.id)); // Number >> string값의 id를 int로 출력
          }}>
            {getTopic.title}
        </a>
      </li>
    )
  }
  return(
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  )
}


// main app
function App() {

  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME'); //init
  const [id, setId] = useState(null);
  let content = null;

  const topics = [
    { id: 1, title: 'HTML', desc: 'HTML is ....' },
    { id: 2, title: 'CSS', desc: 'CSS is ....' },
    { id: 3, title: 'Javascript', desc: 'Javascript is ....' }
  ];

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" desc="Hello, WEB"></Article>
  }
  else if( mode === 'READ'){
    let title, desc = null; //init
    for (let i = 0; i< topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        desc = topics[i].desc;
      }
    }
    content = <Article title={title} desc={desc}></Article>
  }

  return (
    <div className="App">
      
      <Header 
        title="React"
        onChangeMode={() => {
          setMode('WELCOME')
        }}>
      </Header>

      <Nav 
        topics={topics} 
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}>
      </Nav>

      {/* <Article title="Welcome" desc="Hello, WEB"></Article> */}
      {content}
      
    </div>
  );
}

export default App;
