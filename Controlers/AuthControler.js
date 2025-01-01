import jwt from 'jsonwebtoken';
import Student from '../Modules/UserModule.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here';

export const registerStudent = async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber, dateOfBirth, grade, address, guardianName, guardianContact } = req.body;
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this email already exists" });
        }
        const newStudent = new Student({
            firstName,
            lastName,
            email,
            mobileNumber,
            dateOfBirth,
            grade,
            address,
            guardianName,
            guardianContact,
        });
        await newStudent.save();
        res.status(201).json({ message: "Student registered successfully", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const loginStudent = async (req, res) => {
    try {
        const { email, mobileNumber } = req.body;
        const student = await Student.findOne({ email, mobileNumber });
        if (!student) {
            return res.status(404).json({ message: "Invalid email or mobile number" });
        }
        const token = jwt.sign({ id: student._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student updated successfully", student: updatedStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
