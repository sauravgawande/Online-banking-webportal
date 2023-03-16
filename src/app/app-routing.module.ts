import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { DemoComponent } from './components/login/demo.component';
import { DashboardComponent } from './Manager/dashboard/dashboard.component';
import { MyProfileComponent } from './Manager/my-profile/my-profile.component';
import { AllComplainsComponent } from './Manager/all-complains/all-complains.component';
import { UnAssignComplainsComponent } from './Manager/un-assign-complains/un-assign-complains.component';
import { EscalatedTableComponent } from './Engineer/escalated-table/escalated-table.component';
import { OpenTableComponent } from './Engineer/open-table/open-table.component';
import { EngineerTableComponent } from './Engineer/engineer-table/engineer-table.component';
import { ResolvedTableComponent } from './Engineer/resolved-table/resolved-table.component';
import { EngineerMainComponent } from './Engineer/engineer-main/engineer-main.component';
import { EngProfileComponent } from './Engineer/eng-profile/eng-profile.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
     canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'myprofile',
        component:MyProfileComponent
      },
      {
        path:'allcomplains',
        component:AllComplainsComponent
      },
      {
        path:'unassigncomplains',
        component:UnAssignComplainsComponent
      }
    ]
  },
  {
    path:'',
    component:DemoComponent
  },
  { 
    path:'customer',
    loadChildren:()=>
    import('../app/customer/customer.module').then((m)=>m.CustomerModule),
    canActivate:[AuthGuard]
  
  },
  {
    path: '',
    component: DemoComponent,
  },

  {
    path: 'Dashboard',
    pathMatch: 'full',
    redirectTo: 'Dashboard',
    // canActivate:[AuthGuard]
  },

  {
    path:'engineer',
    component:EngineerMainComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:"resolveComplaint",
        component:ResolvedTableComponent
      },
      {
        path:"allcomplaints",
        component:EngineerTableComponent
      },
      {
        path:"openComplaint",
        component:OpenTableComponent
      },
      {
        path:"escalatedComplaint",
        component:EscalatedTableComponent
      },
      {
        path:"profile",
        component:EngProfileComponent
      }
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
