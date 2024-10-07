import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectiveToggleModeComponent } from './directive-toggle-mode/directive-toggle-mode.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { AftercontentinitComponent } from './aftercontentinit/aftercontentinit.component';
import { AftercontentcheckedComponent } from './aftercontentchecked/aftercontentchecked.component';

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
  },
  {
    path : 'ngContainer',
    component : NgContainerComponent
  },
  {
    path : 'ngTemplate',
    component : NgTemplateComponent
  },
  {
    path : 'ngTemplateOutlet',
    component : NgTemplateOutletComponent
  },
  {
    path : 'component-lifecyle',
    component : ComponentLifecycleComponent
  },
  {
    path : 'aftercontentinit',
    component : AftercontentinitComponent
  },
  {
    path : 'aftercontentchecked',
    component : AftercontentcheckedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
