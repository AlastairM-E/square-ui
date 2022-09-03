describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    expect(false).to.equal(true);
  })
})