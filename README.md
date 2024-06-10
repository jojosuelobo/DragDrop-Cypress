# Cypress Drag and Drop (Arrasta e solta)

Este repositório contém um exemplo simples de um teste de drag and drop utilizando Cypress. O teste simula o arraste de um item do menu e a soltura deste item em um prato, utilizando comandos personalizados do Cypress.

## Pré-requisitos

- Node.js
- Cypress instalado globalmente (`npm install -g cypress`)

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/cypress-drag-and-drop.git
cd cypress-drag-and-drop
npm install
npx cypress open
npx cypress run
```

## Comando Personalizado de Drag and Drop
Para facilitar a ação de drag and drop, foi adicionado um comando personalizado dragTo ao Cypress. O código do comando está localizado em cypress/support/commands.js:

```javascript
Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    const dataTransfer = new DataTransfer(); 
    cy.get(subject).trigger('dragstart', {
       dataTransfer 
    });
    cy.get(targetEl).trigger('drop', {
       dataTransfer
    })
})
```

## Explicação do Código
1. ``Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => { ... })``: Adiciona um comando personalizado chamado dragTo ao Cypress.
2. ``const dataTransfer = new DataTransfer()``: Cria uma nova instância de DataTransfer, que é usada para simular a transferência de dados durante a operação de drag and drop.
3. ``cy.get(subject).trigger('dragstart', { dataTransfer })``: Dispara o evento dragstart no elemento subject (o elemento a ser arrastado), passando o objeto dataTransfer.
4. ``cy.get(targetEl).trigger('drop', { dataTransfer })``: Dispara o evento drop no elemento targetEl (o elemento alvo), passando o objeto dataTransfer.