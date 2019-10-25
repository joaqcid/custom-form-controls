import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example001Component } from './examples/example001/example001.component';
import { Example002Component } from './examples/example002/example002.component';
import { FormsModule } from './modules/forms/forms.module';
import { Example003Component } from './examples/example003/example003.component';
import { FormControlsModule } from '@form-controls';

@NgModule({
  declarations: [
    AppComponent,
    Example001Component,
    Example002Component,
    Example003Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormControlsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
