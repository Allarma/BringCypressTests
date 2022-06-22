export class SLinkCheck {

    BRNGLPViewContract(){

        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-file-list-2-line').eq('0').parent().then(($ViewContract) =>{
            cy.wrap($ViewContract).should('have.attr','href','https://bscscan.com/address/0xe412f518a6a39351c965e201a329ec83047feb4a');
            cy.wrap($ViewContract).should('have.attr','target','_blank');
        })
    }

    BRNGLPHowItWorks(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-settings-5-line').parent().then(($HowItWorks) =>{
            cy.wrap($HowItWorks).should('have.attr','href','https://bringfinance.medium.com/staking-on-bring-2-0-how-it-works-74bc4d89762a');
            cy.wrap($HowItWorks).should('have.attr','target','_blank');
        })
    }
    
    BRNGLPHowToStake(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-error-warning-line').parent().then(($HowToStakeLP) =>{
            cy.wrap($HowToStakeLP).should('have.attr','href','https://bringfinance.medium.com/creating-liquidity-on-pancakeswap-brng-bnb-8a271ff0340b');
            cy.wrap($HowToStakeLP).should('have.attr','target','_blank');
        })
    }   

    BRNGLPPanCake(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('Get LP-token').parent().then(($PanCake) =>{
            cy.wrap($PanCake).should('have.attr','href','https://pancakeswap.finance/add/BNB/0x939D5A13cf0074586a2Dcf17bC692B2D3CCdD517');
            cy.wrap($PanCake).should('have.attr','target','_blank');
        })
    }    

    BRNGLPViewContractReward(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-file-list-2-line').eq('1').parent().then(($ViewContractReward) =>{
            cy.wrap($ViewContractReward).should('have.attr','href','https://bscscan.com/address/0x939D5A13cf0074586a2Dcf17bC692B2D3CCdD517');
            cy.wrap($ViewContractReward).should('have.attr','target','_blank');
        })
    }    

    BRNGLPCoinGecko(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('CoinGecko').parent().then(($CoinGecko) =>{
            cy.wrap($CoinGecko).should('have.attr','href','https://www.coingecko.com/en/coins/bring-finance');
            cy.wrap($CoinGecko).should('have.attr','target','_blank');
        })
    }    

    BRNGLPBridge(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG-LP №1').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('Bridge Token').parent().then(($Bridge) =>{
            cy.wrap($Bridge).should('have.attr','href','https://bridge.bring.finance/');
            cy.wrap($Bridge).should('have.attr','target','_blank');
        })
    }       
    
    
    BRNGViewContract(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-file-list-2-line').eq('0').parent().then(($ViewContractBRNG) =>{
            cy.wrap($ViewContractBRNG).should('have.attr','href','https://explorer.harmony.one/address/0x3ecb96039340630c8b82e5a7732bc88b2aeade82');
            cy.wrap($ViewContractBRNG).should('have.attr','target','_blank');
        })

    }

    BRNGHowItWorks(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-settings-5-line').children('have.attr','a').then(($HowItWorksBRNG) =>{
            cy.wrap($HowItWorksBRNG).should('have.attr','href','https://bringfinance.medium.com/staking-on-bring-2-0-how-it-works-74bc4d89762a');
            cy.wrap($HowItWorksBRNG).should('have.attr','target','_blank');
        })
    }

    BRNGHowToStakeLP(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-error-warning-line').parent().then(($HowToStakeLPBRNG) =>{
            cy.wrap($HowToStakeLPBRNG).should('have.attr','href','https://bringfinance.medium.com/creating-liquidity-on-pancakeswap-brng-bnb-8a271ff0340b');
            cy.wrap($HowToStakeLPBRNG).should('have.attr','target','_blank');
        })
    }

    BRNGBridgeToken(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('Bridge Token').parent().then(($BridgeTokenBRNGRew) =>{
            cy.wrap($BridgeTokenBRNGRew).should('have.attr','href','https://bridge.bring.finance');
            cy.wrap($BridgeTokenBRNGRew).should('have.attr','target','_blank');
        })
    }

    BRNGViewContractReward(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.i-file-list-2-line').eq('1').parent().then(($ViewContractBRNG) =>{
        cy.wrap($ViewContractBRNG).should('have.attr','href','https://explorer.harmony.one/address/0x3ecb96039340630c8b82e5a7732bc88b2aeade82');
        cy.wrap($ViewContractBRNG).should('have.attr','target','_blank');
        })
    }    

    BRNGCoinGecko(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('CoinGecko').parent().then(($CoinGecko) =>{
            cy.wrap($CoinGecko).should('have.attr','href','https://www.coingecko.com/en/coins/bring-finance');
            cy.wrap($CoinGecko).should('have.attr','target','_blank');
        })

    }

    BRNGBridgeTokenReward(){
        cy.get('[class="i-arrow-drop-down-line line"]').contains('BRNG').then(dropdown=>{
            cy.wrap(dropdown).find('[class="for__more"]').then(dropstatus=>{
                if(dropstatus.contains('More')){
                    cy.wrap(dropdown).click()
                }
            })
        });
        cy.get('.tooltiptext').contains('Bridge Token').parent().then(($Bridge) =>{
            cy.wrap($Bridge).should('have.attr','href','https://bridge.bring.finance');
            cy.wrap($Bridge).should('have.attr','target','_blank');
        })
    }
}

export const StakeLink = new SLinkCheck