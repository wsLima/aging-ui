import { Component, OnInit } from "@angular/core";
import { NavbarService } from 'src/app/providers/navbar.service';
import { BeneficiarioService } from 'src/app/providers/beneficiario.service';
import { BeneficiarioModel } from 'src/app/models/beneficiario';
import { formatDate } from "@angular/common";

// create by wsLima on 2019/08
// contact: kennedy.wsLima@gmail.com

@Component({
  selector: "app-beneficiarios",
  templateUrl: "./beneficiarios.component.html",
  styleUrls: ["./beneficiarios.component.css"]
})
export class BeneficiariosComponent implements OnInit {

  listBeneficiarios = new Array<BeneficiarioModel>();
  beneficiario: BeneficiarioModel;

  totalRecords = '';
  cols: any[];

  dtInital: any;
  dtFinal: any;




  constructor(
    private navbarService: NavbarService,
    private beneficiarioService: BeneficiarioService
  ) { 
    this.dtInital = this.getFirstDay();
    this.dtFinal = this.getLastDay();
  }

  ngOnInit() {

    this.navbarService.setTitle('Beneficiários');

    this.cols = [
      { field: 'protocolo', header: 'Protocolo' },
      { field: 'nome', header: 'Nome' },
      { field: 'valorPagamento', header: 'Pagamentos' },
      { field: 'valorSaque', header: 'Saques' },
      { field: 'saldo', header: 'Saldo' },
      { field: 'dataPagamento', header: 'Último Pagamento' },
      { field: 'dataSaque', header: 'Último Saque' },
      { field: 'dataBase', header: 'Data Base' },
      { field: 'mes', header: 'Meses' }

    ];
    

    this.getListBeneficiarios();
  }

  private getListBeneficiarios() {
    var format = 'dd/MM/yyyy';
    this.beneficiarioService.getListBeneficiarios(this.formatLocalDate(this.dtInital), this.formatLocalDate(this.dtFinal)).then((response) => {
      // console.log(data);
      
      response.forEach(e => {
        
        this.beneficiario = new BeneficiarioModel();
        let dataPagamento = e.dataPagamento ? formatDate(e.dataPagamento, format, 'en-US'): '';
        let dataSaque = e.dataSaque ? formatDate(e.dataSaque, format, 'en-US'): '';
        let dataBase = e.dataBase ? formatDate(e.dataBase, format, 'en-US'): '';
              
        
        this.beneficiario.protocolo = e.protocolo;
        this.beneficiario.nome = e.nome;
        this.beneficiario.valorPagamento = e.valorPagamento ? 'R$ '+ (e.valorPagamento).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'):'';
        this.beneficiario.valorSaque =  e.valorSaque ? 'R$ '+ (e.valorSaque).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'):'';
        this.beneficiario.dataPagamento = dataPagamento;
        this.beneficiario.dataSaque = dataSaque;
        this.beneficiario.saldo = e.saldo ? 'R$ '+ (e.saldo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'):'R$ 0';
        this.beneficiario.dataBase = dataBase;
        this.beneficiario.mes = e.meses ? e.meses:'0';
        
        this.listBeneficiarios.push(this.beneficiario);
        

      });

    }).catch((error) => {
      console.log('Erro ao chamar a lista de beneficiários: ', error);

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
