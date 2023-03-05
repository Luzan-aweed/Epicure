import mongoose from "mongoose";
const connectDb = async () => {
    mongoose.set("strictQuery", true);
    //await mongoose.connect("mongodb://localhost/EPICURE");
    await mongoose.connect("mongodb://luzanm93:Ms12345678@cluster0.d0rjxj7.mongodb.net:27017/test");

};
export { connectDb }