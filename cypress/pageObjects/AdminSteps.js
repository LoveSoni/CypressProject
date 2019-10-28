export class AdminSteps{
    visitSite(){
        cy.task('log', 'Open Admin panel stage')
        cy.visit('https://admin-staging.24c.in') 
    }
}