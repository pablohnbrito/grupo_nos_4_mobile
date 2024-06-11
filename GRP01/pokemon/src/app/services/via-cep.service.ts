import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root',
})
export class ViaCEPService {
    constructor(private httpClient: HttpClient){}
    getViaCEPService(cep: string = '01001000') {
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}
