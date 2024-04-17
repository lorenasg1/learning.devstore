describe('search products', () => {
	it('should be able to search products', () => {
		cy.visit('/')
		cy.get('input[name="q"]').type('moletom').parent('form').submit()
		cy.location('pathname').should('include', '/search')
		cy.location('search').should('include', 'q=moletom')

		cy.get('a[href^="/product"]').should('exist')
	})

	it('should redirect to home if there is no search param', () => {
		cy.on('uncaught:exception', () => {
			return false
		})

		cy.visit('/search')

		cy.location('pathname').should('eq', '/')
	})
})
