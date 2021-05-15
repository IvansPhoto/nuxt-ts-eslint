import { IContentDocument } from '@nuxt/content/types/content'

export default interface IJob extends IContentDocument {
	Id: number,
	Company: string,
	Start: string,
	End: string,
	Location: string,
	Position: string,
	ShortDescription: string,
	Responsibilities: string
};
