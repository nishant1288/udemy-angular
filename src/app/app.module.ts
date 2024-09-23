import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectiveToggleModeComponent } from './directive-toggle-mode/directive-toggle-mode.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DirectivesComponent,
    EventBindingComponent,
    DirectiveToggleModeComponent,
    NgStyleComponent,
    NgContainerComponent,
    NgTemplateComponent,
    NgTemplateOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
