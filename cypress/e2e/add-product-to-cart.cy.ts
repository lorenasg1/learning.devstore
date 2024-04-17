describe('add product to cart', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should be able to navigate to product page and add it to the cart', () => {
		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})

	it('should not add duplicated products to cart', () => {
		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})

	it('should not add duplicated products to cart', () => {
		cy.searchByQuery('moletom')
		cy.location('pathname').should('include', '/search')

		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})
})
