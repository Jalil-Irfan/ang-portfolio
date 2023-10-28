import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private name: string = '';

  constructor() { }

  getName(): string {
    return this.name;
  }

  addName(item: any): void {
    console.log("Service file called - addName ",item);
    this.name = item;
  }
}
