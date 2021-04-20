import {dataQaNode, amount} from '../data'
export class MobilePhoneReplenishment {
    
    typePhoneNumber(phoneNumber){
        cy.get(`[${dataQaNode}="phone-number"]`)
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get(`[${dataQaNode}="amount"]`)
            .type(amount)
    }
    
    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get(`[${dataQaNode}="numberdebitSource"]`)
            .type(cardNumber)

            .get(`[${dataQaNode}="expiredebitSource"]`)
            .type(expDate)

            .get(`[${dataQaNode}="cvvdebitSource"]`)
            .type(cvv)
    }

    waitResponseServe(){
        cy.wait(3000)
    }

    submitPaymant(){
        cy.get(`[${dataQaNode}="submit"]`)
            .click()
    }

    checkDebitCard(debitCard){
        cy.get(`[${dataQaNode}="card"]`)
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get(`[${dataQaNode}="amount"]`)
            .should('have.text', debitAmount)
    }

    checkDebitCommission(debitCommission){
        cy.get(`[${dataQaNode}="commission"]`)
            .eq(1)
            .should('have.text', debitCommission)
    }

    checkReceiverAmount(receiverAmount){
        cy.get(`${amount}`)
            .find('span')
            .should('have.text', receiverAmount)
    }
    
    checkPaymantCurrency(paymantCurrency){
        cy.get(`${amount}`)
            .find('small')
            .should('contain.text', paymantCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()