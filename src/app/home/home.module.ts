import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomePage } from './home.page'

import { IonicModule } from '@ionic/angular'

@NgModule({
  imports: [
  IonicModule,
  RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage],
  exports: [HomePage]
  })
export class HomePageModule {}
