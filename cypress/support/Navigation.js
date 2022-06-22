export class NavigationPage{

    MainPage(){
        cy.get('.logo').parent().first().should('have.attr','href','#');
    }
    EarnPage(){
        cy.contains('earn').should('have.attr','href','/cabinet/pool');
    }
    YourStakePage(){
        cy.contains(' YOUR STAKES ').should('have.attr','href','/cabinet/stake');
    }
    RefferalPage(){
        cy.contains(' Referrals ').should('have.attr','href','/cabinet/referral');
    }
    BringBrdgeLink(){
        cy.get('.btn__bridge').eq(0).then(($IconBridgeHead) => {
            cy.wrap($IconBridgeHead).should('have.attr','href','https://bridge.bring.finance/');
            cy.wrap($IconBridgeHead).should('have.attr','target','_blank');
        })

    }
    BuyBringLink(){
        cy.get('.btn__bring-icon').then(($IconBringBuyHead) => {
            cy.wrap($IconBringBuyHead).should('have.attr','href','https://pancakeswap.finance/swap?inputCurrency=0x939d5a13cf0074586a2dcf17bc692b2d3ccdd517');
            cy.wrap($IconBringBuyHead).should('have.attr','target','_blank');
        });

    }
}

export const navigateTo = new NavigationPage()
