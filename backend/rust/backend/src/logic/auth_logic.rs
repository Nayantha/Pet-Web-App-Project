use crate::models::{AuthError, User};

pub struct AuthLogic {
    pub users: Vec,
}

impl AuthLogic {
    // Create a new instance of AuthLogic with an empty list of users.
    pub fn new() -> AuthLogic {
        AuthLogic { users: vec![] }
    }

    // Register a new user with a unique email and password.
    pub fn register(&mut self, email: String, password: String) -> Result<(), String> {
        // Check if the email is already registered.
        if self.users.iter().any(|u| u.email == email) {
            return Err(format!("Email '{}' is already registered", email));
        }

        // Create a new user and add them to the list of users.
        let id = (self.users.len() + 1) as i32;
        let user = User { id, email, password };
        self.users.push(user);

        Ok(())
    }

    // Log in a user with a given email and password.
    pub fn login(&self, email: String, password: String) -> Result {
        // Find the user with a matching email.
        let user = self
            .users
            .iter()
            .find(|u| u.email == email)
            .ok_or(AuthError::UserNotFound)?;

        // Check if the provided password matches the user's password.
        if user.password != password {
            return Err(AuthError::InvalidCredentials);
        }

        Ok(user.clone())
    }
}