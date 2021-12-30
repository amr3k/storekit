import type { Writable } from 'svelte/types/runtime/store';
import { writable } from 'svelte/store';

export const account: Writable<boolean> = writable(false);
export const sidebar: Writable<boolean> = writable(false);
export const cart: Writable<boolean> = writable(false);
export const language: Writable<boolean> = writable(false);
export const search: Writable<boolean> = writable(false);

export const closeAll = (): void => {
	account.update(() => false);
	sidebar.update(() => false);
	cart.update(() => false);
	language.update(() => false);
	search.update(() => false);
};
