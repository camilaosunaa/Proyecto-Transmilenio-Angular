import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConductorComponent } from './conductor/conductor.component';

export const routes: Routes = [
  { path: 'conductor', component: ConductorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
