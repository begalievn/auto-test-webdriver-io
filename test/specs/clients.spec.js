const LoginPage = require('../pageobjects/login.page');
const ClientPage = require('../pageobjects/client.page');
const CouponPage = require('../pageobjects/coupon.page');

describe("Midterm tests", ()=> {
    
    beforeEach( async () => {
        await LoginPage.open();
        await LoginPage.login('Admin', 'Admin@Navi');
    });
    
    afterEach(async () => {
        await browser.reloadSession();
    })
    
    // it('Create a client', async () => {
    //
    //     await expect(browser).toHaveUrlContaining('clients');
    //
    //     await ClientPage.addClientButton.click();
    //     await expect(ClientPage.userForm).toExist();
    //
    //     await ClientPage.surnameInput.setValue('Blare');
    //     await ClientPage.firstNameInput.setValue('Alex');
    //     await ClientPage.middleNameInput.setValue('Middle');
    //     await ClientPage.genderRadio.click();
    //     await ClientPage.emailInput.setValue(`alexblare${Math.floor(Math.random() * 1000)}@gmail.com`);
    //     await ClientPage.phoneInput.setValue(`996${Math.floor(Math.random() * 555999999)}`)
    //     await ClientPage.birthdayInput.setValue('7/23/2000');
    //     await ClientPage.saveButton.click();
    //
    //     await browser.pause(5000);
    //
    //     await browser.acceptAlert()
    //     await expect(browser).toHaveUrlContaining('clients')
    // })
    
    // it('Update a client', async () => {
    //     await expect(browser).toHaveUrlContaining('clients');
    //
    //     await ClientPage.searchField.setValue('Blare');
    //     await browser.pause(3000);
    //     expect(await ClientPage.searchField.getValue()).toMatch('Blare');
    //     await browser.keys('Enter');
    //     await browser.pause(3000);
    //
    //     await expect(ClientPage.firstTrInListOfClients).toExist();
    //     await ClientPage.firstTrInListOfClients.click();
    //     await browser.pause(5000);
    //
    //     await ClientPage.updateMiddleNameInput.setValue('VeryCrazyMiddleName');
    //     await ClientPage.updateSaveButton.click();
    //     await browser.pause(3000);
    //     await browser.acceptAlert()
    //     await browser.pause(3000);
    // })
    
    // it('View updated client', async () => {
    //     await expect(browser).toHaveUrlContaining('clients');
    //     await ClientPage.searchField.setValue('VeryCrazyMiddleName');
    //     await browser.keys('Enter');
    //     await browser.pause(3000);
    //     await expect(ClientPage.firstTrInListOfClients).toExist();
    //     await ClientPage.firstTrInListOfClients.click();
    //     await browser.pause(5000);
    // })
    
    it('Create/Search/Delete a coupon', async () => {
        await ClientPage.couponLink.click();
        await expect(browser).toHaveUrlContaining('coupons');
        
        await CouponPage.createCouponButton.click();
        await browser.pause(4000);
        
        await CouponPage.clientNameInput.setValue('CrazyBlare');
        await CouponPage.benefitInput.setValue(2000);
        await CouponPage.beginDateInput.setValue('3/23/2023');
        await CouponPage.endDateInput.setValue('4/23/2023');
        
        await CouponPage.saveButton.click();
        await browser.pause(3000);
        
    })
})
