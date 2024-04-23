import { EditableProfileCard } from '../../src/features/editableProfileCard'
import { TestProvider } from '../../src/shared/lib/test/componentRender/componentRender'

const USER_ID = '1'

describe('EditableProfileCard.cy.tsx', () => {
    it('', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authUser: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>
        )
    })
})
