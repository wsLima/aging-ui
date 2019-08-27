import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';
import { NavbarService } from 'src/app/providers/navbar.service';
import { SaqueModel } from 'src/app/models/saque';
import { SaqueService } from 'src/app/providers/saque.service';

// create by wsLima on 2019/08
// contact: kennedy.wsLima@gmail.com

@Component({
  selector: 'app-saques',
  templateUrl: './saques.component.html',
  styleUrls: ['./saques.component.css']
})
export class SaquesComponent implements OnInit {

  public listSaques = new Array<SaqueModel>();


  constructor(
    private navbarService: NavbarService,
    private saqueServise: SaqueService
  ) { }

  ngOnInit() {
    this.navbarService.setTitle('Saques'); //Adicina o titulo da pagina. 

    this.getListSaques();
  }

  private getListSaques() { // consulta de saques
    this.saqueServise.getListSaques().then((data) => {
      this.listSaques = data.content;
    }).catch((error) => {
      console.log('Erro ao chamar a lista de saques: ', error);

    });

  }

}
