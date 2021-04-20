import {mobileReplenishment} from '../support/pages/mobileReplenishment'
import {data} from '../support/data'

it.only('Mobile phone replenishment', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber(data.typeNumber)

    mobileReplenishment.typeAmount(data.typeAmount)

    mobileReplenishment.typeDebitCardData(
        data.cardNumber,
        data.expDate,
        data.cvv,
    )

    mobileReplenishment.waitResponseServe()
    
    mobileReplenishment.submitPaymant()

    mobileReplenishment.checkDebitCard(data.debitCard)

    mobileReplenishment.checkDebitAmount(data.debitAmmount)

    mobileReplenishment.checkDebitCommission(data.debitCommission)

    mobileReplenishment.checkReceiverAmount(data.checkReceiverAmount)

    mobileReplenishment.checkPaymantCurrency(data.paymantCurrency)
});


