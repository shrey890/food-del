import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://violetx90:r7s8Vv46UaskDui0@tomato.2hqfxhf.mongodb.net/').then(() => {
        console.log('DB Connected')
    })
}