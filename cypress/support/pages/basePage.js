import {dataQaNode} from '../data'

export class BasePage {

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

    submitPaymant(){
        cy.get(`button[type="submit"]`)
            .click()
    }
}

export const basePage = new BasePage()