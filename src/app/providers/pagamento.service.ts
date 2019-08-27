import { Injectable } from '@angular/core';
import { RoutesModel } from '../models/routes.model';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private request: RequestsService) { }

  private routes = new RoutesModel();


  public getListPagamentos() {
    return this.request.get(this.routes.getListPagamentos()).toPromise();
  }

}
