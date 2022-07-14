import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Input } from './Input'

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		placeholder: {
			description: 'Placeholder инпута',
			type: 'string',
			defaultValue: 'Search something',
			name: 'placeholder',
		},
		type: {
			description: 'Тип инпута',
			control: {
				type: 'radio',
			},
			options: ['text', 'password'],
			defaultValue: 'text',
		},
		name: {
			description: 'Имя инпута',
			type: 'string',
			defaultValue: '',
		},
		value: {
			description: 'Введённое значение инпута',
			type: 'string',
			defaultValue: '',
		},
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
	type: 'text',
}
