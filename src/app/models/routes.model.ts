import { apiConfig } from '../../config/config';

export class RoutesModel {


    constructor() {
    }

    // ROTAS DE BENEFICIARIOS
    public getListBeneficiarios(dtInitial, dtFinal) {
        console.log(apiConfig.devlocal.EnvironmentConfig.API);
        
        return apiConfig.devlocal.EnvironmentConfig.API + '/beneficiarios?dtInitial='+dtInitial+'&dtFinal='+dtFinal;
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