use std::fmt;

#[derive(Debug)]
pub enum AuthError {
    InvalidCredentials,
    UserNotFound,
}

impl fmt::Display for AuthError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            AuthError::InvalidCredentials => write!(f, "Invalid email or password"),
            AuthError::UserNotFound => write!(f, "User not found"),
        }
    }
}
