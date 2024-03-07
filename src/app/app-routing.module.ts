import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IfNoticeComponent } from './if-notice/if-notice.component';
import { TechNoticeComponent } from './tech-notice/tech-notice.component';
import {VagasTiComponent} from './vagas-ti/vagas-ti.component'

const routes: Routes = [
  //direcionador de site
  { path: '',component:IfNoticeComponent},//se não encontrar nenhuma
  { path: 'if-notice',component:IfNoticeComponent},
  { path: 'tech-notice',component:TechNoticeComponent},
  {path:'vagas-ti',component:VagasTiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
