export type Label = {
    id: number;
    selected?: boolean
}

export interface CardState {
    id: number,
    name: string,
    birth: string,
    composition: string,
    date: string,
    posology: string,
    therapist: string,
    desc: string
}