export function choice(items) {
	return items[Math.floor(Math.random() * items.length)];
}

export function remove(items, item) {
	const index = items.indexOf(item);
	if (index > -1) {
		const toBeRemoved = items[index];
		items.splice(index, 1);
		return toBeRemoved;
	} else return undefined;
}
