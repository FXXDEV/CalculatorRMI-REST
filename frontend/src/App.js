import React, {useState} from 'react';
import api from './Api';
import './styles.css';

import {
  Input,
  Button,
  Container,
  Row,
 
} from "reactstrap";

function App() {

  const [val1, setVal1] = useState(undefined);
  const [val2, setVal2] = useState(undefined);
  const [result, setResult] = useState(undefined);

  async function sum(e) {
    e.preventDefault();
    const data = { val1, val2}
    try { 
      const response = await api.post('add/', data ); 
      setResult(response.data.result);
    } 
    catch (error) { 
      alert('Erro ao realizar a operação de soma, tente novamente!'); 
      setResult(undefined);
    }
  }

  async function sub(e) {
    e.preventDefault();
    const data = { val1, val2}
    try { 
      const response = await api.post('sub/', data ); 
      setResult(response.data.result);
      
    } 
    catch (error) { 
      alert('Erro ao realizar a operação de subtração, tente novamente!'); 
      setResult(undefined);
    }
  }

  async function mult(e) {
    e.preventDefault();
    const data = { val1, val2}
    try { 
      const response = await api.post('mult/', data ); 
      setResult(response.data.result);
    } 
    catch (error) { 
      alert('Erro ao realizar a operação de multiplicação, tente novamente!'); 
      setResult(undefined);
    }
  }

  async function div(e) {
    e.preventDefault();
    const data = { val1, val2}
    try { 
      const response = await api.post('div/', data ); 
      setResult(response.data.result);
    } 
    catch (error) { 
      alert('Erro ao realizar a operação de divisão, tente novamente!'); 
      setResult(undefined);
    }
  }

  async function pot(e) {
    e.preventDefault();
    const data = { val1, val2}
    try { 
      const response = await api.post('pow/', data ); 
      setResult(response.data.result);
    } 
    catch (error) { 
      alert('Erro ao realizar a operação de potênciação, tente novamente!'); 
      setResult(undefined);
    }
  }
  return (
    <Container className="d-flex flex-row justify-content-center align-items-center h-100">

    <div className="bg-dark p-3 col-md-8" >        
      <h1 className="title text-uppercase">Calculadora</h1>
        <div className="row">

          <div className="col">
            <Input type="number" onChange={e => setVal1(e.target.value)} placeholder="Insira o primeiro valor"className="form-control"/>
          </div>

          <div className="col">
            <Input type="number" onChange={e => setVal2(e.target.value)}  placeholder="Insira o segundo valor"className="form-control"/>
          </div>
        </div>
        <Row  className="text-center mt-2 ">
          <div className="col-md-12">
            <Button className="col" color="success" onClick={e => sum(e)}> Adição</Button>
            <Button className="col" color="danger" onClick={e => sub(e)}> Subtração</Button>
            <Button className="col" color="info" onClick={e => div(e)}> Divisão</Button>
            <Button className="col" color="primary" onClick={e => mult(e)}> Multiplicação</Button>
            <Button className="col" color="secondary" onClick={e => pot(e)}> Potênciação</Button>    
          </div>
        </Row>
      
        <h6 className="text-center title font-italic mt-2"> Resultado</h6>
        <Input 
            type="text" 
            className="mt-2 col form-control text-center"
            value={result}
            disabled
            
          />
        
      </div>
  </Container>
  );
}

export default App;