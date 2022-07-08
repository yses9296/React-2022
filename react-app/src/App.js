import logo from './logo.svg';
import './App.css';

function Header(props){
  
  return (
    <header>
      <h1><a href="#">{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const list = [ ];

  for(let i = 0; i < props.topics.length; i++){
    let getTopic = props.topics[i];
    list.push(<li key={getTopic.id}><a href={'./read'+getTopic.id}>{getTopic.title}</a></li>)
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
  
  const topics = [
    { id: 1, title: 'HTML', desc: 'HTML is ....' },
    { id: 2, title: 'CSS', desc: 'CSS is ....' },
    { id: 3, title: 'Javascript', desc: 'Javascript is ....' }
  ];



  return (
    <div className="App">
      
      <Header title="React"></Header>
      <Nav topics={topics} ></Nav>
      <Article title="Welcome" desc="Hello, WEB"></Article>
      
    </div>
  );
}

export default App;
