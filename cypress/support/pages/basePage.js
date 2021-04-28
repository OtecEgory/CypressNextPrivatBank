import {dataQaNode} from '../data'

export class BasePage {

    open(url){
        cy.visit(url)
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

    submitPaymant(){
        cy.get(`button[type="submit"]`)
            .click()
    }

    mouseOverVisibleElement(element, index){
        cy.get(element)
            .eq(index)
            .trigger('mouseover')
    }
    
    clickHandlerItemMenu(element){
        cy.get(element)
            .click()
    }

    waitResponseServe(){
        cy.wait(3000)
    }
    
}

export const basePage = new BasePage()