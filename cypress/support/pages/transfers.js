import {dataQaNode} from '../data'

export class Transfer {

    typeNameAndSurname(name, surname){
        cy.get(`[${dataQaNode}="firstNamedebitSource"]`)
            .type(name)
            .get(`[${dataQaNode}="lastNamedebitSource"]`)
            .type(surname)
    }

    typeReceiverCard(receiverCard) {
        cy.get(`[${dataQaNode}="numberreceiver"]`)
            .type(receiverCard)
    }

    typeReceiverNameAndSurname(firstname, lastname) {
        cy.get(`[${dataQaNode}="firstNamereceiver"]`)
            .type(firstname)
            .get(`[${dataQaNode}="lastNamereceiver"]`)
            .type(lastname)
    }

    typeComment(comment) {
        cy.get(`[${dataQaNode}="toggle-comment"]`)
            .click()
            .get(`[${dataQaNode}="comment"]`)
            .type(comment)
    }

    waitResponseServe(){
        cy.wait(3000)
    }

    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get(`[${dataQaNode}="payer-card"]`)
            .should('have.text', debitCard)
            .get(`[${dataQaNode}="receiver-card"]`)
            .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotalAmpunt(debitAmount, totalAmount){
        cy.get(`[${dataQaNode}="payer-amount"]`)
            .should('have.text', debitAmount)
            .get(`[${dataQaNode}="total"]`)
            .find('span')
            .should('contain.text', totalAmount)
    }

    checkDebitCommission(commision){
        cy.get(`[${dataQaNode}="payer-currency"]`)
            .should('have.text', commision)
    }

    checkTotalCurrency(paymantCurrency) {
        cy.get(`[${dataQaNode}="total"]`)
            .find('small')
            .should('contain.text', paymantCurrency)
    }

    checkComment(comment) {
        cy.get(`[${dataQaNode}="comment"]`)
            .should('have.text', comment)
    }
}

export const transfers = new Transfer()