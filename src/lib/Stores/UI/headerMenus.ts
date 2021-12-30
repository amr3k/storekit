import type { Writable } from 'svelte/types/runtime/store';
import { writable } from 'svelte/store';

export const accountHeaderMenu: Writable<boolean> = writable(false);
export const sidebarHeaderMenu: Writable<boolean> = writable(false);
export const cartHeaderMenu: Writable<boolean> = writable(false);
export const languageHeaderMenu: Writable<boolean> = writable(false);
export const searchHeaderMenu: Writable<boolean> = writable(false);

export const closeAllHeaderMenus = (): void => {
	accountHeaderMenu.update(() => false);
	sidebarHeaderMenu.update(() => false);
	cartHeaderMenu.update(() => false);
	languageHeaderMenu.update(() => false);
	searchHeaderMenu.update(() => false);
};
