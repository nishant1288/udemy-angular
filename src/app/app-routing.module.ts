import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectiveToggleModeComponent } from './directive-toggle-mode/directive-toggle-mode.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

const routes: Routes = [
  {
    path: '',
    component: EventBindingComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'directive-mode',
    component: DirectiveToggleModeComponent
  },
  {
    path : 'ngStyle',
    component : NgStyleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
