// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(username,password) =>{
    cy.get('input[formcontrolname="username"]').type(username)
    cy.get('[type="submit"]').contains("Sign in").click()
    cy.get('input[formcontrolname="password"]').type(password)
    cy.get('[type="submit"]').contains("Verify").click()
})

Cypress.Commands.add("logout",() =>{
    cy.visit("http://afs-predev.testedgeonline.com/child/")
    cy.wait(10000)
    cy.get('.btn-link-primary',{timeout:15000}).click()
})