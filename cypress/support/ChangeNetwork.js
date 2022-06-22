export class NetworkChange{
    BNBNet(){
        cy.get('[class="dropdown__new"]').realHover();
        cy.get('[class="dropdown-list__new"]').should('be.visible');
        cy.get('.dropdown-list__new').contains('BNB').click();
        cy.get('[class="select__new"]').should('contains','BNB');
    }

    HarmonyNet(){
        cy.get(".dropdown__new").realHover();
        cy.get('[class="dropdown-list__new"]').should('be.visible');
        cy.get('.dropdown-list__new').contains('Harmony').click();
        cy.get('[class="select__new"]').should('contains','Harmony');
    }
    
    EthereumNet(){
        cy.get(".dropdown__new").realHover();
        cy.get('[class="dropdown-list__new"]').should('be.visible');
        cy.get('.dropdown-list__new').contains('Ethereum').click();
        cy.get('[class="select__new"]').should('contains','Ethereum');
    }


}

export const ChangeNetwork = new NetworkChange