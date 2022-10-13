import MongoStore from 'connect-mongo'

const mongoUrl = 'mongodb+srv://root:gismongo@cluster0.m7syyp5.mongodb.net/Ecommerce?retryWrites=true&w=majority'

export const sessionConfig = {
    store: MongoStore.create({ mongoUrl }),
    secret: 'messi',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000,
    }
}

export default mongoUrl