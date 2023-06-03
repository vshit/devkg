export function getSalary(job) {
	if (job.salary === 'unpaid') {
		return 'Неоплачиваемая'
	}

	let result = ''

	if (job.price_from) {
		result += `От ${job.price_from} ${getCurrency(job.currency)} `
	}

	if (job.price_to) {
		result += `До ${job.price_to} ${getCurrency(job.currency)} `
	}

	result += `в ${getSalaryTime(job.salary)}`

	return result
}

function getCurrency(currency) {
	switch (currency) {
		case 'kgs':
			return 'сом'
		case 'usd':
			return '$'
		case 'rub':
			return '₽'
		case 'eur':
			return 'Є'

		default:
			return ''
	}
}

function getSalaryTime(salary) {
	switch (salary) {
		case 'monthly':
			return 'месяц'
		case 'daily':
			return 'день'
		case 'hourly':
			return 'час'
		case 'yearly':
			return 'год'

		default:
			return ''
	}
}
