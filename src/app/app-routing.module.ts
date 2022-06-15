import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PorjectAddComponent } from './components/porject-add/porject-add.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginGuard } from './guards/login.guard';

//Anasayfa boş olunca projectcomponent çalışacak
//Anasayfa üzerinde localhost devamında /projects içinde projectcomponent çalışacak.
const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProjectComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/category/:categoryId', component: ProjectComponent },
  {
    path: 'projects/add',
    component: PorjectAddComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
