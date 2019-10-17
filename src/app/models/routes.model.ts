import { apiConfig } from '../../config/config';

export class RoutesModel {


    constructor() {
    }

    // ROTAS DE BENEFICIARIOS
    public getListBeneficiarios() {        
        return apiConfig.devlocal.EnvironmentConfig.API + '/beneficiarios';
    }

    // ROTAS DE PAGAMANTO
    public getListPagamentos(dtInitial, dtFinal) {
        return apiConfig.devlocal.EnvironmentConfig.API + '/pagamentos?dtInitial='+dtInitial+'&dtFinal='+dtFinal;
    }

    // ROTAS DE SAQUES
    public getListSaques(dtInitial, dtFinal) {        
        return apiConfig.devlocal.EnvironmentConfig.API + '/saques?dtInitial='+dtInitial+'&dtFinal='+dtFinal;
    }



}