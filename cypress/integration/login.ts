import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {BikeLightPage} from "./pages/bike_light_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let bikelightPage = new BikeLightPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Sauce labs product bike light', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    bikelightPage.sauceLabsBikeLight()
})
