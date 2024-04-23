import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/test/componentRender/componentRender'
import { Profile } from '@/entities/Profile'
import { CurrencySchema } from '@/entities/Currency'
import { CountrySchema } from '@/entities/Country'
import { $api } from '@/shared/api/api'
import { EditableProfileCard } from './EditableProfileCard'
import { ProfileReducer } from '../../model/slice/ProfileSlice'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: CurrencySchema.RUB,
    country: CountrySchema.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
    avatar: 'https://play-lh.googleusercontent.com/ShO8lmMq5rNQa16SxMCGLZ1w4oS-oM17mPWlxU9UaYSzzonFZ2hY6pdqG1Zo2lyGYQ',
}

const option = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            error: '',
        },
        user: {
            authUser: { id: '1' },
        },
    },
    asyncReducer: {
        profile: ProfileReducer,
    },
}

describe('features/EditableProfileCard', () => {
    test('test rendor btn edit profile', async () => {
        componentRender(<EditableProfileCard id="1" />, option)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        )
        expect(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn')
        ).toBeInTheDocument()
    })

    test('when canceled the values ​​are reset to zero', async () => {
        componentRender(<EditableProfileCard id="1" />, option)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        )

        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn')
        )

        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
    })

    test('error due to incorrect data', async () => {
        componentRender(<EditableProfileCard id="1" />, option)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn')
        )
        expect(
            screen.getByTestId('EditableProfileCard.Error.Header')
        ).toBeInTheDocument()
    })

    test('no errors making a request to the server', async () => {
        const mockPutReq = jest.spyOn($api, 'put')

        componentRender(<EditableProfileCard id="1" />, option)
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        )
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user'
        )

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn')
        )
        expect(mockPutReq).toHaveBeenCalled()
    })
})
