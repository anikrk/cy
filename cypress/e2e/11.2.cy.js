import testdata from "../fixtures/new.json"
describe('homework11', () => {
  it('login user', () => {
    cy.visit('https://automationteststore.com/')
    cy.login(testdata.username, testdata.password)

  //  cy.get('#customer_menu_top > li > a').click()
  //  cy.get('#loginFrm_loginname').type("akirk").should("have.value", "akirk")
  //  cy.get('#loginFrm_password').type("newpassword")
  //  cy.get('#loginFrm > fieldset > .btn').click()
  
//edit account details
   cy.get('.side_account_list > :nth-child(3) > a').click()
   cy.get('#AccountFrm_firstname').clear()
   cy.get('#AccountFrm_firstname').type("ani").should("have.value", testdata.firstName)
   cy.get('#AccountFrm_lastname').clear().type("kirkitadze").should("have.value",testdata.lastName)
   cy.get('.col-md-12 > .btn-orange').click()
   cy.get('.alert').should("be.visible")
   // new address
   cy.get('.side_account_list > :nth-child(5) > a').click()
   cy.get('.col-md-12 > .btn-orange').click()
   cy.get('#AddressFrm_firstname').type("ani").should("have.value", "ani")
   cy.get('#AddressFrm_lastname').type("kirkitadze").should("have.value","kirkitadze")
   cy.get('#AddressFrm_address_1').type("avchala2").should("have.value", "avchala2")
   cy.get('#AddressFrm_city').type("tbilisi").should("have.value","tbilisi")
   cy.get('#AddressFrm_country_id').select("Georgia")
   cy.get('#AddressFrm_zone_id').select("Tbilisi")
   cy.get('#AddressFrm_postcode').type("0163").should("have.value","0163")
   cy.get('.col-md-12 > .btn-orange').click()
  
   //change passwprd
  //  cy.get('.side_account_list > :nth-child(4) > a').click()
  //  cy.get('#PasswordFrm_current_password').type("a21001038255")
  //  cy.get('#PasswordFrm_password').type("newpassword")
  //  cy.get('#PasswordFrm_confirm').type("newpassword")
  //  cy.get('.col-md-12 > .btn-orange').click()
  //  //check update
  //  cy.get('.alert').should("be.visible")


   
  })
  
})