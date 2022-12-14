import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";


export default function Cadastro () {

     const navigate = useNavigate();   
    const [cadastrar, setCadastrar] = useState({email:'', password:'', name:'', image:''});
    

    function registrar(event) {
        event.preventDefault();
    
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastrar);
        promise.then((res) => {
            console.log(res.data);
            navigate("/");
        });

        promise.catch((err) => console.log(err.response.data))
    
    }


   


    return (
        <Container>
            
            <div onClick={() => navigate('/')}>
             <img src={logo}></img>
            </div>

         <form onSubmit={registrar}>
            <Inputs>
                <input 
                type="email" 
                placeholder="email" 
                value={cadastrar.email} 
                onChange={(event) => setCadastrar({...cadastrar, email:event.target.value})} 
                required
                />
                <input 
                type="password" 
                placeholder="senha" 
                value={cadastrar.password} 
                onChange={(event) => setCadastrar({...cadastrar, password:event.target.value})} 
                required
                />
                <input
                    type='text'
                    value={cadastrar.name}
                    onChange={(event) => setCadastrar({...cadastrar, name:event.target.value})}
                    placeholder='nome'
                    required
                    
                />
                <input
                    type='url'
                    value={cadastrar.image}
                    onChange={(event) => setCadastrar({...cadastrar, image:event.target.value})}
                    placeholder='foto'
                    required
                   
                />
           
           
            </Inputs>
            <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        </Container>
    )


    
}


const Container = styled.div`
    min-width:375px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#FFFFFF;
    p{
        color:#52B6FF;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
        margin-top: 25px;
        cursor: pointer;
    }
    img {
        margin-top:80px;
        width:180px;
        height: 180px;
        cursor: pointer;
    }
    button{
        margin-top: 10px;
        background-color: #52B6FF;
        color:#FFFFFF;
        width:300px;
        height: 45px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`
const Inputs = styled.div`
    display: flex; 
    flex-direction: column;
    input {
        margin-top: 10px;
        width:300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }
  
`