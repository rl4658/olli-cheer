/*

participants
    pick_time VARCHAR(255) NOT NULL,
    drop_time VARCHAR(255) NOT NULL,
    title VARCHAR(64) NOT NULL,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (title, username),  
    FOREIGN KEY (title) REFERENCES events(title),  
    FOREIGN KEY (username) REFERENCES sn(username) 

    events
     title VARCHAR(64) NOT NULL PRIMARY KEY,
    descrip VARCHAR(3500) NOT NULL, 
    short_descrip VARCHAR(1000) NOT NULL,
    image blob NOT NULL

*/



const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '34.41.54.58',
    user: 'root',
    password: '',
    database: 'olli',
}).promise();

async function getEventByTitle(title) {
    try {
        const [rows] = await connection.query(
            'SELECT * FROM events WHERE title = ?',
            [title]

        );
        if (rows.length > 0) {
            return rows[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting entry:', error);
        throw error;
    }
}

async function insertEvent(title, descrip, shortDescrip, image) {
    try {

        const query = 'INSERT INTO events (title, descrip, short_descrip, image) VALUES (?, ?, ?, ?)';
        const values = [title, descrip, shortDescrip, image];
        await connection.query(query, values);
        console.log('Entry inserted successfully.');

    } catch (error) {
        console.error('Error inserting entry:', error);
        throw error;
    }
}

// Insert function
async function EventSignUp(pickTime, dropTime, title, username) {
    try {

        await connection.query(
            'INSERT INTO participants (pick_time, drop_time, title, username) VALUES (?, ?, ?, ?)',
            [pickTime, dropTime, title, username]
        );
        console.log(`${username} has Signed Up For ${title}.`);

    } catch (error) {
        console.error('DB Error cannot Sign Up for Event:', error);
        throw error;
    }
}

// Get function
async function getParticipant(title, username) {
    try {

        const [rows] = await connection.query(
            'SELECT * FROM participants WHERE title = ? AND username = ?',
            [title, username]
        );

        if (rows.length > 0) {
            return rows[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error('DB Error getting participant:', error);
        throw error;
    }
}


module.exports = {
    insertEvent,
    getEventByTitle,
    EventSignUp,
    getParticipant
}
