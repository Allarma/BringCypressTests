Cypress.Commands.add('SwitchNetworkAndApprove',async ()=> {
    const notificationPage = await puppeteer.switchToMetamaskNotification();
        await puppeteer.waitAndClick(
          confirmationPageElements.footer.approveButton,
          notificationPage,
        );
        await puppeteer.metamaskWindow().waitForTimeout(3000);
        return true;
      }
    )
    
    Cypress.Commands.add('confirmTransactionBNBT',async ()=> {
        const approvebnbtransaction = getNetwork().networkName === 'Binance SmartChain mainnet';
        await puppeteer.metamaskWindow().waitForTimeout(1000);
        const notificationPage = await puppeteer.switchToMetamaskNotification()
      }
    )