import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { AjoutImageComponent } from './ajout-image/ajout-image.component';

const routes: Routes = [
  {path: "",component:ImagesComponent },
  {path:"add", component:AjoutImageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
