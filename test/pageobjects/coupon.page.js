const Page = require('./page');

class CouponPage extends Page {
  get createCouponButton () {
    return $('button.crm-button');
  }
  
  get clientNameInput () {
    return $('input[formcontrolname="ClientFullName"]');
  }
  
  get benefitInput () {
    return $('input[formcontrolname="Benefit"]');
  }
  
  get beginDateInput () {
    return $('input[formcontrolname="BeginDate"]');
  }
  
  get endDateInput () {
    return $('input[formcontrolname="EndDate"]');
  }
  
  get saveButton () {
    return $('button[name="save"]');
  }
}

module.exports = new CouponPage();
