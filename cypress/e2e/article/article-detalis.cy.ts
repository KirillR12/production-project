let adticleId = ''

describe('Пользователь заходит на страница статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            adticleId = article.id
            cy.visit(`article/${adticleId}`)
        })
    })

    afterEach(() => {
        cy.removeArticle(adticleId)
    })

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetali.Info').should('exist')
    })

    it.skip('И видит список рекомендуемых статей', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })

    it.skip('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetali.Info').should('exist')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.getByTestId('ArticleRecommendationsList').should('exist')
        cy.addComment('test')
        cy.getByTestId('CommentList').should('have.length', 1)
    })

    it('И ставит оценку', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-detali.json' })
        cy.getByTestId('ArticleDetali.Info').should('exist')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(5, 'feedback').should('exist')
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})
