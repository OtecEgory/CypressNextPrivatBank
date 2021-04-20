import {mobileReplenishment} from '../support/pages/mobileReplenishment'
import {data} from '../support/data'

it.only('Replenishment of Ukraine mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    // const data = {
    //     typeNumber: '686979712',
    //     typeAmount: '1',
    //     //typeDebitCard
    //     cardNumber: '4552331448138217',
    //     expDate: '0524',
    //     cvv: '111',
    //     //end block typeDebitCard
    //     debitCard: '4552 **** **** 8217',
    //     debitAmmount: '1',
    //     debitCommission: '2',
    //     checkReceiverAmount: '1',
    //     paymantCurrency: 'UAH'

    // }

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


