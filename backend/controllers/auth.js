import bcrypt from 'bcryptjs';
import db from '../database';
import { generateToken } from '../utils/jwt';

const saltRounds = 10;

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = 'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *';
        const { rows } = await db.query(query, [name, email, hashedPassword]);

        const token = generateToken(rows[0].user_id);

        res.json({ token });
    } 
    catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({ error: 'An error occurred during signup' });
    }
};
