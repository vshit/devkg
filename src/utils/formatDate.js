export const getFormattedDate = (dateString) => {
	const date = new Date(dateString)

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}

	const formatter = new Intl.DateTimeFormat('ru-RU', options)
	return formatter.format(date)
}

export const getFormattedTime = (dateString) => {
	const date = new Date(dateString)

	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')

	return `${hours}:${minutes}`
}
