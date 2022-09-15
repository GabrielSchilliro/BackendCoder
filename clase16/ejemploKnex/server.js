import express from 'express'
import { clienteSql } from './clienteSql.js'

const app = express()

app.use(express.json())

app.get('/api/personas', async (req, res) => {
    const personas = await clienteSql.select('*').from('personas')
    res.json(personas)
})

app.get('/api/personas/:id', async (req, res) => {
    const persona = await clienteSql.select('*').from('personas').where({ id: req.params.id }).first()
    res.json(persona)
})

app.listen(8080, () => {
    console.log('servidor conectado!')
})