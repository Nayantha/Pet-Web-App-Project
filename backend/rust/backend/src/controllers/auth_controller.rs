use actix_web::{web, HttpResponse, Responder};
use serde::Deserialize;

use crate::logic::auth_logic::AuthLogic;
use crate::models::{ApiResponse, AuthError};

// Define structures to deserialize request data.
#[derive(Debug, Deserialize)]
pub struct SignupData {
    email: String,
    password: String,
}

#[derive(Debug, Deserialize)]
pub struct LoginData {
    email: String,
    password: String,
}

// Define the AuthController struct to manage authentication-related controllers.
pub struct AuthController {
    pub auth_logic: AuthLogic,
}

impl AuthController {
    // Create a new instance of AuthController with the provided AuthLogic instance.
    pub fn new(auth_logic: AuthLogic) -> AuthController {
        AuthController { auth_logic }
    }

    // Handle user signup requests.
    pub fn signup(&self, data: web::Json) -> impl Responder {
        match self.auth_logic.register(data.email.clone(), data.password.clone()) {
            Ok(_) => HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: Some("Registration successful".to_string()),
                error: None,
            }),
            Err(err) => HttpResponse::BadRequest().json(ApiResponse {
                success: false,
                data: None,
                error: Some(err),
            }),
        }
    }

    // Handle user login requests.
    pub fn login(&self, data: web::Json) -> impl Responder {
        match self.auth_logic.login(data.email.clone(), data.password.clone()) {
            Ok(user) => HttpResponse::Ok().json(ApiResponse {
                success: true,
                data: Some(format!("Welcome, {}", user.email)),
                error: None,
            }),
            Err(err) => HttpResponse::Unauthorized().json(ApiResponse {
                success: false,
                data: None,
                error: Some(err.to_string()),
            }),
        }
    }

    // Handle user logout requests.
    pub fn logout(&self) -> impl Responder {
        HttpResponse::Ok().json(ApiResponse {
            success: true,
            data: Some("Logout successful".to_string()),
            error: None,
        })
    }
}