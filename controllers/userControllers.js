import pool from '../sqlConnection.js'

const getAllUsers = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM users')
        return res.json({rows})
    } catch (error) {
        next(error);
    }
}

const createUser = async (req, res, next) => {
    try{
        const {body: {first_name, last_name}} = req;
        if (!first_name || !last_name ) throw new Error(`First name and last name are required`);
        if (typeof first_name !== 'string' || typeof last_name !== 'string') throw new Error('First and last name should be strings');

        // if (!first_name || !last_name)
        // return res
        //   .status(404)
        //   .json({ error: "First name, last name and age are required" });

        // if (typeof first_name !== "string" || typeof last_name !== "string")
        //  return res
        //    .status(404)
        //    .json({ error: "First name and last name should be strings" });
       
        const { rows: [newUser] } = await pool.query('INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *' [first_name, last_name])
        return res.status(201).json(newUser);}
        catch(error) {
            // res.status(500).json({ error: error.message });
            next(error);
        }
}


const getSingleUser = async (req, res) => {
    try {
        const {id} = req.params
        // Sanatising the id using dollar sign
        const {rows} = await pool.query(`SELECT * FROM users WHERE id=$1`, [id] )
        // showing 404 when the id doesnt exist
        if (!rows.length) throw new Error("User not found!")
        // if (!rows.length) return res.status(404).json({error: "User not found!"})
        // return id from pool query
        return res.json({rows})
    } catch (error) {
        next(error);
    }
}
const updateUser = async (req, res) => {
    try {
    const { rows } = await pool.query()

    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res) => {
    try {
    

    } catch (error) {
        next(error);
    }
}



export {getAllUsers, createUser, getSingleUser, updateUser, deleteUser}