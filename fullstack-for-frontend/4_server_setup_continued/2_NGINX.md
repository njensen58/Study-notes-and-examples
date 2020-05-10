# NGINX (engine-x)
  * Reverse Proxy
  * Web Server
  * Proxy Server
  * One of the most popular web servers out there. The other popular one
    is `Apache`, thought it is a little different and configures much
    differently.
    * If you are writing in PHP, you'll use Apache fo sho. (Lamp Stack)
  * NGINX is lightweight and extremely fast.

  * What does a web server do?
    * We have a basic server that doesn't do anything yet.
    * NGINX takes the request and makes sure it is proxied to the right place.

  # Install NGINX
    * Log into your server, (`ssh nate@IPADDRESS`) and run: `sudo apt install nginx`
      * pword: jen123
    * Then Start NGINX: `sudo service nginx start`
      * Now if you visit your url: culture.surf, you'll see a Welcome to nginx message!
    
  # Configure NGINX
    * show nginx config
      - `sudo less /etc/nginx/sites-available/default`
    * The base directory for all requests will go to: `/var/www/html`