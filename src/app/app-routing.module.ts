import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule) },
  { path: 'views', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },
  { path: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
