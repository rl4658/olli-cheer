/*
  id INT AUTO_INCREMENT PRIMARY KEY,
    image_name VARCHAR(255),
    image LONGBLOB NOT NULL, 
    current_letter Boolean NOT NULL
*/
const mysql = require('mysql2');
const connection = mysql.createConnection({
    socketPath: '/cloudsql/se3350-group-40-416518:us-central1:olli',
    connectTimeout: 20000,
    user: 'root',
    password: 'Sabi5437',
    database: 'olli',
}).promise();

async function addNewsletter(imageName, image, isCurrent) {
    try {
        const query = 'INSERT INTO newsletter (image_name, image, current_letter) VALUES (?, ?, ?)';
        const values = [imageName, image, isCurrent];
        await connection.query(query, values);
        console.log('Newsletter image added successfully.');

    } catch (error) {
        console.error('Error adding newsletter image:', error);
        throw error;
    }
}

// Get function
async function getCurrentNewsletterImage() {
    try {
        const query = 'SELECT * FROM newsletter WHERE current_letter = true';
        const [rows] = await connection.query(query);

        if (rows.length > 0) {
            return rows[0]; // Return the first row (newsletter image) found
        } else {
            return null; // If no current newsletter image found
        }
    } catch (error) {
        console.error('Error getting current newsletter image:', error);
        throw error;
    }
}
async function getPastNewsletterImage() {
    try {
        const query = 'SELECT * FROM newsletter WHERE current_letter = false';
        const [rows] = await connection.query(query);

        if (rows.length > 0) {
            return rows; // Return the first row (newsletter image) found
        } else {
            return null; // If no current newsletter image found
        }
    } catch (error) {
        console.error('Error getting current newsletter image:', error);
        throw error;
    }
}

module.exports = {
    addNewsletter,
    getPastNewsletterImage,
    getCurrentNewsletterImage
}