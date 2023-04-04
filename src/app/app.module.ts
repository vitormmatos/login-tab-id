import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { IonicModule } from '@ionic/angular'

import { AppComponent } from './app.component'
import { TabsComponent } from './tabs/tabs.component'

import { AppRoutingModule } from './app.router'

@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  IonicModule.forRoot()
  ],
  declarations: [AppComponent, TabsComponent],
  bootstrap: [AppComponent]
  })
export class AppModule {}
