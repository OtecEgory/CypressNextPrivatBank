import {mobileReplenishment} from '../support/pages/mobileReplenishment'
import {data} from '../support/data'
import {basePage} from '../support/pages/basePage'

it('Mobile phone replenishment', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber(data.typeNumber)

    basePage.typeAmount(data.typeAmount)

    basePage.typeDebitCardData(
        data.cardNumber,
        data.expDate,
        data.cvv,
    )

    mobileReplenishment.waitResponseServe()
    
    basePage.submitPaymant()

    mobileReplenishment.checkDebitCard(data.debitCard)

    mobileReplenishment.checkDebitAmount(data.debitAmmount)

    mobileReplenishment.checkDebitCommission(data.debitCommission)

    mobileReplenishment.checkReceiverAmount(data.checkReceiverAmount)

    mobileReplenishment.checkPaymantCurrency(data.paymantCurrency)
});


