import type { Meta, StoryObj } from '@storybook/react'
import { Listbox } from './ListBox'

const meta: Meta<typeof Listbox> = {
    title: 'shared/Listbox',
    component: Listbox,
}

export default meta
type Story = StoryObj<typeof Listbox>;

export const BottomLeft: Story = {
    args: {
        value: '123',
        items: [
            { value: 'erwerwe', content: 'ewrrewr' },
            { value: 'reewre', content: '12ewrew3' },
            { value: 'erewr', content: '12erwewr3' },
        ],
        direction: 'bottom left',
    },
    decorators: [(Story) => <div style={{ padding: '200px' }}><Story /></div>],
}

export const BottomRigth: Story = {
    args: {
        value: '123',
        items: [
            { value: 'ewrewr', content: '1er23' },
            { value: '12ewrwe3', content: 'erewr' },
            { value: '1ewrewr23', content: '1reer23' },
        ],
        direction: 'bottom rigth',
    },
    decorators: [(Story) => <div style={{ padding: '200px' }}><Story /></div>],
}

export const TopLeft: Story = {
    args: {
        value: '123',
        items: [
            { value: '12ewr3', content: 'rewrew' },
            { value: '1rew23', content: '1ewrwe23' },
            { value: '12erw3', content: '1wer23' },
        ],
        direction: 'top left',
    },
    decorators: [(Story) => <div style={{ padding: '200px' }}><Story /></div>],
}

export const TopRigth: Story = {
    args: {
        value: '123',
        items: [
            { value: '1ewrew23', content: '12ewrew3' },
            { value: '1ewr23', content: '12ewrew3' },
            { value: '12ewrewrwe3', content: '12ewrew3' },
        ],
        direction: 'top rigth',
    },
    decorators: [(Story) => <div style={{ padding: '200px' }}><Story /></div>],
}
