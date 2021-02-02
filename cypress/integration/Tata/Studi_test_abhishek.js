/// <reference types="cypress" />

describe("Testing Study beta UI",()=>{

    beforeEach(function(){
         cy.fixture('example').then(function(data){
            this.data = data
        })
    })
     
    beforeEach("login",function(){
    
        cy.visit(this.data.url)
        cy.get('.login-page').should('be.visible')
        cy.login(this.data.Username,this.data.Password)
    })

    afterEach("logout",()=>{
        cy.logout()
    })

    it("Scenario 1:login,count no.of books,open 1st book,logout",()=>{

        cy.get(".grade",{timeout:25000}).contains("Class 6").should("be.visible")
        cy.get('.card').eq(1).click()
        cy.get('.subj-card').then(($books)=>{
            cy.log($books.length)
            cy.wrap($books)
            cy.get($books).eq(0).click()
            cy.get('.heading1',{timeout:10000}).should('be.visible')
        })
    })

    it("Scenario 2:Open book “Mathematics”,playing videos,saving note",()=>{
        cy.wait(15000)
        cy.get('.right-meni-links > :nth-child(2)').click()
        cy.get('h4[class="card-title heading4 mb-10 ng-star-inserted"]',{timeout:20000}).eq(0).should('have.text',' Mathematics ').click()
        cy.wait(10000)
        cy.get('.heading5 > span',{timeout:25000}).eq(1).contains(" Comparing Numbers ").click()
        cy.get('h4.heading5').eq(0).contains(" Begin Revise ").click()
        cy.get('.btn-outline-primary').click()
        cy.wait(20000)
        cy.get('.btn-white').eq(1).click()
        cy.get('.icon-add-note-white',{timeout:15000}).click()
        cy.wait(10000)
        cy.get('[title="Play"]').should('be.enabled')
        cy.get('.btn-lg').should('be.disabled')
        cy.get('.ql-editor').type("compairing Numbers")
        cy.get('.btn-lg').click()
        cy.get(".tip-heading").should("be.visible")
    })
})