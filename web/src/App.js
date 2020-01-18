import React, { useState, useEffect } from 'react';
import './global.css';
import './app.css';
import './Sidebar.css';
import './main.css';

// navigator.geolocation.getCurrentPosition();
// Componente (bloco isolado de java, html, ccs) exemplo function
// Propriedade (atributos ) props ex {props.title}
// Estado (informacoes mantida do componente (imutabilidade))

function App() {

    const {latitude, setLatitude} = useState('');
    const {longitude, setLongitude} = useState('');
    const {github_username, setGithub_username} = useState('');
    const {techs, setTechs} = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        
        const { latitude, longitude } = position.coords;
        
        document.getElementById('latitude').value = latitude;
        document.getElementById('longitude').value = longitude;
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  },[]);

  async function handleAddDev(e){
    e.preventDefault();
  }

   return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" required 
              value={github_username}
              onClick={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" required
              value={techs}
              onClick={e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required value={latitude}
              onClick={e => setLatitude(e.target.value)}
             />  
            </div> 

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required value={longitude} 
              onClick={e => setLongitude(e.target.value)}
              /> 
            </div> 
          </div> 
          <button type="submit">Salvar</button>       
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
            <img src="https://avatars3.githubusercontent.com/u/59589223?s=400&u=50eaba636b040b9f882f03ba70e56e89b3ba80a1&v=4" alt="Silvio Alves"/>
              <div className="user-info">
                <strong>Silvio Alves</strong>
                <span>ReactJS, React Native, Node.JS</span>
              </div>
            </header>
            <p>Tecnico em automacao industrial pela empresa bovmeat</p>
            <a href="https://github.com/silvio-fullstack">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/59589223?s=400&u=50eaba636b040b9f882f03ba70e56e89b3ba80a1&v=4" alt="Silvio Alves"/>
                <div className="user-info">
                  <strong>Silvio Alves</strong>
                  <span>ReactJS, React Native, Node.JS</span>
                </div>
            </header>
            <p>Tecnico em automacao industrial pela empresa bovmeat</p>
            <a href="https://github.com/silvio-fullstack">Acessar Perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
