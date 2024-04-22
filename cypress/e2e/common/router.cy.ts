import { selectByTestId } from 'cypress/helpers/selectByTestId'

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
        })

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('MainPage')).should('exist')
        })

        it('Переход на несуществующий маршрут', () => {
            cy.visit('/sdagds')
            cy.get(selectByTestId('NotFoundPage')).should('exist')
        })
    })

    describe('Пользователь авторизован', () => {
        beforeEach(() => cy.login('testuser', '123'))
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })

        it('Переход на страницу списка статей', () => {
            cy.visit('/article?sort=CREATED&order=asc&search=&type=ALL')
            cy.get(selectByTestId('ArticlePage')).should('exist')
        })
    })
})
