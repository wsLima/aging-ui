import { Component, OnInit } from "@angular/core";
import { NavbarService } from 'src/app/providers/navbar.service';
import { BeneficiarioService } from 'src/app/providers/beneficiario.service';
import { BeneficiarioModel } from 'src/app/models/beneficiario';
import { SearchFilters } from 'src/app/utils/searchFilters';
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

  filter = new SearchFilters();

  cols: any[];




  constructor(
    private navbarService: NavbarService,
    private beneficiarioService: BeneficiarioService
  ) { }

  ngOnInit() {

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
    this.navbarService.setTitle('Beneficiários');

    this.getListBeneficiarios();
  }

  private getListBeneficiarios() {
    var format = 'dd/MM/yyyy';
    this.beneficiarioService.getListBeneficiarios().then((data) => {
      data.content.forEach(e => {
        this.beneficiario = new BeneficiarioModel();
        let dataPagamento = formatDate(e.dataPagamento, format, 'en-US');
        let dataSaque = formatDate(e.dataSaque, format, 'en-US');
        let dataBase = e.dataBase ? formatDate(e.dataBase, format, 'en-US'): '';
              
        
        this.beneficiario.protocolo = e.protocolo;
        this.beneficiario.nome = e.nome;
        this.beneficiario.valorPagamento = 'R$ '+ e.valorPagamento;
        this.beneficiario.valorSaque = 'R$ '+ e.valorSaque;
        this.beneficiario.dataPagamento = dataPagamento;
        this.beneficiario.dataSaque = dataSaque;
        this.beneficiario.dataBase = dataBase;
        this.beneficiario.mes = e.mes;
        
        this.listBeneficiarios.push(this.beneficiario);
        

      });
      // this.listBeneficiarios = data.content;
      console.log(data);

    }).catch((error) => {
      console.log('Erro ao chamar a lista de beneficiários: ', error);

    })
  }


}
