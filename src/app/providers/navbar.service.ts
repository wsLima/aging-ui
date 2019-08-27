import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  private title: string;

  public getTitle(){
    return this.title;
  }

  public setTitle(str: string){
    this.title = str;
  }
}
