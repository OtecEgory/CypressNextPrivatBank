import {travelPayments} from '../support/pages/travelCompanyPayments'
import {dataHome, dataQaNode, dataQaValue, data} from '../support/data'
import {basePage} from '../support/pages/basePage'

const menuElement = `[${dataQaNode}="menu"]`
const menuItem = `[${dataQaValue}="my_payments"]`
const subMenuItem = `[${dataQaValue}="6"]`

it('Travel payment', () => {
    basePage.open(dataHome.urlHomePage)

    basePage.mouseOverVisibleElement(menuElement, 1)
    basePage.mouseOverVisibleElement(menuItem, null)
    basePage.mouseOverVisibleElement(subMenuItem, null)

    basePage.clickHandlerItemMenu(subMenuItem)

    travelPayments.searchTour(dataHome.nameTour)
    travelPayments.selectPopularCompanies(0)

    travelPayments.typeFullName(dataHome.fullName)
    travelPayments.typeNumberContract(dataHome.numberContract)

    travelPayments.typeSumRate(dataHome.sumRate)
    basePage.typeDebitCardData(
        data.cardNumber,
        data.expDate,
        data.cvv,
    )

    basePage.submitPaymant()

});
