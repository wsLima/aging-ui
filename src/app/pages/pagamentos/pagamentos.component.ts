import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/providers/navbar.service';
import { PagamentoService } from 'src/app/providers/pagamento.service';
import { PagamentoModel } from 'src/app/models/pagamento';

// create by wsLima on 2019/08
// contact: kennedy.wsLima@gmail.com

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {


  public listPagamentos = new Array<PagamentoModel>();


  constructor(
    private navbarService: NavbarService,
    private pagamentoService: PagamentoService
  ) { }

  ngOnInit() {
    this.navbarService.setTitle('Pagamentos'); // Adciona o titulo da pagina

    this.getListPagamentos();
  }

  private getListPagamentos() { // consulta lista de pagamentos
    this.pagamentoService.getListPagamentos().then((data) => {
      this.listPagamentos = data.content;
    }).catch((error) => {
      console.log('Erro ao chamar lista de pagamentos: ', error);

    })
  }

}
