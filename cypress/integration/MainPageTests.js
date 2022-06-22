import data from "../../data/HrefCheck.js";
import { ethers } from "ethers";
import ABI from "../../contract/BringAbi.js"
import { navigateTo } from "../support/Navigation.js";

describe('visit Bring and Connect Metamask Wallet', () => {
    before(() => {
        cy.visit('/');
        cy.metcon();// Metamask Connect Command*
    })

    it('Home Page (TestCase#2)', () => {
        // Відбувається перехід на Earn Page 
        cy.get('.get__stake').then(($getStake)=> {
        cy.wrap($getStake).should('have.attr','href','/cabinet/pool');
        })
        cy.get('.more__information').then(($moreInfo) => {
        cy.wrap($moreInfo).should('have.attr', 'href', 'https://hacken.io/audits/#bring_finance');
        cy.wrap($moreInfo).should('have.attr', 'target', '_blank');
        }); 
        cy.get('[class="started__btn"]').contains('Add project').then(($BePart) =>{
        cy.wrap($BePart).should('have.attr','href','https://bring.finance/partners.html');
        cy.wrap($BePart).should('have.attr','target','_blank');
        })
   
    })

    it('Social Network Links (TestCase#3)', () => {
        const socNet = data.SocialNetworcs;
        // Перевірка посилань на Соц Мережі
        let SocLinkKeys = Object.keys(socNet);

        cy.get('.container-link').first().children().then(($SocBlock) => {           
            let SocLength = Cypress.$($SocBlock).length;

            for(let i = 0; i < SocLength; i++) {
                cy.wrap($SocBlock).eq(i).get(`.${SocLinkKeys[i]}`).parent().should('have.attr','href', socNet[SocLinkKeys[i]]);
                cy.wrap($SocBlock).eq(i).get(`.${SocLinkKeys[i]}`).parent().should('have.attr','target','_blank');
            }
        })

    })

    it('Partners Links (TestCase#4)',() => {
        const partners = data.Parnters;
        let linkKeys = Object.keys(partners);

        cy.get('.partners__inner').first().children().then(($partnersBlock) => {           
            let partnersLength = Cypress.$($partnersBlock).length;

            for(let i = 0; i < partnersLength; i++) {
                cy.wrap($partnersBlock).eq(i).get(`.${linkKeys[i]}`).should('have.attr','href', partners[linkKeys[i]]);
                cy.wrap($partnersBlock).eq(i).get(`.${linkKeys[i]}`).should('have.attr','target','_blank');
            }
        })
    })

    it('Roadmap',()=>{
        const activeColor ="rgb(217, 17, 58)"//Колір активної кнопки фільтрів
        
        cy.get('.years__roadmap').find('button').then(($RoadmapYear)=>{
            let RoadLength = Cypress.$($RoadmapYear).length;
            
            for(let i = 0 ;i < RoadLength ; i++){
                cy.wrap($RoadmapYear).eq(i).click({force:true}).should('have.css','background-color',activeColor)
            }
        })
    })

    it('FAQ',()=>{
        cy.get('[data-cy="list-faq"]').find('li').then(($FAQs)=>{
            let FAQsL = Cypress.$($FAQs).length;

            for( let i =0 ; i<FAQsL; i++){
                cy.wrap($FAQs).eq(i).find('[class="i-arrow-drop-down-line"]').click({force:true})
            }
        })
    })

})