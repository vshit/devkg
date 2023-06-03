export class BaseApiService {
	baseUrl = 'https://devkg.com/api'
	resource

	constructor(resource) {
		if (!resource) throw new Error('Resource is not provided')
		this.resource = resource
	}

	getUrl(id = '') {
		if (!id) {
			return `${this.baseUrl}/${this.resource}`
		}

		return `${this.baseUrl}/${this.resource}/${id}`
	}

	handleErrors(error) {
		console.log({ message: 'Api Error', error })
	}
}
