import { useState, useCallback, useEffect } from "react";
import React from "react";


export default function ManageUsers(user){

// stores the list of users.  
const [users, setUsers] = useState([]); 
const [openedUsers, setOpenedUsers] = useState([]); 

// for storing the new user's information: 
const [newUserInfo, setNewUserInfo] = useState({
	username: "",
	email: "",
	phone_number: "",
});


useEffect(() => {
	fetchParents(); 
}, [])






const fetchParents = useCallback(async () => {

	const response = await fetch(`/adminControls/getParents`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${user.accessToken}`
		}
	});
	if (!response.ok) {
		return
	}
	const data = await response.json()
	console.log('Data received from server:', data);

	if (data.error) {
		console.log('no users were found')
		return
	}
	setUsers(data.users); 
}, [user.accessToken]); 



// 'INSERT INTO users (email, username, password, fName, lName, user_type, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?)',


const setOpenedUser = (email) => {
	setOpenedUsers((prevOpenedUsers) => {
		// closing a user
		if (prevOpenedUsers.includes(email)) {
			return prevOpenedUsers.filter((userEmail) => userEmail !== email);

		} else {
			return [...prevOpenedUsers, email];
		}
	});
};

const handleInputChange = (e) => {
	const { name, value } = e.target;
	setNewUserInfo((prevUserInfo) => ({
		...prevUserInfo,
		[name]: value,
	}));
};



// router.put("/updateUser", auth, async (req, res) => {
//     const username = req.body.username
//     const password = await bcrypt.hash(req.body.password, 10)
//     const phone_number = req.body.phone_number

//     try {
//         await userDB.updateUser(req.user.email, username, password, phone_number)
//         res.json({ error: false })
//     } catch (error) {
//         res.json({ error: true })
//     }

// })

const updateUser = async (user) => {
	try {
		const response = await fetch(`/users/updateUser`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${user.accessToken}`,
			},
			body: JSON.stringify({
				password: user.password, // password remains the same (cannot change it)
				// if any of these are empty they use the previous value. 
				username: newUserInfo.username || user.username,
				email: newUserInfo.email || user.email,
				phone_number: newUserInfo.phone_number || user.phone_number,
			}),
		});
		if (!response.ok) {
			console.error("Failed to update user");
			return;
		}
		// Refresh the user list
		fetchParents();
	} catch (error) {
		console.error("Error updating user:", error);
	}
};





const deleteUser = async (email) => {
    try {
        const response = await fetch(`/adminControls/deleteUser/${email}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`
            }
        });
        if (!response.ok) {
            console.error("Failed to delete user");
            return;
        }
        const data = await response.json();
        if (data.error) {
            console.error("Error deleting user");
            return;
        }
		fetchParents(); 
    } catch (error) {
        console.error("Error deleting user:", error);
        return;
    }
};

// Example usage:
// const success = await deleteUser("username");
// console.log("User deletion success:", success);







return (
	<div>
	<h1 color="black">Click on users to manage their account information: </h1>
	{users &&
		users.map((user) => (
			<div key={user.email}>
				<p onClick={() => setOpenedUser(user.email)}>
					{user.fName} {user.lName}
				</p>
				{openedUsers.includes(user.email) && (
					<div>
						<p>
							{user.fName}'s Information:
						</p>
						<p>
							Username: {user.username}
							<input
								type="text"
								name="username"
								placeholder="New Username"
								value={newUserInfo.username}
								onChange={handleInputChange}
							/>
						</p>
						<p>
							Email: {user.email}
							<input
								type="email"
								name="email"
								placeholder="New Email"
								value={newUserInfo.email}
								// onChange={handleInputChange} Currently updateUser uses this email to find 
								// the user in the db, a new backend function needs to be created to update emails using 
								// the previous one and the new one, and I am tired. (Seth)
							/>
						</p>
						<p>
							Phone Number: {user.phone_number}
							<input
								type="tel"
								name="phone_number"
								placeholder="New Phone Number"
								value={newUserInfo.phone_number}
								onChange={handleInputChange}
							/>
						</p>
						<button onClick={() => {updateUser(user)}}> {/** password stays the same */}
							Update User
						</button>
						<button onClick={() => {deleteUser(user.email)}}>
							Delete User
						</button>
					</div>
				)}
			</div>
		))}
</div>
)
}