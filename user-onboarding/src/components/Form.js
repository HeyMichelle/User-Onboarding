import React, {useState} from 'react';
import styled from 'styled-components';



// questions for TL
// Mention formik prev. lessions vs. difference in this one


export default function Form() {
    // form input state-management
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        questions: "",
        dropdown: "",
        terms: false  
    });

    // onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
    }

    // onChange function
    const inputChanges = e => {
        console.log("input changed!", e.target.value);
        // for check boxes, apply below, not good for multiple selects
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }


    const FormWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 300px;
        margin: 0 auto;
        padding: 5%;
    `;
 
    return (
        <div className="container">
            Sign Up Email/Password Form
            <FormWrapper> 
                <form onSubmit={formSubmit}>
                    <label htmlFor="name"> 
                        Name:  
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name"
                            value={formState.name}
                            onChange={inputChanges} 
                        />
                    </label><br />

                    <label htmlFor="email"> 
                        Email:  
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            value={formState.email} 
                            onChange={inputChanges}
                        />
                    </label><br />

                    <label htmlFor="password"> 
                        Password:  
                        <input 
                            type="text" 
                            name="password" 
                            id="password" 
                            placeholder="Password"
                            value={formState.password} 
                            onChange={inputChanges}
                        />
                    </label><br /><br />

                    <label htmlFor="questions">
                        Questions, comments, concerns?
                        <textarea 
                            name="questions"
                            id=""
                            placeholder="Hit enter for multiple lines..."
                            onChange={inputChanges}
                        />
                    </label><br/>

                    <label htmlFor="dropdown">
                        Here is a dropdown <br />
                        <select 
                            value={formState.dropdown} 
                            name="dropdown" 
                            id="dropdown" 
                            onChange={inputChanges}
                            >
                                <option value="optionOne">Blue pill</option>
                                <option value="optionTwo">Red pill</option>
                        </select>
                    </label><br /> <br />

                    <label htmlFor="terms">
                        I agree to the Terms & Conditions
                        <input 
                            type="checkbox" 
                            name="terms"
                            id="terms"
                            checked={formState.value}
                            onChange={inputChanges} 
                                {/* terinary operator used for checkboxes in input change logic*/}
                        />
                    </label><br /><br />

                    {/* <input type="submit" value="Submit"></input> */}
                    <button>Submit</button>

                </form>
            </FormWrapper>
        </div>
    );
}

/**
## STEP 1 - Create Your Formik Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [ ] Name
- [ ] Email
- [ ] Password
- [ ] Terms of Service (checkbox)
- [ ] A Submit button to send our form data to the server.

*/

