
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FuncionariosApi } from 'src/app/api/funcionarios.api';
import { RotasConstant } from 'src/app/constants/rotas.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';




@Component({
    templateUrl: './listagem.component.html',
    styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {


    constructor() { }

    ngOnInit() {

    }


}
