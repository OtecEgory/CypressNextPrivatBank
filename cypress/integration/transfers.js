import {transfersData, data} from '../support/data'
import { basePage } from '../support/pages/basePage';
import { transfers } from '../support/pages/transfers';

it('Money transfer between foreing cards', () => {
    basePage.open(data.urlTransfers)

    basePage.typeDebitCardData(
        data.cardNumber,
        data.expDate,
        data.cvv,
    )

    transfers.typeNameAndSurname(
        transfersData.firstName, 
        transfersData.lastName, 
    )

    transfers.typeReceiverCard(
        transfersData.receiverCard
    )

    transfers.waitResponseServe()

    transfers.typeReceiverNameAndSurname(
        transfersData.name,
        transfersData.surname
    )

    basePage.typeAmount(
        transfersData.amountTransfer
    )

    transfers.typeComment(
        transfersData.comment
    )

    transfers.waitResponseServe()
    basePage.submitPaymant()

    transfers.checkDebitAndReceiverCards(
        transfersData.debitCards,
        transfersData.receiverCards
    )

    transfers.checkDebitAmountAndTotalAmpunt(
        transfersData.debitAmount,
        transfersData.totalAmount
    )

    transfers.checkDebitCommission(transfersData.commission)
    transfers.checkTotalCurrency(data.paymantCurrency)
    transfers.checkComment(transfersData.comment)

});
