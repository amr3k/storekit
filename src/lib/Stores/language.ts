import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { Writable } from 'svelte/types/runtime/store';

export const language: Writable<string> = writable(
	(browser && localStorage.getItem('language')) || 'en'
);

language.subscribe((value) => {
	if (browser) {
		return localStorage.setItem('language', value);
	}
});

export const setLanguage = (lang: string): void => {
	language.set(lang);
};
