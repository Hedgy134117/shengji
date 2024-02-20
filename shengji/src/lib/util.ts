export function scoreToString(val: number): string | null | undefined {
	if (val <= 10) {
		return val.toString();
	}
	if (val <= 13) {
		return { 11: 'J', 12: 'Q', 13: 'K' }[val];
	}
	return null;
}
