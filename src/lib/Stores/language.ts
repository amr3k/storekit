import { writable } from 'svelte/store';
import { browser } from '$app/env';

import type { Writable } from 'svelte/types/runtime/store';

const languageLocalStorage = browser && localStorage.getItem('language');

export const language: Writable<string> = writable(languageLocalStorage || 'en');

language.subscribe((value) => {
	if (browser) {
		return localStorage.setItem('language', value);
	}
});

export const setLanguage = (lang: string): void => {
	language.set(lang);
};
