import React from "react";
// import axios from 'axios';


// axios.post("/api/choices", { name, user_name, email, password }, function(data) { 
// });



const newUser = () => {
    return (
      <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
}

export default newUser;