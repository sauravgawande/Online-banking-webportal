import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsComponent } from './complaints/complaints.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistercomplaintComponent } from './registercomplaint/registercomplaint.component';
import { ResolvedComponent } from './resolved/resolved.component';
import { TrackcomplaintComponent } from './trackcomplaint/trackcomplaint.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: 'profile',
        component: MyProfileComponent
      },
      {
        path: 'complaints',
        component: ComplaintsComponent
      },
      {
        path: 'raise',
        component: RegistercomplaintComponent
      },
      {
        path: 'track',
        component: TrackcomplaintComponent
      },
      {
        path: 'resolved',
        component: ResolvedComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },

    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
