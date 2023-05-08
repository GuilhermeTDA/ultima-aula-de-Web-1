import './style.css'
import { useState,useEffect } from 'react';

function Main() {


    const [usuario,setUsuario] = useState({nome: "", img: ""});
   
    useEffect(() =>  {
        //corpo useEffect
        
        fetch('https://randomuser.me/api')
       .then(Response => Response.json()) 
       .then(data => setUsuario({nome:data.results[0].name.first,img:data.results[0].picture.large}))
    },[])

    return (
        <div className="main">
        <img src={usuario.img} alt="Foto de perfil de fulano de tal" />
        <h1>{usuario.nome}</h1>
        <h2>Estudante no Colégio Ulbra São Lucas</h2>
        <p>Tecnologias que mais conheço: </p>
        <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
        </ul>
    </div>
    )
}

export default Main