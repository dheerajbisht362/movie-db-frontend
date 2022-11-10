# Movies-Search-App- FrontEnd

Live Deploy Link https://fir-movie-caf0c.web.app/

## Technology Used
   - Angular CLI: 14.2.9
   - @angular/material: ^14.2.6
   - typescript: ~4.7.2
   - rxjs: ~7.5.0

How to run server
-----------
## Development server

 - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
  The application will automatically reload if you change any of the source files.

## Features / Functionalities
 - Login 
      - Route /login 
      - When not logged in
      - Password - 8-16 char alphanumeric characters
 - Search for movies 
      - Route /search
      - Enabled after login
      - JWT token used for auth
 - LogOut
      - Route /login 
      - When already logged in
 
 
## Extra 
 JWT auth token is set in localStorage with key 'access_token'
 For SeachPage API calls Headers are set by interceptor as {authorization: authToken} 
 Router module stores routes for SPA
 
