use actix_web::{dev, error::ErrorUnauthorized, http::header, web, FromRequest, HttpRequest, HttpResponse, ResponseError};
use futures_util::future::{err, ok, Ready};
use jsonwebtoken::{decode, DecodingKey, Validation};
use serde::{Deserialize, Serialize};

use crate::models::{ApiResponse, AuthError};

// Define the structure of JWT claims.
#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,
    exp: usize,
}

impl Claims {
    fn new(sub: String, exp: usize) -> Self {
        Self { sub, exp }
    }
}

// Implement the FromRequest trait to extract JWT claims from the request.
impl FromRequest for Claims {
    type Error = ErrorUnauthorized;
    type Future = Ready>;
    type Config = ();

    fn from_request(req: &HttpRequest, _payload: &mut dev::Payload) -> Self::Future {
        if let Some(header_value) = req.headers().get(header::AUTHORIZATION) {
            if let Ok(authorization) = header_value.to_str() {
                if let Some(token) = authorization.strip_prefix("Bearer ") {
                    if let Ok(token_data) = decode::(
                        token,
                        &DecodingKey::from_secret(b"secret"), // Replace with your secret key.
                        &Validation::default(),
                    ) {
                        return ok(token_data.claims);
                    }
                }
            }
        }
        err(ErrorUnauthorized(AuthError::Unauthorized.to_string()))
    }
}

// Define the JWT middleware function.
pub fn jwt_middleware(
    req: HttpRequest,
    payload: web::Payload,
) -> impl Future {
    let fut = web::dev::Either::A(req.into_future().map_err(|e| e.into()));

    let fut = fut.and_then(move |req| {
        let claims = match Claims::from_request(&req, &mut dev::Payload::None) {
            Ok(claims) => claims,
            Err(e) => return Err(e.into()),
        };
        Ok(req)
    });

    web::dev::Either::B(fut.boxed_local())
}