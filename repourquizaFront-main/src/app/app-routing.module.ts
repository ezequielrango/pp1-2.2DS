import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProjectsComponent } from './Project/get-projects/get-projects.component';
import { SaveProjectComponent } from './Project/save-project/save-project.component';

const routes: Routes = [
  {path:'listProjects', component: GetProjectsComponent},
  {path:'saveProject', component: SaveProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
