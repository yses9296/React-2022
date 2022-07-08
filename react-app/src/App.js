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

function Create(props){
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={ e => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        props.onCreate(title, desc);
      }}>
        <p><input type="text" name="title" placeholder='Title'></input></p>
        <p><textarea name="desc" placeholder='Description'></textarea></p>  
        <p><input type="submit" value="create"></input></p>
      </form>
    </article>
  )
}


function Update(props){
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  return (
    <article>
    <h2>Update</h2>
    <form onSubmit={ e => {
      e.preventDefault();
      const title = e.target.title.value;
      const desc = e.target.desc.value;
      props.onUpdate(title, desc);
    }}>
      <p><input type="text" name="title" placeholder='Title' 
          value={title} onChange={ (e) => {setTitle(e.target.value)}}></input>
      </p>
      <p><textarea name="desc" placeholder='Description' 
          value={desc} onChange={ (e) => {setDesc(e.target.value)}}></textarea>
      </p>  
      <p><input type="submit" value="Update"></input></p>
    </form>
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
  let contextControl = null;
  const [nextId, setNextId] = useState(4); //id init

  const [topics, setTopics] = useState([
    { id: 1, title: 'HTML', desc: 'HTML is ....' },
    { id: 2, title: 'CSS', desc: 'CSS is ....' },
    { id: 3, title: 'Javascript', desc: 'Javascript is ....' }
  ]);

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
    contextControl =  <>
                        <li><a href={'/update/'+id} 
                              onClick={ e => {e.preventDefault(); setMode('UPDATE')}}>
                        Update</a></li>
                        <li><input type="button" value="Delete" 
                                    onClick={ () => {
                                      const newToptics = [];
                                      for (let i = 0; i < topics.length; i++){
                                        if (topics[i].id !== id){
                                          newToptics.push(topics[i]);                                         
                                        }
                                      }
                                      setTopics(newToptics);
                                      setMode('WELCOME');
                                    }}>
                        </input></li>
                      </>
                      
  }
  else if( mode === 'CREATE'){
    content = <Create onCreate={ (_title, _desc) => {
      const newTopic = {id: nextId, title: _title, desc: _desc};
      const newToptics = [...topics]; //clone
      newToptics.push(newTopic);
      setTopics(newToptics);

      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    } }></Create>
  }
  else if (mode === 'UPDATE'){
    let _title, _desc = null; //init
    for (let i = 0; i< topics.length; i++){
      if(topics[i].id === id){
        _title = topics[i].title;
        _desc = topics[i].desc;
      }
    }
    content = <Update title={_title} desc={_desc} 
                      onUpdate={ (_title, _desc) => {
                        const updatedTopic = {id: id, title: _title, desc: _desc};
                        const newToptics = [...topics]; //clone
                        for(let i = 0; i< newToptics.length; i++){
                          if(newToptics[i].id === id){
                            newToptics[i] = updatedTopic; //paste the updatedTopic array into original one.
                            break; //stop the loop
                          }
                        }
                        setTopics(newToptics);

                        setMode('READ');
              }}></Update>
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
      
      <ul>
        <li>
          <a href="/create" onClick={(e) => {
            e.preventDefault(); 
            setMode('CREATE')}}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
