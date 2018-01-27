import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitdetailsComponent } from './fruitdetails/fruitdetails.component';
import { ChosenletterComponent } from "./chosenletter/chosenletter.component";
import { FruitsatobComponent } from './fruitsatob/fruitsatob.component';

const routes: Routes = [
  { path: '', redirectTo: '/atoz', pathMatch: 'full' },
  {path: 'atoz', component: FruitsatobComponent},
  { path: 'list/:id', component: ChosenletterComponent},
  {path: 'details/:name', component: FruitdetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }