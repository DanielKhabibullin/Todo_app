export const generateRandomId = (): string =>
	Math.random().toString(16).substring(2, 8) + Date.now().toString().substring(9);
