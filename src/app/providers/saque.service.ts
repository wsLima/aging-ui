import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { RoutesModel } from '../models/routes.model';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {

  constructor(private request: RequestsService) { }

  private routes = new RoutesModel();


  public getListSaques(dtInitial, dtFinal) {
     return this.request.get(this.routes.getListSaques(dtInitial,dtFinal)).toPromise();
  }
  
}
