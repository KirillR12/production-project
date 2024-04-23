describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.getByTestId('MainPage').should('exist')
        })

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('MainPage').should('exist')
        })

        it('Переход на несуществующий маршрут', () => {
            cy.visit('/sdagds')
            cy.getByTestId('NotFoundPage').should('exist')
        })
    })

    describe('Пользователь авторизован', () => {
        beforeEach(() => cy.login('testuser', '123'))
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('ProfilePage').should('exist')
        })

        it('Переход на страницу списка статей', () => {
            cy.visit('/article?sort=CREATED&order=asc&search=&type=ALL')
            cy.getByTestId('ArticlePage').should('exist')
        })
    })
})
