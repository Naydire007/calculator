describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of running total', () => {
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '49')
  })

  it('should update the total', () => {
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('should do multiple operations', () => {

    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 136)
  })

  it ('should be able to handle large numbers', () => {

    cy.get('#number6').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number9').click(); 
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 236340884609)
  })

  it('should be able to handle decimals', () => {

    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 4.5)
  })

  it('should be able to deal with negative numbers', () => {

    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', -19)
  })

  it('should be able to divide by zero', () => {

    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Void')
  })
})




