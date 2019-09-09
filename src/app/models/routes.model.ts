import { apiConfig } from '../../config/config';

export class RoutesModel {


    constructor() {
    }

    // ROTAS DE BENEFICIARIOS
    public getListBeneficiarios() {
        console.log(apiConfig.devlocal.EnvironmentConfig.API);
        
        return apiConfig.devlocal.EnvironmentConfig.API + '/beneficiarios';
    }

    // ROTAS DE PAGAMANTO
    public getListPagamentos() {
        return apiConfig.devlocal.EnvironmentConfig.API + '/pagamentos';
    }

    // ROTAS DE SAQUES
    public getListSaques(dtInitial, dtFinal) {        
        return apiConfig.devlocal.EnvironmentConfig.API + '/saques/'+dtInitial+'/'+dtFinal;
    }



}