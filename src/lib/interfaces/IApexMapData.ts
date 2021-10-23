export interface MapData {
    battle_royale: Arenas;
    arenas:        Arenas;
    ranked:        Ranked;
    arenasRanked:  Arenas;
}

export interface Arenas {
    current: ArenasCurrent;
    next:    ArenasNext;
}

export interface ArenasCurrent {
    start:              number;
    end:                number;
    readableDate_start: Date;
    readableDate_end:   Date;
    map:                string;
    code:               string;
    DurationInSecs:     number;
    DurationInMinutes:  number;
    asset:              string;
    remainingSecs:      number;
    remainingMins:      number;
    remainingTimer:     string;
}

export interface ArenasNext {
    start:              number;
    end:                number;
    readableDate_start: Date;
    readableDate_end:   Date;
    map:                string;
    code:               string;
    DurationInSecs:     number;
    DurationInMinutes:  number;
}

export interface Ranked {
    current: RankedCurrent;
    next:    RankedNext;
}

export interface RankedCurrent {
    map:   string;
    asset: string;
}

export interface RankedNext {
    map: string;
}
