import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

export function clickOutside(node: HTMLElement): { destroy?: () => void } {
	const handleClick = () => closeAllMenus();
	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
