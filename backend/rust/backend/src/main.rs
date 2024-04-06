use actix_web::{get, App, HttpResponse, HttpServer, Responder};
mod models;
use models::user;

#[get("/health")]
async fn health_check() -> impl Responder {
    HttpResponse::Ok().finish()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let ip_address = "127.0.0.1";
    let port = 8080;
    let server_url = format!("http://{}:{}", ip_address, port);

    println!("Server is initializing...");
    println!("Server URL: {}", server_url);

    let server = HttpServer::new(|| {
        App::new()
            .service(health_check)
    })
    .bind(format!("{}:{}", ip_address, port))?
    .run();

    println!("Server started at {}", server_url);

    server.await
}
