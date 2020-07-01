import "./App.css";
import React from "react";
import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";

import Contador from "./components/contador/Contador";

import Input from "./components/formulario/Input";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";

import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#13 - Desafio Megasena" color="#FFA500">
          <Mega />
        </Card>

        <Card titulo="#12 - Contador" color="#0000FF">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#191970">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#40E0FF">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#40E0D0">
          <DiretaPai />
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#C0C0C0">
          <ParOuImpar numero={21} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#B22222">
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição" color="#FFD700">
          <ListaAlunos />
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#7B68EE">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FFA500">
          <Aleatorio min={20} max={40} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#EE82EE">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#00FF00">
          <ComParametro
            titulo="Situação do Aluno"
            subtitulo="Pedro Silva tem nota 10 e está Aprovado"
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#87CEEB">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
