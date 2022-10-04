import express from 'express'
import { apiRouter } from './apiRouter.js'

export const app = express()

// Cambiar por productos para los otros contenedores
app.use('/api/personas', apiRouter)