function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 
it('should navigate to admin panel hoome page',()=>{
    cy.visit('https://admin-staging.24c.in')
    console.log('Visiting admin staging')
    cy.get('#userName').type('test@cars24.com')
    console.log('Entered username : test@cars24.com')
    cy.get('#password').type('123456{enter}')
    console.log('Entered password : 123456')
    cy.get(':nth-child(7) > :nth-child(1) > span').click()
    cy.get('.active > .treeview-menu > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > :nth-child(1) > .btn').click()
    cy.get('#info_1 > .panel-title > a').click()
    cy.get(':nth-child(1) > .onboarding_form > :nth-child(2) > :nth-child(2) > .row > .col-sm-6 > .form-control').type('new'+randomNumber(1,1000)+'@cars24.com')
    cy.get('.dark_info > .onboarding_form > :nth-child(1) > :nth-child(1) > .row > .col-sm-6 > .form-control').type('cyp')
    cy.get('#permanentAddress').type('Gurgaon')
    cy.get('#fkRegionId').select('Pune')
    cy.get('.dark_info > .onboarding_form > :nth-child(6) > :nth-child(2) > .row > .col-sm-6 > .form-control').select('External Dealer')
    cy.get('.dark_info > .onboarding_form > :nth-child(5) > :nth-child(2) > .row > .col-sm-6 > .form-control').clear().type('100')
    cy.get('#submitbutton').click()

   

})