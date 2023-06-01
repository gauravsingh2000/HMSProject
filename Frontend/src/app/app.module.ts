import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorsignupComponent } from './doctor/doctorsignup/doctorsignup.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsignupComponent } from './patient/patientsignup/patientsignup.component';
import { AdminmainpageComponent } from './admin/adminmainpage/adminmainpage.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PopupComponent } from './doctor/popup/popup.component';
import { DoctorListComponent } from './doctorlist/doctorlist.component';
import { PatientsListComponent } from './patientslist/patientslist.component';
import { FormsModule } from '@angular/forms';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorSignUpService } from './services/doctorsignup.service';
import { AdminService } from './services/admin.service';
import { DoctorLoginService } from './services/doctorlogin.service';
import { DeletedComponent } from './deleted/deleted.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { DeleteaComponent } from './deletea/deletea.component';
import { DischargedpatientComponent } from './dischargedpatient/dischargedpatient.component';
import { DischargedpatientlistComponent } from './dischargedpatientlist/dischargedpatientlist.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DisplayfeedbackComponent } from './displayfeedback/displayfeedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FeedbackComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    DoctorComponent,
    DoctorsignupComponent,
    PatientComponent,
    PatientsignupComponent,
    AdminmainpageComponent,
    AppointmentComponent,
    PatienthomepageComponent,
    InvoiceComponent,
    PopupComponent,
    DoctorListComponent,
    PatientsListComponent,
    DoctorHomeComponent,
    DeletedComponent,
    UpdateDoctorComponent,
    ContactComponent,
    AppointmentlistComponent,
    DeleteaComponent,
    DischargedpatientComponent,
    DischargedpatientlistComponent,
    DisplaylistComponent,
    RegistrationComponent,
    DoctordetailsComponent,
    DisplayfeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [DoctorSignUpService, AdminService, DoctorLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
