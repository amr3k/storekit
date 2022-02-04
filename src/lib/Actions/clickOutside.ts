import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

export function clickOutside(node: HTMLElement): { destroy?: () => void } {
	const handleClick = () => closeAllMenus();
	node.title; // This is useless but I had to put it here to suppress the unused variable warning
	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
