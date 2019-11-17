const config = require('config')

describe('/#/contact', () => {
  let comment, rating, submitButton, captcha

  beforeEach(() => {
    browser.get('/#/contact')
    comment = element(by.id('comment'))
    rating = $$('.br-unit').last()
    captcha = element(by.id('captchaControl'))
    submitButton = element(by.id('submitButton'))
  })

 
  describe('challenge "front end typosquattingAngular"', () => {
    it('should be possible to post typosquatting Bower package as feedback', () => {
      comment.sendKeys('You are a typosquatting victim of this Bower package: ng2-bar-rating')
      rating.click()
      solveNextCaptcha()
      submitButton.click()
      browser.sleep(3000)
    })

  })

 describe('challenge "privacyPolicyProof"', () => {
    it('should be able to access proof url for reading the privacy policy', () => {
      browser.driver.get(browser.baseUrl + '/#/privacy-security/privacy-policy')
      browser.sleep(3000)
    })
})

 function solveNextCaptcha () {
    element(by.id('captcha')).getText().then((text) => {
      captcha.clear()
      const answer = eval(text).toString() 
      captcha.sendKeys(answer)
    })
  }
})
