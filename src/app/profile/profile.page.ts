import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
  })
export class ProfilePage implements OnInit {
  private readonly undefinedShortLabel = '*****'
  private readonly undefinedLongLabel = '***********'
  private readonly undefinedProfilePic = '../../assets/avatar.svg'
  private readonly undefinedBirthday = new Date().toUTCString()
  firstName: string = this.undefinedShortLabel
  lastName: string = this.undefinedShortLabel
  profilePicUrl: unknown = this.undefinedProfilePic
  birthday: string = this.undefinedBirthday
  phoneNumber: string = this.undefinedLongLabel
  occupation: string = this.undefinedLongLabel
  street: string = this.undefinedLongLabel
  city: string = this.undefinedLongLabel
  state: string = this.undefinedLongLabel
  country: string = this.undefinedLongLabel

  constructor () {}

  ngOnInit () {
    interval(3000).subscribe(() => {
      this.checkFirstName()
      this.checkLastName()
      this.checkProfilePic()
      this.checkStreet()
      this.checkCity()
      this.checkState()
      this.checkCountry()
      this.checkBirthday()
      this.checkPhoneNumber()
      this.checkOccupation()
    })
  }

  checkValidValue (itemName: string, undefinedData: string) {
    const data = localStorage.getItem(itemName)
    if (data === null || data === undefined || data === '') {
      return undefinedData
    }
    return data
  }

  checkFirstName () {
    this.firstName = this.checkValidValue('firstName', this.undefinedShortLabel)
  }

  checkLastName () {
    this.lastName = this.checkValidValue('lastName', this.undefinedShortLabel)
  }

  checkProfilePic () {
    this.profilePicUrl = this.checkValidValue(
      'profilePicUrl',
      this.undefinedProfilePic
    )
  }

  checkBirthday () {
    const data = this.checkValidValue('birthday', this.undefinedBirthday)
    this.birthday = new Date(data).toUTCString()
  }

  checkPhoneNumber () {
    this.phoneNumber = this.checkValidValue(
      'phoneNumber',
      this.undefinedLongLabel
    )
  }

  checkOccupation () {
    this.occupation = this.checkValidValue(
      'occupation',
      this.undefinedLongLabel
    )
  }

  checkStreet () {
    this.street = this.checkValidValue('street', this.undefinedLongLabel)
  }

  checkCity () {
    this.city = this.checkValidValue('city', this.undefinedLongLabel)
  }

  checkState () {
    this.state = this.checkValidValue('state', this.undefinedLongLabel)
  }

  checkCountry () {
    this.country = this.checkValidValue('country', this.undefinedLongLabel)
  }
}
