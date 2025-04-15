import userData from "../fixtures/userData.json"

describe('homework12', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com/')
    const randomNumber=Math.round(Math.random())

  }

  )
  it('Register User', () => {

    // Click on 'Signup / Login' button
    cy.get('.shop-menu>.nav>:nth-child(4) > a').click();
    //Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should("have.text", "New User Signup!")
    //Enter name and email address
    cy.get('[data-qa="signup-name"]').type(userData.userName);
    cy.get('[data-qa="signup-email"]').type(userData.userMail)
    //Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
    // //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should("have.text", "Enter Account Information");
    /*Fill details: Title, Name, Email, Password, Date of birth (username-ს და მეილს ავტომატურად ავსებს, ამიტო ეგ 
    სთეფები დავაკომენტარე)*/
    cy.get('#id_gender2').check()
    // cy.get('[data-qa="name"]').type(userData.userName);
    // cy.get('[data-qa="email"]').type(userData.userMail);
    cy.get('[data-qa="password"]').type(userData.password);
    cy.get('[data-qa="days"]').select(userData.day)
    cy.get('[data-qa="months"]').select(userData.month)
    cy.get('[data-qa="years"]').select(userData.year)

    // //Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check()
    // //Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check()

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type(userData.firstName)
    cy.get('[data-qa="last_name"]').type(userData.lastName)
    cy.get('[data-qa="company"]').type(userData.company)
    cy.get('[data-qa="address"]').type(userData.address)
    cy.get('[data-qa="address2"]').type(userData.address2)
    cy.get('[data-qa="country"]').select(userData.country)
    cy.get('[data-qa="state"]').type(userData.state)
    cy.get('[data-qa="city"]').type(userData.city)
    cy.get('[data-qa="zipcode"]').type(userData.ZipCode)
    cy.get('[data-qa="mobile_number"]').type(userData.number)
    // //Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()
    //Verify that 'ACCOUNT CREATED!' is visible
    cy.get('b').should("have.text", "Account Created!")
    // Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()

    //Verify that 'Logged in as username' is visible
    cy.get(':nth-child(10) > a').should("contain.text", "Logged in as")

})


  it('Login User with correct data', () => {
    //Click on 'Signup / Login' button
    // cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    // //Verify 'Login to your account' is visible
    // cy.get('.login-form > h2').should("be.visible")
    // // Enter correct email address and password
    // cy.get('[data-qa="login-email"]').type(userData.userMail)
    // cy.get('[data-qa="login-password"]').type(userData.password)
    cy.login(userData.userMail, userData.password)
    //Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    // //Verify that 'Logged in as username' is visible
    cy.get(':nth-child(10) > a').should("contain.text", "Logged in as")
    // //Click 'Delete Account' button
    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

  })

it.only('Login with incorect data',()=>{
  // cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  // cy.get('.login-form > h2').should("be.visible")
  // cy.get('[data-qa="login-email"]').type(userData.wrongMail)
  // cy.get('[data-qa="login-password"]').type(userData.wrongPassword)
  cy.login(userData.wrongMail, userData.wrongMail)
  cy.get('[data-qa="login-button"]').click()
  cy.get('.login-form > form > p').should('be.visible')


}
)



  }

  )





