import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './main'

const meta: Meta<typeof Button> = {
    component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Submit'
    }
}