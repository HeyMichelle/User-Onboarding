import React, {useState} from 'react';
import styled from 'styled-components';

export default function Form() {
    // form input state-management
    const [formState, setFormState] = useState({
        name: ""
    });

    // onSubmit function
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
    }

    // onChange function
    const inputChange = e => {
        console.log("input changed!", e.target.value);
        setFormState({ name: e.target.value });
    }


    const FormWrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 300px;
        margin: 0 auto;
    `;

    return (
        <FormWrapper> 
            <form onSubmit={formSubmit}>
                <label htmlFor="name"> 
                    Name 
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </label><br />

                <label htmlFor="email"> 
                    Email 
                    <input type="text" name="email" id="email" placeholder="Email"/>
                </label><br />

                <label htmlFor="password"> 
                    Password 
                    <input type="text" name="password" id="password" placeholder="Password"/>
                </label><br />
                <label htmlFor="ToS"> 
                    Terms of Service 
                    <input type="checkbox" name="ToS" />
                </label>

                {/* <input type="submit" value="Submit"></input> */}
                <button>Submit</button>

            </form>
        </FormWrapper>
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

