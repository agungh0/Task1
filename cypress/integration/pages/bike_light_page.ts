export class BikeLightPage{
    link_sauceLabsBikeLight = 'Sauce Labs Bike Light'

    sauceLabsBikeLight(){
        cy.contains(this.link_sauceLabsBikeLight).click()
        cy.contains('Sauce Labs Bike Light').should('be.visible') 
    }
}