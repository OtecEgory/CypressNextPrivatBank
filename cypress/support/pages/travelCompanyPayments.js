import {dataQaNode} from '../data'

const listItemPopularCompany = '.list_27aPp8BXI4'

export class TravelPayments {
    
    searchTour(name){
        cy.get(`[${dataQaNode}="query"]`)
            .type(name)
    }

    selectPopularCompanies(index){
        cy.get(listItemPopularCompany)
            .eq(index)
            .click()
    }

    typeFullName(fullName){
        cy.get(`[${dataQaNode}="FIO"]`)
            .type(fullName)
    }

    typeNumberContract(number){
        cy.get(`[${dataQaNode}="RA"]`)
            .type(number)
    }

    typeSumRate(sumRate){
        cy.get(`[${dataQaNode}="SUM"]`)
            .type(sumRate)
    }
}

export const travelPayments = new TravelPayments()