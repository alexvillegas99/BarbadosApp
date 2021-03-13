import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./pages/jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'verdad-oreto',
    loadChildren: () => import('./pages/verdad-oreto/verdad-oreto.module').then( m => m.VerdadORetoPageModule)
  },
  {
    path: 'niveles',
    loadChildren: () => import('./pages/niveles/niveles.module').then( m => m.NivelesPageModule)
  },
  {
    path: 'piramide',
    loadChildren: () => import('./pages/piramide/piramide.module').then( m => m.PiramidePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modal-info-verdado-rero',
    loadChildren: () => import('./pages/modal-info-verdado-rero/modal-info-verdado-rero.module').then( m => m.ModalInfoVerdadoReroPageModule)
  },
  {
    path: 'modal-info-piramide',
    loadChildren: () => import('./pages/modal-info-piramide/modal-info-piramide.module').then( m => m.ModalInfoPiramidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
