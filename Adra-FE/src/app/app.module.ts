import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UploadSummaryComponent } from './upload-summary/upload-summary.component';
import { UploadComponent } from './upload/upload.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';
import { ReportComponent } from './report/report.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ReportExistsConfirmationDialogComponent } from './dialog-components';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    UploadSummaryComponent,
    UploadComponent,
    ViewBalanceComponent,
    ReportComponent,
    ReportExistsConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    GoogleChartsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
