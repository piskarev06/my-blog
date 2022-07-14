import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			description: 'Текст кнопки',
			type: 'string',
			defaultValue: 'Click me',
			name: 'label',
		},
		variant: {
			description: 'Вариант внешнего вида кнопки',
			control: {
				type: 'radio',
			},
			options: ['delete', 'primary'],
			defaultValue: 'primary',
		},
		type: {
			description: 'Вариант типа кнопки',
			control: {
				type: 'radio',
			},
			options: ['button', 'submit'],
			defaultValue: 'button',
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
}

export const Delete = Template.bind({})
Delete.args = {
	variant: 'delete',
}
