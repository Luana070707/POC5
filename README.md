# 🚀 Conceitos Básicos de React e Next.js 14+

<p aling="center">Este repositório contém uma Prova de Conceito (POC) explorando alguns fundamentos de React e Next.js 14 ou superior. Vamos ver como configurar um projeto, criar componentes simples e utilizar estilos em CSS global e módulos CSS</p>

## 📂 Estrutura de Projeto Next.js 14+

Ao iniciar um projeto em Next.js 14+, temos uma estrutura padrão criada automaticamente que organiza nosso código e facilita a manutenção. Aqui está um exemplo de uma visão geral dos diretórios principais:

```
.
├── app/                  # Nova estrutura de roteamento (Next.js 13+)
│   ├── layout.js         # Define layout global para todas as páginas
│   ├── page.js           # Página principal da aplicação
│   └── (outras rotas)    # Definição de rotas utilizando pastas e arquivos
├── components/           # Componentes reutilizáveis
├── public/               # Arquivos estáticos (imagens, fontes)
├── styles/               # Arquivos de estilo global
│   ├── globals.css       # Estilo global aplicável a toda a aplicação
│   └── Home.module.css   # Estilos em módulo para a página Home
└── next.config.js        # Configurações de build e runtime
```

## 🧩 Criação de Componentes Simples

Em React, componentes são fundamentais para criar interfaces reutilizáveis. Nesta POC, focamos em componentes sem estado — isto é, aqueles que apenas exibem dados passados via props, sem lógica interna.

### Exemplo de Componente Simples: `Button.js`

Dentro da pasta `components/`, podemos criar um componente simples:


```
// components/Button.js
import React from 'react';
import styles from './Button.module.css'; // Importando módulo de estilo

function Button({ label }) {
  return <button className={styles.button}>{label}</button>;
}
```
export default Button;


Esse componente `Button` recebe uma prop `label` e exibe o texto correspondente. Utilizamos um módulo CSS para estilizar o botão de forma isolada.

## 🎨 Estilo CSS (Global e Módulo)


- Estilos Globais: 

Para estilos que devem ser aplicados a toda a aplicação, utilizamos o arquivo `globals.css` dentro da pasta `styles/`.

```
/* styles/globals.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}
```
- Esse arquivo é importado no layout principal para garantir que esses estilos sejam aplicados em todas as páginas.

## Módulos CSS: 

Para aplicar estilos isolados a componentes específicos, utilizamos módulos CSS. Dessa forma, evitamos conflitos de estilo.

```
/* styles/Button.module.css */
.button {
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #005bb5;
}
```

- Assim, importamos o módulo `Button.module.css` diretamente no componente `Button.js`, garantindo que o estilo seja exclusivo para esse componente.

## Conclusão: 

Este README serve como uma introdução ao Next.js 14 e ao React básico com foco em organização, criação de componentes e estilo.


















                                                                                                                                                                                                                                       
