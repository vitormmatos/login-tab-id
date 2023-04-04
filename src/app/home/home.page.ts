import { Component } from '@angular/core'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
  })
export class HomePage {
  firstName!: string
  lastName!: string
  phoneNumber!: string
  street!: string
  city!: string
  state!: string
  country!: string
  birthday: string = new Date().toISOString()
  occupation!: string
  profilePicUrl: unknown = '../../assets/avatar.svg'
  alertButtons = ['OK']
  isAlertOpen = false
  msg = ''

  constructor (private readonly alertController: AlertController) {}

  async presentAlert (message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message,
      buttons: ['OK']
    })

    await alert.present()
  }

  keyPress (event: any) {
    const pattern = /[0-9\+\-\ ]/

    const inputChar = String.fromCharCode(event.charCode)
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault()
    }
  }

  // selectFile(event) { //Angular 8
  selectProfilePic (event: any) {
    // Angular 11, for stricter type
    if (!event?.target?.files[0] || event?.target?.files[0]?.length === 0) {
      this.presentAlert('You must select an image')
      return
    }

    const mimeType = event?.target?.files[0]?.type

    if (mimeType.match(/image\/*/) === null) {
      this.presentAlert('You must select an image')
      return
    }

    const reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.onload = _event => {
      this.profilePicUrl = reader.result
      localStorage.setItem('profilePicUrl', String(this.profilePicUrl))
    }
  }

  setFirstName (event: any) {
    this.firstName = event.target.value
    localStorage.setItem('firstName', this.firstName)
  }

  setLastName (event: any) {
    this.lastName = event.target.value
    localStorage.setItem('lastName', this.lastName)
  }

  setStreet (event: any) {
    this.street = event.target.value
    localStorage.setItem('street', this.street)
  }

  setCity (event: any) {
    this.city = event.target.value
    localStorage.setItem('city', this.city)
  }

  setState (event: any) {
    this.state = event.target.value
    localStorage.setItem('state', this.state)
  }

  setCountry (event: any) {
    this.country = event.target.value
    localStorage.setItem('country', this.country)
  }

  setOccupation (event: any) {
    this.occupation = event.target.value
    localStorage.setItem('occupation', this.occupation)
  }

  setPhoneNumber (event: any) {
    this.phoneNumber = event.target.value
    localStorage.setItem('phoneNumber', this.phoneNumber)
  }

  setBirthday (event: any) {
    this.birthday = event.target.value
    localStorage.setItem('birthday', this.birthday)
  }
}
