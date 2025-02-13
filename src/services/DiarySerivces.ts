import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json"

const diaries : DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findByid = (id:Number) : NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id == id)
    if (entry != null) {
        const {comment, ... restOfDiary} = entry
        return restOfDiary
    }
    return undefined
}
    
    

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility, comment}) =>{
        return {
         id,
         date,
         weather,
         visibility,
         comment
        }
    })

}

export const addDiary = (newDiaryEntry:NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id:Math.max(...diaries.map(d => d.id)) +1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}