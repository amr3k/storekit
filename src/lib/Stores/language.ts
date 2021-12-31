import { writable } from 'svelte/store';
import type { Writable } from 'svelte/types/runtime/store';

const languageLocalStorage = localStorage.getItem('language') || 'en';

export const language: Writable<string> = writable(languageLocalStorage);

language.subscribe(value => {
	localStorage.setItem('language', value);
});

export const setLanguage = (lang: string): void => {
	language.set(lang);
}