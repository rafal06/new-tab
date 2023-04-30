// It's a webextensions API, so we need to tell TS to shut up about it
declare const browser: any;

export type Link = {
	title: string;
	url: string;
	icon: string;
};
