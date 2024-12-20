import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';


const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"menu",component:MenuComponent
  },{
    path:"displayinfo",component:DisplayinfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
