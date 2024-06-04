import { promises as fs } from 'fs';
import foodModel from '../models/foodModel.js';
// ! add food item
const addFood = async (req, res) => {
    let image_fileName = req.file.filename;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_fileName,
    });
    try {
        await food.save();
        console.log('Food added successfully');
        res.json({ success: true, message: 'Food added' });
    } catch (error) {
        console.log('Error adding the food', error);
        res.status(400).json({ success: false, message: 'Error adding the food' });
    }
};
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.status(200).json({ message: 'Food list fetched successfully', data: foods });
    } catch (error) {
        console.log('Error getting food list', error);
        res.status(400).json({ message: 'Food list fetched Error', error });
    }
};
// ! remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        const imagePath = `uploads/${food.image}`;
        await fs.unlink(imagePath);
        // try {
        //     console.log('Image deleted successfully');
        // } catch (err) {
        //     console.log('Error deleting image', err);
        //     return res.status(500).json({ message: 'Error deleting image', error: err });
        // }
        await foodModel.findByIdAndDelete(req.body.id);
        console.log('Food deleted successfully');
        res.status(200).json({ message: 'Deleted Successfully' });
    } catch (error) {
        console.log('Error deleting food', error);
        res.status(400).json({ message: 'Error deleting food', error });
    }
};
export { addFood, listFood, removeFood };
