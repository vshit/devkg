export function getWorkType(type) {
	switch (type) {
		case 'office':
			return 'Офис / Бишкек'
		case 'remote':
			return 'Удаленная работа'
		case 'internship':
			return 'Стажировка'
		case 'relocate':
			return 'Релокация'
		case 'project':
			return 'Проект'
		default:
			return ''
	}
}
