import { writable } from 'svelte/store';
import type { Writable } from 'svelte/types/runtime/store';

export const language: Writable<string> = writable('en');


export const setLanguage = (lang: string): void => {
	language.update(() => lang);
}