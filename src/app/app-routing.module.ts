import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sayfa1',
    loadChildren: () => import('./sayfa1/sayfa1.module').then( m => m.Sayfa1PageModule)
  },
  {
    path: 'sayfa2',
    loadChildren: () => import('./sayfa2/sayfa2.module').then( m => m.Sayfa2PageModule)
  },
  {
    path: 'sayfa3',
    loadChildren: () => import('./sayfa3/sayfa3.module').then( m => m.Sayfa3PageModule)
  },
  {
    path: 'sayfa4',
    loadChildren: () => import('./sayfa4/sayfa4.module').then( m => m.Sayfa4PageModule)
  },
  {
    path: 'sayfa5',
    loadChildren: () => import('./sayfa5/sayfa5.module').then( m => m.Sayfa5PageModule)
  },
  {
    path: 'sayfa6',
    loadChildren: () => import('./sayfa6/sayfa6.module').then( m => m.Sayfa6PageModule)
  },
  {
    path: 'sayfa7',
    loadChildren: () => import('./sayfa7/sayfa7.module').then( m => m.Sayfa7PageModule)
  },
  {
    path: 'sayfa8',
    loadChildren: () => import('./sayfa8/sayfa8.module').then( m => m.Sayfa8PageModule)
  },
  {
    path: 'sayfa9',
    loadChildren: () => import('./sayfa9/sayfa9.module').then( m => m.Sayfa9PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./sayfa10/sayfa10.module').then( m => m.Sayfa10PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
