import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { mainReducer } from './store/main.reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PaginationComponent,
    ImagesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({ main: mainReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
      autoPause: true, 
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [
    // MatAutocompleteModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatPaginatorModule,
    // MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
