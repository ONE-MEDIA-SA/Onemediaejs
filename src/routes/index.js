const { Router } = require('express')
const router = Router()
const routerController = require('../controllers/router.controller')

router.get('/', routerController.home)
router.get('/request/:id', routerController.request)

module.exports = router