export type Rank = number;

export interface PlayerState {
    rank: Rank;
    prestige: number;
    onStage: boolean;
}

export interface ShengjiGame {
    gameNum: number;
    winningTeam: string[];
    losingTeam: string[];
    winTier: 1 | 2 | 3;
    stateAfter: Record<string, PlayerState>
}

export interface ShengjiSession {
    id: string;
    seasonId: string;
    date: Date;
    players: string[];
    games: ShengjiGame[];
}

export interface Player {
    id: string;
    name: string;
    joinDate: Date;
}

export interface Season {
    id: string;
    name: string;
    startDate: Date;
    endDate?: Date;
    isActive: boolean;
}