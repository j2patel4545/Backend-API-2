import mongoose from 'mongoose';

// Define the schema for students
const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    guardianName: {
        type: String,
        required: true,
    },
    guardianContact: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create and export the model
const Student = mongoose.model('Student', StudentSchema);
export default Student;
