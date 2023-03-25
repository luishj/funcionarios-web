
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionariosApi } from 'src/app/api/funcionarios.api';
import { RotasConstant } from 'src/app/constants/rotas.constant';
import { FuncionarioDTO } from 'src/app/models/funcionario.dto';



@Component({
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    // @ts-ignore
    formCliente: FormGroup;
    constructor(private formBuilder: FormBuilder, private funcionarioApi: FuncionariosApi, private router: Router) { }

    ngOnInit() {
        this.formCliente = this.formBuilder.group({
            nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
            numDep: [0, [Validators.required]],
            salario: [0, [Validators.required]],
            nascimento: ['', [Validators.required]],
        });
    }


    onSubmit() {
        if (this.formCliente.valid) {
            var funcionario = this.formCliente.value;
            this.funcionarioApi.salvar(new FuncionarioDTO(funcionario.nome, funcionario.numDep, funcionario.salario, funcionario.nascimento)).subscribe(retorno => {
                this.voltar();
            });
        } else {
            alert('Dados invalidos')
        }
    }
    voltar() {
        this.router.navigate([RotasConstant.LISTAGEM]);
    }

}
