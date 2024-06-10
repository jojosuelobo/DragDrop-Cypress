Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    const dataTransfer = new DataTransfer(); 
    cy.get(subject).trigger('dragstart',{
       dataTransfer 
      });
    cy.get(targetEl).trigger('drop',{
         dataTransfer
    })
  }
);