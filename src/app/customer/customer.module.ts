import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { RegistercomplaintComponent } from './registercomplaint/registercomplaint.component';
import { TrackcomplaintComponent } from './trackcomplaint/trackcomplaint.component';
import { LogoutComponent } from './logout/logout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ResolvedComponent } from './resolved/resolved.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PopupMessageComponent } from './popup-message/popup-message.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ComplaintsComponent,
    RegistercomplaintComponent,
    TrackcomplaintComponent,
    LogoutComponent,
    ResolvedComponent,
    MyProfileComponent,
    PopupMessageComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CustomerRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
   
   
  ]
})
export class CustomerModule { }
