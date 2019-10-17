import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/providers/navbar.service';
import { PagamentoService } from 'src/app/providers/pagamento.service';
import { PagamentoModel } from 'src/app/models/pagamento';
import { formatDate } from '@angular/common';

// create by wsLima on 2019/08
// contact: kennedy.wsLima@gmail.com

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {


  listPagamentos = new Array<PagamentoModel>();
  pagamento: PagamentoModel;

  totalRecords = '';
  cols:any[];
  dataInital: Date;
  dataFinal: Date;

  dtInital: any;
  dtFinal: any;

  constructor(
    private navbarService: NavbarService,
    private pagamentoService: PagamentoService
  ) { 
    this.dtInital = this.getFirstDay();
    this.dtFinal = this.getLastDay();
  }

  ngOnInit() {
    this.navbarService.setTitle('Pagamentos'); // Adciona o titulo da pagina

    this.cols = [
      { field: 'protocolo', header: 'Protocolo' },
      { field: 'nome', header: 'Nome' },
      { field: 'valorPagamento', header: 'Pagamentos' },
      { field: 'dataPagamento', header: 'Último Pagamento' }
    ];

    this.getListPagamentos();
  }

  buscar(){

    this.dtInital = this.formatLocalDate(this.dataInital);
    this.dtFinal = this.formatLocalDate(this.dataFinal);

    this.getListPagamentos();
    
  }

  private getListPagamentos() { // consulta lista de pagamentos

    this.listPagamentos = [];

    var format = 'dd/MM/yyyy';

    this.pagamentoService.getListPagamentos(this.formatLocalDate(this.dtInital), this.formatLocalDate(this.dtFinal)).then((response) => {
           
        response.forEach(e => {
          this.pagamento = new PagamentoModel();
          let dataPagamento = formatDate(e.dataPagamento, format, 'en-US');
          
                
          
          this.pagamento.protocolo = e.protocolo;
          this.pagamento.nome = e.nome;
          this.pagamento.valorPagamento = 'R$ '+ (e.valorPagamento).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          this.pagamento.dataPagamento = dataPagamento;
          
          this.listPagamentos.push(this.pagamento);
          
  
        });
        
    }).catch((error) => {
      console.log('Erro ao chamar lista de pagamentos: ', error);

    })
  }

  getFirstDay(){
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return this.formatLocalDate(firstDay);

  }

  getLastDay(){
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return this.formatLocalDate(lastDay);

  }

  formatLocalDate(date){
    var format = 'yyyy-MM-dd';    
    return formatDate(date, format, 'en-US')
  }

}
