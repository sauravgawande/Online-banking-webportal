import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationsComponent } from './components/add-locations/add-locations.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EsclatedComponent } from './components/esclated/esclated.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { OpenComponent } from './components/open/open.component';
import { ProblemTypeComponent } from './components/problem-type/problem-type.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { WipComponent } from './components/wip/wip.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [

      {
        path: 'Dashboard',
        component: DashboardComponent
      },
      {
        path:'serviceType',
        component:ServiceTypeComponent
      },
      {
        path:'addService',
        component:AddServiceComponent
      },
      {
        path:'problemType',
        component:ProblemTypeComponent
      },
      {
        path:'addProblem',
        component:AddProblemComponent
      },

      {
        path: 'Registration',
        component: RegistrationComponent
      },
      {
        path: 'Logout',
        component: LogoutComponent
      },

      {
        path: 'open',
        component: OpenComponent
      },

      {
        path: 'wip',
        component: WipComponent
      },

      {
        path: 'esclated',
        component: EsclatedComponent
      },

      {
        path: 'resolved',
        component: ResolvedComponent
      },

      {
        path: 'adduser',
        component: AdduserComponent
      },
      {
        path:'update/:id',
        component:UpdateUserComponent
      },
      {
        path:'updateLocation/:id',
        component:UpdateLocationComponent
      },
      {
        path:'myProfile',
        component:MyProfileComponent
      },
      {
        path:'location',
        component:LocationsComponent
      },
      {
        path:'addLocation',
        component:AddLocationsComponent
      }


    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
