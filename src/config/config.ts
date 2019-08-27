
import { environment } from '../environments/environment';

export const apiConfig = {
    "devlocal": {
      "EnvironmentConfig": {
        "API": `${environment.domainAging}`,
        "UNHANDLED_REJECTIONS": true
      }
    },
    "staging": {
      "EnvironmentConfig": {
        "API": `${environment.domainAging}`,
        "UNHANDLED_REJECTIONS": false,
      }
    },
    "prod": {
      "EnvironmentConfig": {
        "API": `${environment.domainAging}`,
        "UNHANDLED_REJECTIONS": false,
      }
    }
};
