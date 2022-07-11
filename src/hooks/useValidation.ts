import { useEffect, useState } from 'react'

export const useValidation = (value: string, validations: any) => {
	const [isEmpty, setIsEmpty] = useState(true)
	const [minLenght, setMinLenght] = useState(true)
	const [maxLenght, setMaxLenght] = useState(true)

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLenght':
					value.length < validations[validation] ? setMinLenght(true) : setMinLenght(false)
					break
				case 'maxLenght':
					value.length > validations[validation] ? setMaxLenght(true) : setMaxLenght(false)
					break
				case 'isEmpty':
					value ? setIsEmpty(false) : setIsEmpty(true)
					break
			}
		}
	}, [value])

	return {
		isEmpty,
		minLenght,
		maxLenght,
	}
}
