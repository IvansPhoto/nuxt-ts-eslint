import { IContentDocument } from '@nuxt/content/types/content'

export default interface IBlogPost extends IContentDocument {
	title: string;
	description: string;
}
