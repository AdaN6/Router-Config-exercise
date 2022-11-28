import pool from '../sqlConnection.js'

const getAllUsers = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM users')
        return res.json({rows})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const createUser = async (req, res) => {
    try {
    

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


const getSingleUser = async (req, res) => {
    try {
        const {id} = req.params
        // Sanatising the id using dollar sign
        const {rows} = await pool.query(`SELECT * FROM users WHERE id=$1`, [id] )

        return res.json({rows})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const updateUser = async (req, res) => {
    try {
    

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
    

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}



export {getAllUsers, createUser, getSingleUser, updateUser, deleteUser}