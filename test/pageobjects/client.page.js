const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClientPage extends Page {
  get addClientButton () {
    return $('button.clients-add-user-dialog');
  }
  
  get userForm () {
    return $('form.add-user-modal__form');
  }
  
  get firstNameInput () {
    return $('input[formcontrolname="userName"]');
  }
  
  get surnameInput () {
    return $('input[formcontrolname="userSurname"]');
  }
  
  get middleNameInput () {
    return $('input[formcontrolname="userMiddleName"]');
  }
  
  get genderRadio () {
    return $('mat-radio-group mat-radio-button:nth-child(1) div[class=\'mat-radio-label-content\']');
  }
  
  get emailInput () {
    return $('input[formcontrolname="email"]');
  }
  
  get phoneInput () {
    return $('input[formcontrolname="phone"]');
  }
  
  get birthdayInput () {
    return $('input[formcontrolname="birthday"]');
  }
  
  get saveButton () {
    return $('button[name=\'save\']');
  }
  
  get searchField () {
    return $('input[placeholder=\'Все пользователи\']');
  }
  
  get firstTrInListOfClients () {
    return $('table tbody tr:nth-child(1) td');
  }
  
  get updateMiddleNameInput () {
    return $('input[placeholder="Отчество"]');
  }
  
  get updateSaveButton () {
    return $('button[name="save"]');
  }
  
  get couponLink () {
    return $('a[href="/coupons"]');
  }
}

module.exports = new ClientPage();
