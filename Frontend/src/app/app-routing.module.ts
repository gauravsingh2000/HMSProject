import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FeedbackComponent} from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsignupComponent } from './patient/patientsignup/patientsignup.component';
import { PatientsListComponent } from './patientslist/patientslist.component';
import { DoctorsignupComponent } from './doctor/doctorsignup/doctorsignup.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminmainpageComponent } from './admin/adminmainpage/adminmainpage.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorListComponent } from './doctorlist/doctorlist.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentlistComponent } from './appointmentlist/appointmentlist.component';
import { DischargedpatientComponent } from './dischargedpatient/dischargedpatient.component';
import { DischargedpatientlistComponent } from './dischargedpatientlist/dischargedpatientlist.component';
import { DisplaylistComponent } from './displaylist/displaylist.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DisplayfeedbackComponent } from './displayfeedback/displayfeedback.component';
import { DoctorRouteGuard } from './doctor-route.guard';
import { AdminRouteGuard } from './admin-route.guard';
import { PatientRouteGuard } from './patient-route.guard';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"admin", component:AdminComponent},
  {path:"doctor", component:DoctorComponent },
  // canActivate:[DoctorRouteGuard]

  {path:"patient", component:PatientComponent},
  {path:"about", component:AboutComponent},
  {path:"feedback", component:FeedbackComponent},
  {path:"patienthomepage", component:PatienthomepageComponent,
  canActivate:[PatientRouteGuard]},
 {path:"appointment",component:AppointmentComponent },
 {path:"invoice", component:InvoiceComponent },
 {path:"adminmainpage", component:AdminmainpageComponent,
 canActivate:[AdminRouteGuard]},
   {path:"patientslist", component:PatientsListComponent},
  {path:"doctorslist", component:DoctorListComponent},
  {path:"doctorsignup", component:DoctorsignupComponent},
  {path:"patientsignup", component:PatientsignupComponent},
  {path:"", component:HomeComponent},
  {path:"doctor-home", component:DoctorHomeComponent,
  canActivate:[DoctorRouteGuard]},
  {path:"update-doctor/:d_id",component:UpdateDoctorComponent},
  {path:"contact",component:ContactComponent},
  {path:"appointmentslist",component:AppointmentlistComponent},
 {path:"dischargedpatient",component:DischargedpatientComponent},
 {path:"dischargedpatientlist",component:DischargedpatientlistComponent},
 {path:"displaylist",component:DisplaylistComponent},
 {path:'registration',component:RegistrationComponent},
 {path:"doctordetails/:d_id",component:DoctordetailsComponent},
 {path:"displayfeedback",component:DisplayfeedbackComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
