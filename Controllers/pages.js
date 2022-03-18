const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET/pages')
})

modules.export = router
