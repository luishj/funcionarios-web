import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { EndpointsConstant } from 'src/app/constants/endpoints.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';

@Injectable({ providedIn: 'root' })
export class FuncionariosApi {
    constructor(private http: HttpClient) { }




}
