export interface Participant {
    id: number,
    firstName: string,
    lastName: string,
    sex: 'M' | 'F',
    bibNumber: number,
    rank: number,
    time?: number,
    jumpRope?: number,
    benchPress?: number,
    situps?: number
}
