import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { FormsModule } from '@angular/forms';



import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';

import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OpenComponent } from './components/open/open.component';
import { WipComponent } from './components/wip/wip.component';
import { EsclatedComponent } from './components/esclated/esclated.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
// import { ViewDetailsComponent } from '../components/view-details/view-details.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AddLocationsComponent } from './components/add-locations/add-locations.component';
import { LocationsComponent } from './components/locations/locations.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { DeletePopUpMessageComponent } from './components/delete-pop-up-message/delete-pop-up-message.component';
import { ServiceTypeComponent } from './components/service-type/service-type.component';
import { ProblemTypeComponent } from './components/problem-type/problem-type.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';



@NgModule({
  declarations: [
    AdminComponent,
    Footer1Component,
    FooterComponent,
    DashboardComponent,
    RegistrationComponent,
    LogoutComponent,
    OpenComponent,
    WipComponent,
    EsclatedComponent,
    ResolvedComponent,

    AdduserComponent,
    CustomerDetailsComponent,
    UpdateUserComponent,
    PopupMessageComponent,
    MyProfileComponent,
    AddLocationsComponent,
    LocationsComponent,
    UpdateLocationComponent,
    DeletePopUpMessageComponent,
    ServiceTypeComponent,
    ProblemTypeComponent,
    AddServiceComponent,
    AddProblemComponent


  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
