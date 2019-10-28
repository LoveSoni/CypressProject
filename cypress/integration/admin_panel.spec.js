import { AdminSteps } from "../pageObjects/AdminSteps";

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 

describe('Create a new dealer',()=>{
    const adminSteps  = new AdminSteps()
    beforeEach(()=>{
        adminSteps.visitSite('https://admin-staging.24c.in')
        cy.task('log', 'Enter username')
        cy.get('#userName').type('test@cars24.com')
        cy.task('log', 'Enter password')
        cy.get('#password').type('123456{enter}')
    })
    it('User clicks on dealer database',() =>{
        cy.task('log','Click on dealer database')
        cy.get(':nth-child(7) > :nth-child(1) > span').click()  
        cy.task('log','Click on list of dealers')
        cy.contains('List Dealers').click()
        cy.task('log','Click on Add dealer')
        cy.get(':nth-child(1) > :nth-child(1) > .btn').click()
        cy.task('log','Click on General info')
        cy.get('#info_1 > .panel-title > a').click()
        var dealerName = 'new'+randomNumber(1,1000)+'@cars24.com'
        cy.task('log','Entered DealerName is :'+dealerName)
        cy.get(':nth-child(1) > .onboarding_form > :nth-child(2) > :nth-child(2) > .row > .col-sm-6 > .form-control').type(dealerName)
        cy.get('.dark_info > .onboarding_form > :nth-child(1) > :nth-child(1) > .row > .col-sm-6 > .form-control').type('cyp')
        cy.task('log','Entering permanent address')
        cy.get('#permanentAddress').type('Gurgaon')
        cy.task('log','Selecting Region')
        cy.get('#fkRegionId').select('Pune')
        cy.task('log','Selecting dealer type')
        cy.get('.dark_info > .onboarding_form > :nth-child(6) > :nth-child(2) > .row > .col-sm-6 > .form-control').select('External Dealer')
        cy.get('.dark_info > .onboarding_form > :nth-child(5) > :nth-child(2) > .row > .col-sm-6 > .form-control').clear().type('100')
        cy.get('.onboarding_tab_content.text-center > .contenteHeading').should('have.text','Type Of Dealership')
        cy.task('log','Clicking on submit button')
        cy.get('#submitbutton').click()
    })
})

