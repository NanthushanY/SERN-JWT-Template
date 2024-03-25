import bcrypt from 'bcryptjs';
import db from '../database';
import { generateToken } from '../utils/jwt';

const saltRounds = 10;

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert user data into the database
        const query = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        const { rows } = await db.query(query, [name, email, hashedPassword]);

        // Generate JWT token
        const token = generateToken(rows[0].user_id);

        // Send JWT token back to the client
        res.json({ token });
    } 
    catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ error: 'An error occurred during signup' });
    }
};
