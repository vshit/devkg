import { BaseApiService } from './api'

export class ReadOnlyApiService extends BaseApiService {
	constructor(resource) {
		super(resource)
	}

	async fetch(params = '', config = {}) {
		try {
			const response = await fetch(`${this.getUrl()}?${params}`, config)
			const data = await response.json()
			return data
		} catch (error) {
			this.handleErrors(error)
		}
	}

	async getBySlug(slug) {
		try {
			if (!slug) {
				return console.log('slug isn`t provided')
			}
			const response = await this.fetch(`slug=${slug}`)
			return await response
		} catch (error) {
			this.handleErrors(error)
		}
	}
}
