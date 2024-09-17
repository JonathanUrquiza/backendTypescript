import {NewDiaryEntry, Visibility, Weather, } from './types'

const parseComment = (commentFromREquest: any):string => {
    if (!isString(commentFromREquest)) {
        throw new Error('Incorrect or missming comment')
    }
    return commentFromREquest
}


const parseDate = (dateFromRequest: any):string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error("Incorrect or missing date");
    }
     return dateFromRequest   
}

const parserWeather = (weatherFromRequest : any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error("Incorrect or missing weather");
    }
    return weatherFromRequest
}
        

const parseVisibility = (visibilityFromRequest: any) : Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error("Incorrect or missing visibility");
    }
    return visibilityFromRequest
}

const isWeather = (params:any) :boolean => {
    return Object.values(Weather).includes(params)
}


const isString = (string:string):boolean => {
   return typeof string === 'string'
} 

const isDate = (date:string): boolean => {
    return Boolean(Date.parse(date))
}

const isVisibility = (params:any) : boolean => {
    return Object.values(Visibility).includes(params)
}

const toNewDiaryEntry = (object:any):NewDiaryEntry => {
    const newEntry :NewDiaryEntry = {
        comment:parseComment(object.comment),
        date: parseDate(object.date),
        weather:parserWeather(object.weather),
        visibility :parseVisibility(object.visibility)
    }
    return newEntry
}
export default toNewDiaryEntry