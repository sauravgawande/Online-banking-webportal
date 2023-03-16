import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ManagerComponent } from './components/manager/manager.component';
import { DemoComponent } from './components/login/demo.component';
// import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { MatCardModule } from '@angular/material/card';
// import { AssignEngineerComponent } from './components/assign-engineer/assign-engineer.component';
import { HeaderComponent } from './components/header/header.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { CustomerComponent } from './components/customer/customer.component';
// import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { EngineerComponent } from './components/engineer/engineer.component';
// import { DialogComponent } from './components/dialog/dialog.component';
// import { AssignFieldWorkerComponent } from './components/assign-field-worker/assign-field-worker.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AllComplainsComponent } from './Manager/all-complains/all-complains.component';
import { AssignEngineerComponent } from './Manager/assign-engineer/assign-engineer.component';
import { DashboardComponent } from './Manager/dashboard/dashboard.component';
import { MyProfileComponent } from './Manager/my-profile/my-profile.component';
import { UnAssignComplainsComponent } from './Manager/un-assign-complains/un-assign-complains.component';
import { ViewDetailsComponent } from './Manager/view-details/view-details.component';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EngineerMainComponent } from './Engineer/engineer-main/engineer-main.component';
import { EngineerTableComponent } from './Engineer/engineer-table/engineer-table.component';
import { EscalatedTableComponent } from './Engineer/escalated-table/escalated-table.component';
import { OpenTableComponent } from './Engineer/open-table/open-table.component';
import { ResolvedTableComponent } from './Engineer/resolved-table/resolved-table.component';
import { EngProfileComponent } from './Engineer/eng-profile/eng-profile.component';
// import { ViewDetailsComponent } from './Engineer/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComplainsComponent,
    AssignEngineerComponent,
    DashboardComponent,
    DemoComponent,
    DashboardComponent,
    MyProfileComponent,
    UnAssignComplainsComponent,
    ViewDetailsComponent,
    PopupMessageComponent,
    // AssignEngineerComponent,
    HeaderComponent,
    Footer1Component,
    EngineerMainComponent,
    EngineerTableComponent,
    EscalatedTableComponent,
    OpenTableComponent,
    ResolvedTableComponent,
    EngProfileComponent,

    // CustomerComponent,
    // CustomerTableComponent,
    // EngineerComponent,
    // DialogComponent,
    // // RadioComponent,
    // AssignFieldWorkerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    MatDividerModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    AngularEditorModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
