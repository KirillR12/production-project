let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then((data) => {
            profileId = data.id
            cy.visit(`/profile/${profileId}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })

    it('И редактирует ее', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
        const newFirstname = 'newlastname'
        const newLastname = 'newfirstname'
        cy.updateProfile(newLastname, newFirstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname)
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            newFirstname
        )
    })
})
