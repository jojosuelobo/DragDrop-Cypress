describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/ingredients/drag-and-drop')
  })

  it('drag e drop', () => {
    cy.get('[id="menu-fried-chicken"]').dragTo('[id="plate-items"]')
  });
})