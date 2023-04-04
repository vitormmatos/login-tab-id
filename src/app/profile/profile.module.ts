import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ProfilePage } from './profile.page'

import { IonicModule } from '@ionic/angular'

@NgModule({
  imports: [
  IonicModule,
  CommonModule,
  RouterModule.forChild([{ path: '', component: ProfilePage }])
  ],
  declarations: [ProfilePage],
  exports: [ProfilePage]
  })
export class ProfilePageModule {}
