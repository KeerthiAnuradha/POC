import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule } from '@angular/material/table';
import { Routing } from './app.routing';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { PatientListingComponent } from './patient-listing/patient-listing.component';
import { XhrInterceptor } from './XhrInterceptor';
import { PatientListingService} from './services/patient-listing.service';
import { DocumentComponent } from './document/document.component';
import { DocumentsService} from './documents.service';
import { DocumentStarsDirective } from './document-stars.v4';
import { HybridHelper } from './hybrid-helper';

const myDirectives = [
  DocumentStarsDirective
];

@NgModule({
  declarations: [
    AppComponent,
    PatientListingComponent,
    DocumentComponent,
    myDirectives
  ],
  entryComponents: [ DocumentComponent ],
  imports: [
    BrowserModule,
    Routing,
    UpgradeModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatTableModule,
  HttpClientModule,
  HttpModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    PatientListingService,
    DocumentsService],
  bootstrap: []
})
export class AppModule { 
  ngDoBootstrap() {}
}
