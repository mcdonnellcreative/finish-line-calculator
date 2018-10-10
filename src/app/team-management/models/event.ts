import {Team} from "./team";

export interface Event {
    id: number,
    eventDate: number,
    eventTitle: string,
    teams: Team[]
}
