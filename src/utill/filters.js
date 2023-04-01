export function formatDate(value) {
	console.log('2');
	const fillterDate = new Date(value);
	return fillterDate.toISOString().split('T')[0];
	// return new Date(value);
}
