import data from "../../data/HrefCheck.js";
import { ethers } from "ethers";
// import V3 from "../../contract/BringAbi.js"
import { navigateTo } from "../support/Navigation.js";
import { ChangeNetwork } from "../support/ChangeNetwork.js";
import { StakeLink } from "../support/StakeLink.js";

describe('visit Bring and Connect Metamask Wallet', () => {
    before(() => {
        cy.metcon();// Metamask Connect Command*
    })


    it('HeaderNav(TestCase#1)',() =>{
        //Перевірка посилання при натисканні на лого
        navigateTo.MainPage();
        //Перевірка посилання при натисканні на кнопку earn
        navigateTo.EarnPage();
        //Перевірка посилання при натисканні на кнопку YOUR STAKES
        navigateTo.YourStakePage();
        //Перевірка посилання при натисканні на кнопку Referrals   
        navigateTo.RefferalPage();
        //Перевірка посилання при натисканні на кнопку Bringe.Bridge
        navigateTo.BringBrdgeLink();
        //Перевірка посилання при натисканні на кнопку Buy BRNG     
        navigateTo.BuyBringLink();

    })
    
    it('FooterNav(TestCase#2)',() =>{
        //Перевірка посилання при натисканні на лого
        navigateTo.FMainPage();
        //Перевірка посилання при натисканні на кнопку earn
        navigateTo.FEarnPage();
        //Перевірка посилання при натисканні на кнопку YOUR STAKES
        navigateTo.FYourStakePage();
        //Перевірка посилання при натисканні на кнопку Referrals   
        navigateTo.FRefferalPage();
        //Перевірка посилання при натисканні на кнопку Bringe.Bridge
        navigateTo.FBringBrdgeLink();
        //Перевірка посилання при натисканні на кнопку Buy BRNG     
        navigateTo.FBuyBringLink();

    })
})