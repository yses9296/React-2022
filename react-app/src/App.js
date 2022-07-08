import logo from './logo.svg';
import './App.css';

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
              props.onChangeMode(e.target.id);
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
  
  const topics = [
    { id: 1, title: 'HTML', desc: 'HTML is ....' },
    { id: 2, title: 'CSS', desc: 'CSS is ....' },
    { id: 3, title: 'Javascript', desc: 'Javascript is ....' }
  ];

  return (
    <div className="App">
      
      <Header 
        title="React"
        onChangeMode={() => {
          alert('Header is Clicked');
        }}
      >

      </Header>

      <Nav topics={topics} onChangeMode={(id) => {alert(id)}}></Nav>

      <Article title="Welcome" desc="Hello, WEB"></Article>
      
    </div>
  );
}

export default App;
