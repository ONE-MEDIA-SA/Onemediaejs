const { Router } = require('express')
const router = Router()

const routerController = require('../controllers/router.controller')
router.get('/', routerController.home)
router.get('/request', routerController.request)

module.exports = router