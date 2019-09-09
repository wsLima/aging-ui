import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/core/navbar/navbar.component';
import { NavbarService } from 'src/app/providers/navbar.service';
import { SaqueModel } from 'src/app/models/saque';
import { SaqueService } from 'src/app/providers/saque.service';
import { formatDate, DatePipe } from '@angular/common';

// create by wsLima on 2019/08
// contact: kennedy.wsLima@gmail.com

@Component({
  selector: 'app-saques',
  templateUrl: './saques.component.html',
  styleUrls: ['./saques.component.css']
})
export class SaquesComponent implements OnInit {

  listSaques = new Array<SaqueModel>();
  saque: SaqueModel;

  totalRecords = '';
  cols: any[];
  dtInital;
  dtFinal;


  constructor(
    private navbarService: NavbarService,
    private saqueServise: SaqueService,
    private datepipe: DatePipe
  ) {
    this.getDateInitial();
    this.getDateInitial();
  }

  ngOnInit() {
    this.navbarService.setTitle('Saques'); //Adicina o titulo da pagina. 

    this.cols = [
      { field: 'protocolo', header: 'Protocolo' },
      { field: 'nome', header: 'Nome' },
      { field: 'valorSaque', header: 'Saques' },
      { field: 'dataSaque', header: 'Último Saque' },
      { field: 'descricao', header: 'Descrição' }

    ];

    this.getListSaques();
  }

  private getListSaques() { // consulta de saques

    var format = 'dd/MM/yyyy';

    this.saqueServise.getListSaques(this.dtInital, this.dtFinal).then((data) => {

      data.content.forEach(e => {
        this.saque = new SaqueModel();
        let dataSaque = e.dataSaque ? formatDate(e.dataSaque, format, 'en-US') : '';

        this.saque.protocolo = e.protocolo;
        this.saque.nome = e.nome;
        this.saque.valorSaque = 'R$ ' + (e.valorSaque).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.saque.descricao = e.descricao;
        this.saque.dataSaque = dataSaque;

        this.listSaques.push(this.saque);


      });
      this.totalRecords = data.totalElements;
    }).catch((error) => {
      console.log('Erro ao chamar a lista de saques: ', error);

    });

  }

  getDateInitial() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    
    this.dtInital = firstDay.getTime()
  }

  getDateFinal() {
    var date = new Date();
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      
    this.dtFinal = lastDay.getTime();
  }



}
