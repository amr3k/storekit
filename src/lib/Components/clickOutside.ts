import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

export function clickOutside(node) {
	const handleClick = (event?) => closeAllMenus();

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
