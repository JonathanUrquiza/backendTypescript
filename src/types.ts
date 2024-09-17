export enum Weather {
    Sunny = 'Sunny',
    Rainy = 'Rainy',
    Cloudy = 'Cloudy',
    Windy = 'Windy',
    Stromy = 'Stromy'
    }

export enum Visibility {
    Great = 'Great',
    Good = 'Good',
    Ok = 'Ok',
    Poor = 'Poor'
}

//Los types se usan con las interface cuando necestias que se extiendan
export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}
//export type NonSensitiveInfoDiaryEntry = pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>//Para obtener algo de la interface mitiendo algunos tipos

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>