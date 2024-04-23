export const updateProfile = (lastname: string, firstname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click()
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'dafa' },
        body: {
            id: '3',
            first: 'test',
            lastname: 'user',
            age: 1,
            currency: 'USD',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(lastname: string, firstname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
