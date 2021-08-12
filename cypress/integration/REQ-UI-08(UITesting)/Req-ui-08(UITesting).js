import ElementObjects from '../pageObjects/elementObjects'
const elementObjects  = new ElementObjects()

Given('I open Website Site 1', () => {
    cy.visit('http://172.19.192.1:8080/')
  });

    When('UI Testing button should be visible', () => {
      elementObjects.uiTesting().should('be.visible')  
  })

    When('I Click to UI Testing button', () => {
      elementObjects.uiTesting().contains('UI Testing').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      elementObjects.homePageText().should('be.visible') 
  });


Given('I open Website Site 2', () => {
    cy.visit('http://192.168.1.7:8080/')
  });

    When('UI Testing button should be visible', () => {
      elementObjects.uiTesting().should('be.visible')  
  })

    When('I Click to UI Testing button', () => {
      elementObjects.uiTesting().contains('UI Testing').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      elementObjects.homePageText().should('be.visible') 
  });

Given('I open Website Site 3', () => {
    cy.visit('http://127.0.0.1:8080/')
  });

    When('UI Testing button should be visible', () => {
      elementObjects.uiTesting().should('be.visible')  
  })

    When('I Click to UI Testing button', () => {
      elementObjects.uiTesting().contains('UI Testing').click()  
  })

    Then('Navigate to Home Page and Home Page display', () => {
      elementObjects.homePageText().should('be.visible')  
  });