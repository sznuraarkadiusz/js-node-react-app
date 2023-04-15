import express from 'express'
const router = express.Router()
// middleware
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
// home page route
router.get('/', (req, res) => {
    res.send('Example home page')
})
// api route
router.get('/api/status', (req, res) => {
    res.send(`I'm alive!`)
})
export default router
