import { useState } from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue: string, validations: any) => {
	const [value, setValue] = useState(initialValue)
	const [isDerty, setIsDerty] = useState(false)
	const valid = useValidation(value, validations)

	const onChange = (e: any) => {
		setValue(e.target.value)
	}

	const onBlur = (e: any) => {
		setIsDerty(true)
	}

	return {
		value,
		onChange,
		onBlur,
		isDerty,
		...valid,
	}
}
