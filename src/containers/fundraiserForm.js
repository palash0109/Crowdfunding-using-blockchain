import React, {useState} from 'react';

const FundraiserForm = () => {
    return(
        <div className="main">
            <Form className="" onSubmit={onSubmitHandler}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder="abc@xyz.com"
                        onChange={(input) => onChangeHandler(input, 'email')}/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="eg. asdxyz" 
                    minLength="6"
                    onChange={(input) => onChangeHandler(input, 'password')}/>
                </Form.Group>
                <Button variant="success" className="logIn-button" >Log In</Button>
                <Form.Group className="signUp-text">
                    <Form.Text>Create an account?<a href="/signUp">  signUp</a></Form.Text>
                </Form.Group>
            </Form>
    </div>
    )
}

export default FundraiserForm