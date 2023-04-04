import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TabsComponent } from './tabs/tabs.component'

@NgModule({
  imports: [
  RouterModule.forRoot([
    {
    path: '',
    component: TabsComponent,
    children: [
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
    },
    {
    path: 'home',
    loadChildren: () =>
    import('./home/home.module').then(m => m.HomePageModule)
    },
    {
    path: 'profile',
    loadChildren: () =>
    import('./profile/profile.module').then(m => m.ProfilePageModule)
    }
    ]
    }
    ])
  ],
  exports: [RouterModule]
  })
export class AppRoutingModule {}
