import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Slide3dComponent } from './slide3d/slide3d.component';

const routes: Routes = [
  //{ path: '', component: IntroComponent },
  { path: '3d', component: Slide3dComponent, data: { history: null } },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
