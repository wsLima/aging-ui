import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { RoutesModel } from '../models/routes.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {

  constructor(private request: RequestsService) { }

  private routes = new RoutesModel();


  public getListBeneficiarios() {
    // console.log(this.routes.getListBeneficiarios());
    
    return this.request.get(this.routes.getListBeneficiarios()).toPromise();
  }

}
