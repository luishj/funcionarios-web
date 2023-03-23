
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotasConstant } from 'src/app/constants/rotas.constant';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RotasConstant.LISTAGEM
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
