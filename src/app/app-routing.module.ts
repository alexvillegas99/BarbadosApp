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
    path: 'traguito-caliente',
    loadChildren: () => import('./pages/traguito-caliente/traguito-caliente.module').then( m => m.TraguitoCalientePageModule)
  },
  {
    path: 'circulo',
    loadChildren: () => import('./pages/circulo/circulo.module').then( m => m.CirculoPageModule)
  },
  {
    path: 'modal-info',
    loadChildren: () => import('./pages/modal-info/modal-info.module').then( m => m.ModalInfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
