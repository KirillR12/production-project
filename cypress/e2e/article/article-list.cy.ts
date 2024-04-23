let articleId = ''

describe('Пользователь заходит на страница статей', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((body) => {
            articleId = body.id
        })
        cy.visit('article')
    })

    afterEach(() => {
        cy.removeArticle(articleId)
    })

    it('И видит список статей', () => {
        cy.getByTestId('ArticlePage').should('exist')
        cy.getByTestId('ArticleList').should('exist')
    })

    it('И сортирует по просмотрам и убыванию статьи', () => {
        cy.getByTestId('ArticlePage').should('exist')
        cy.getByTestId('ArticlePageFilters').should('exist')
        cy.getByTestId('ArticleSortSelector.Sort').select('По названию')
    })

    it('И сортирует по фильтру наука', () => {
        cy.getByTestId('ArticleTypeTab.Tab').should('exist')
        cy.getByTestId('Tab.SCIENCE').click()
        cy.getByTestId('ArticleListItem.TEST_ARTICLE').should('exist')
    })

    it('И ищет статью в поиске', () => {
        cy.intercept('GET', '**/article?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticlePage').should('exist')
        cy.getByTestId('ArticlePageFilters.Input').type('TEST_ARTICLE')
        cy.getByTestId('ArticleListItem.TEST_ARTICLE')
            .should('exist')
            .scrollIntoView()
        cy.getByTestId('ArticleList').should('have.length', 1)
    })
})
