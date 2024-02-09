import React from 'react';
import '../../CSS/SignUp/SignUp.css';
import GuestUserBar from '../NavBars/GuestUserBar';
import { useState } from 'react';

const SignUpPage = () => {

  // these are for the special needs users.
  const [addUser, setAddUser] = useState(false);
  const [usernameSN, setUsernameSN] = useState('');
  const [firstNameSN, setFirstNameSN] = useState('');
  const [lastNameSN, setLastNameSN] = useState('');
  const [snUsersAdded, setSNUsersAdded] = useState([]);
  const [snSaveFailMessage, setSNSaveFailMessage] = useState('')

  // these are for the regular guardians of the special needs users. 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [saveFailMessage, setSaveFailMessage] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confPassword, setConfirmPassword] = useState('');

  // function used to open the content to add a new special needs user. 
  function openAddUserContent() {
    setAddUser(!addUser);
    // This will need to load the guys that were added. 
  }




  function saveSNUserToDatabase() {
    if (usernameSN == '') {
      setSNSaveFailMessage('You must enter a username');
    } else if (usernameSN.length < 8) {
      setSNSaveFailMessage('Your username must contain at least 8 characters');
    } else if (firstNameSN == '') {
      setSNSaveFailMessage('You must enter a first name');
    } else if (lastNameSN == '') {
      setSNSaveFailMessage('You must enter a last name');
    } else {
      setUsernameSN('');
      setFirstNameSN('');
      setLastNameSN('');
      setSNSaveFailMessage('');
      setSNUsersAdded([...snUsersAdded, { username: usernameSN, firstNameSN: firstNameSN, lastNameSN: lastNameSN }])
      console.log(snUsersAdded);
    }
  }



  function deleteSNUser(index) {
    // Create a copy of the snUsersAdded array
    const updatedUsers = [...snUsersAdded];
    // Remove the user at the specified index
    updatedUsers.splice(index, 1);
    // Update the state with the new array without the deleted user
    setSNUsersAdded(updatedUsers);
  }

  function handleDeleteClick(e, index) {
    // Prevent the click event from propagating to the parent div
    e.stopPropagation();
    // Delete the user
    deleteSNUser(index);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  function checkInput() {
    if (email == '') {
      setSaveFailMessage('You must enter an email');
    } else if (!emailRegex.test(email)) {
      setSaveFailMessage('Incorrect email format');
    } else if (username == '') {
      setSaveFailMessage('You must enter a username');
    } else if (username.length < 8) {
      setSaveFailMessage('Your username must contain at least 8 characters');
    } else if (firstName == '') {
      setSaveFailMessage('You must enter a first name');
    } else if (lastName == '') {
      setSaveFailMessage('You must enter a last name');
    } else if (password == '') {
      setSaveFailMessage('You must enter a password');
    } else if (confPassword == '') {
      setSaveFailMessage('You must confirm the password');
    } else if (confPassword !== password) {
      setSaveFailMessage('The passwords must match');
    } else {
      setSaveFailMessage('');
    }
  }





  return (
    <div>
      {/* <GuestUserBar /> */}

      <div className="signup-container">

        <div className="signup-box">
          <h2>Guardian Sign Up</h2>
          <input type="text" id="email" name="email" placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input type="text" id="username" name="username" placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input type="text" id="guardian_full_name" name="guardian_full_name" placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input type="text" id="dependent_full_name" name="dependent_full_name" placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input type="password" id="password" name="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password"
            value={confPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="SNFailMessage">{saveFailMessage}</p>

          <button onClick={() => openAddUserContent()}>Add Special Needs Users</button>



          {addUser && (
            <div className="sn-signup">
              <h2>Special Needs user information</h2>
              <input type="text" id="username" name="username" placeholder="Username"
                value={usernameSN}
                onChange={(e) => setUsernameSN(e.target.value)}
              />
              <input type="text" id="firstName" name="lastname" placeholder="First name"
                value={firstNameSN}
                onChange={(e) => setFirstNameSN(e.target.value)}
              />
              <input type="text" id="lastName" name="lastname" placeholder="Last name"
                value={lastNameSN}
                onChange={(e) => setLastNameSN(e.target.value)}
              />
              <p className="SNFailMessage">{snSaveFailMessage}</p>
              <button onClick={() => saveSNUserToDatabase()}>Save this user</button>
            </div>
          )}



          {snUsersAdded && (
            <div>
              {snUsersAdded.map((user, index) => (
                <div key={index} className="savedSNUser" >
                  <p>Added {user.firstNameSN} {user.lastNameSN}</p>
                  <button className='deleteSNUser' onClick={(e) => handleDeleteClick(e, index)}>X</button>
                </div>
              ))}
            </div>
          )}

          <button onClick={() => checkInput()}>Register</button>

        </div>

        <div className="signup-link">
          <p>Already have an account? <a href="/Login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
