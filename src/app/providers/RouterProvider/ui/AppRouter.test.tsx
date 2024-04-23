import { screen } from '@testing-library/react'
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/const/router'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
import AppRouter from './AppRouter'

describe('app/router/AppRouter', () => {
    test('Страница должна отрисоваться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        })

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })

    test('Страница не должна отрисоваться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        })

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })

    test('Страница не должна отрисоваться, не хватает прав', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authUser: {},
                },
            },
        })

        const page = await screen.findByTestId('ForbiddenPage')
        expect(page).toBeInTheDocument()
    })

    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/daffdafasdf',
        })

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })
})
