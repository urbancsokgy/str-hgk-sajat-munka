const siteControllers = require('../controllers/site.controllers')
const SiteController = require('../controllers/site.controllers')
const SiteRouter ={
    '/' : res => siteControllers.index(res),
    '/about' : res => siteControllers.about(res),
    '/contact' : res => siteControllers.contact(res),
    '/404' : res => siteControllers.error404(res)
}
module.exports = Object.freeze(SiteRouter)