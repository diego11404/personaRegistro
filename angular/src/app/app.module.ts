import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AddPersonaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
