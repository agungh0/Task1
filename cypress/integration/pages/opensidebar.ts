export class OpenSideBar{
    // link_openSideBar = 'react-burger-menu-btn'

    openSideBar(){
        cy.get((`button[id=react-burger-menu-btn]`)).click()
        cy.contains('All Items').should('be.visible') 
    }
}