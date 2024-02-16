const mysql = require('mysql2');

/*
UserTable
email VARCHAR(100) NOT NULL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fName VARCHAR(50) NOT NULL,
    lName VARCHAR(50) NOT NULL,
    user_type ENUM('parent', 'staff', "admin", "sn") NOT NULL,      user_type must be only those values
    phone_number VARCHAR(20) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP         
*/

/*
    username VARCHAR(255) NOT NULL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    image1 VARCHAR(255) NOT NULL,
    image2 VARCHAR(255) NOT NULL,
    FOREIGN KEY (email) REFERENCES users(email) -- Add the foreign key constraint
*/

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sabi5437',
    database: 'olli', // Replace 'your_database_name' with the actual database name
}).promise();


async function insertUser(email, username, password, fName, lName, user_type, phone_number, children) {
    try {
        await connection.query(
            'INSERT INTO users (email, username, password, fName, lName, user_type, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [email, username, password, fName, lName, user_type, phone_number]
        );
        if (user_type === "parent") {
            children.forEach(async child => {
                await connection.query(
                    'INSERT INTO sn (username, email, image1, image2, firstNameSN, lastNameSN) VALUES (?, ?, ?, ?, ?, ?)',
                    [child.username, email, child.image1, child.image2, child.firstNameSN, child.lastNameSN]
                );
            });

        }
        return { error: false }
        console.log('User inserted successfully');

    } catch (error) {
        console.error('Error inserting user:', error);
        return { error: true }
    }
}

async function getUserByEmail(email) {
    try {
        const [rows] = await connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );
        if (rows.length > 0) {
            return rows[0]; // Return the first row (user) found
        } else {
            return null; // If no user found with the given email
        }
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
}

async function getSNByUsername(username) {
    try {
        const [rows] = await connection.query(
            'SELECT * FROM sn WHERE username = ?',
            [username]
        );

        if (rows.length > 0) {
            return rows[0]; // Return the first row (SN) found
        } else {
            return null; // If no SN found with the given username
        }
    } catch (error) {
        return null
    }
}



module.exports = {
    insertUser,
    getUserByEmail,
    getSNByUsername
}