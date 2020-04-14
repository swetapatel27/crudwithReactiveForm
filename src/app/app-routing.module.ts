import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudComponent}from'./addstud/addstud.component';
import { DisplayStudentComponent } from './display-student/display-student.component';

const routes: Routes = [{
  path: 'addstud', component: AddstudComponent},
  {path:'addstud/:data',component:AddstudComponent},
  {path:'studs',component:DisplayStudentComponent},
  {path:'',redirectTo:'studs',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
