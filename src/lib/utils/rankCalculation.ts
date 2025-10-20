const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const MIN_RANK = 2;
const MAX_RANK = 13;

export function advanceRank(currentRank: number, gain: number): { rank: number, prestige: number } {
    let newRank = currentRank + gain;
    let prestige = 0;

    while (newRank > MAX_RANK) {
        newRank -= (MAX_RANK - MIN_RANK + 1);
        prestige++;
    }

    return { rank: newRank, prestige }
}

export function rankToString(rank: number): string {
    return RANKS[rank - MIN_RANK];
}

export function stringToRank(rank: string): number {
    return RANKS.indexOf(rank) + MIN_RANK;
}