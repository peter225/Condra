import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  set(key:string, value:any):void{
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('error', error)
    }
  }

  get(key:string):any {
    try {
      return JSON.parse((localStorage.getItem(key))as string)
    } catch (error) {
      console.error('error', error)
      return null
    }
  }
}
