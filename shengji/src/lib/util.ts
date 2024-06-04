import { Game } from './Game';
import { PlayerList } from './PlayerList';

export function scoreToString(val: number): string | null | undefined {
	if (val <= 10) {
		return val.toString();
	}
	if (val <= 13) {
		return { 11: 'J', 12: 'Q', 13: 'K' }[val];
	}
	return null;
}

export function addTestPlayer(start: number, prestige: number, extra: number) {
	let player = PlayerList.addPlayer('abc', 'TestPlayer', start);
	for (let i = start - 2; i <= start - 2 + 12 * prestige + extra; i++) {
		let game = new Game(new Date(), [player], [(i % 12) + 2], [true]);
		player.addGame(game);
	}
}

export function downloadFile(data: any, name: string) {
	// https://www.jameslmilner.com/posts/downloading-a-file-with-javascript/
	let res = JSON.stringify(data, null, "\t");
	let blob = new Blob([res], { type: 'application/json' });
	let jsonObjectUrl = URL.createObjectURL(blob);

	let filename = `${name}.json`;
	let anchor = document.createElement('a');
	anchor.href = jsonObjectUrl;
	anchor.download = filename;

	anchor.click();
	URL.revokeObjectURL(jsonObjectUrl);
	anchor.remove();
}