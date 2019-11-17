describe('/#/forgot-password', () => {
  let email, securityAnswer, newPassword, newPasswordRepeat, resetButton

  const EC = protractor.ExpectedConditions

  beforeEach(() => {
    browser.wait(EC.stalenessOf($('#logout')), 5000)
    browser.get('/#/forgot-password')
    email = element(by.id('email'))
    securityAnswer = element(by.id('securityAnswer'))
    newPassword = element(by.id('newPassword'))
    newPasswordRepeat = element(by.id('newPasswordRepeat'))
    resetButton = element(by.id('resetButton'))
  })
  describe('as Bjoern', () => {
       describe('for his OWASP account', () => {
      it('should be able to reset password with his security answer', () => {
        email.sendKeys('bjoern@owasp.org')
        browser.wait(EC.visibilityOf(securityAnswer), 1000, 'Security answer field did not become visible')
        securityAnswer.sendKeys('Zaya')
        newPassword.sendKeys('Test123')
        newPasswordRepeat.sendKeys('Test123')
        resetButton.click()
        browser.sleep(3000)
        expect($('.confirmation').getAttribute('hidden')).not.toBeTruthy()
      })

    })
  })

  
})
