// import React, { useState, useEffect } from 'react';


// /**
//  * keep in mind newsletters are only available for verified users, and the editing function is only available for 
//  * administrators. 
//  * 
//  * Newsletter properties to be stored in the database: imagePath, title, paragraph, date
//  *  */ 



// function NewsLetter() {
// 	const [newsLetters, setNewsLetters] = useState([]); 
// 	const [isAdmin, setIsAdmin] = useState(False); // WILL CHANGE TO  REFERENCE THE LOGGED IN USER LATER

// 	// Things to execute when the component mounts. 
// 	useEffect(() => {
// 		setNewsLetters(); 
// 	}, []);




// 	function setNewsLetters(){
// 		// Used to return all news letters and put them into the newsLetters hook. 
// 		fetch('/getAllNewsLetters')
// 		.then(response => response.json())
// 		.then(data => {
// 		if(data){
// 			setNewsLetters(data);  
// 		}
// 		})
// 		.catch(error => console.error('Error fetching news Letters:', error));
// 	}




// 	return (

// 		<div id = "allNewsLettersContainer">
// 			{newsLetters.map((newsLetter, index) => {

// 				<div key = {index}>
// 					{/** If the user is an admin they are allowed to delete and edit newsletters */}
// 					{isAdmin && (
// 						<>
// 						<button>Edit This post</button>
// 						<button>Delete this News Letter</button>
// 						</>
// 					)}


// 				<h3>{newsLetter.date}</h3>
// 				{/** Checking if there is an image for this news letter before tyring to render it */}
// 				{newsLetter.imagePath && (
// 					<img src={newsLetter.imagePath} />
// 				)}
// 				<h1>{newsLetter.title}</h1>
// 				<p>{newsLetter.paragraph}</p>

// 				</div>
// 			})}
// 		</div>


// 	); 

// }





// export default NewsLetter; 
