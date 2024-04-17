describe('add product to cart', () => {
	it('should be able to navigate to product page and add it to the cart', () => {
		cy.visit('http://localhost:3000')
		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})

	it('should not add duplicated products to cart', () => {
		cy.visit('http://localhost:3000')
		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})

	it('should not add duplicated products to cart', () => {
		cy.visit('http://localhost:3000')

		cy.get('input[name="q"]').type('moletom').parent('form').submit()
		cy.location('pathname').should('include', '/search')

		cy.get('a[href^="/product"]').first().click()
		cy.location('pathname').should('include', '/product')
		cy.contains('adicionar à sacola', { matchCase: false }).click()

		cy.contains('Sacola (1)').should('exist')
	})
})
