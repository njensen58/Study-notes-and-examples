# Server Setup
* After setting up the initial steps in part 3, we will now fully setup the server and user.
  * Type `whoami` in bash to see which user you currently are.
  * You typically never want to be on root.

# Buy a domain
  * You can serve everything off of a ip address but for a real application/site you need
    a domain.
  
# DNS Records
  * Domains get results via the name servers because those servers keeps records called
    DNS records.
  * Different types of records:
    * `A record`: Maps name to IP address
    * `CNAME`: Maps name to name
  * You can `Dig` a domain to see what records it has and who holds the records:
    * Ex: `dig vschool.io`, shows `A` record mapped to domain 104.198.14.52
    * If vschool had a `blog.vschool.io` subdomain you could dig, it would more than
      likely have a `CNAME` record pointing to `vschool.io`, and show `vschool.io`'s `A` record.

# Setting up our purchased domain
  * I bought `culture.surf` from `namecheap.com`.
  * We need to add 2 `A` records to it:  `@` and `www`
    - We'll use digital ocean to add domain
    - We'll update nameserver on namecheap
  * On digital ocean, select the droplet and go to networking to add your domain and start
    creating records for it.
  * Create the 2 records:
    * Create an `A` record for `@`.
    * Create an `A` record for `www`.
  * These two records now say that these specific domains `culture.surf` and `www.culture.surf` now 
    should direct to the ubuntu server droplet we're hosting.
    - However its not working yet because the server droplet isn't actually taking requests yet (no code) ,
      AND, we need to change the name server to give control to the hosting provider, essentially saying to 
      "I want digital ocean's name server, not yours".
    * So now we go to our domain provider, in this case `namecheap`, and tell it to use a customeDNS name server.
    * In the "Domain" section on namecheap, we use a custome DNS name server and paste in the 3 name 
      servers provided by digital ocean, namely: 
      - ns1.digitalocean.com.
      - ns2.digitalocean.com.
      - ns3.digitalocean.com.
    * This now lets digitial ocean's name server to do the routing when my url is requested.


  # Setting up the server to handle requests.
    * Things we need to do:
      1. Update software
      2. Create a new user
      3. Make that user a super user
      4. Enable login for new user
      5. Disable root login (root user)

  
    1. Updating software
      # First, login to your server on your console.
      # ssh -i <SSHKEY> root@SERVERIP
        - make sure you have cd to /.ssh locally before running this so you have
          relative access to your ssh key at ./.
      - Run these commands:
      - `Update software`: `apt update`
      - `Upgrade software`: `apt upgrade`
    
    2. Creating the new user
      - `Add new user`: `adduser $USERNAME`
        - I am adding a user name nate, so `adduser nate`.
        - pword: jen123

    3. Make that user a super user. 
        ( sudo is saying `super user do this` ) 
      - Add user to "sudo" group:
        `usermod -aG sudo $USERNAME`
      - Switch user:
        `su $USERNAME`
      - Check sudo access:
        `sudo cat /var/log/auth.log`

        - The `auth.log` of a ubuntu server is just a record of action people are trying to
          do with your sercer or log into your server.
          - Its crazy to see the amount of systems (possibly malicious) that have tried to access
            the server since it was created, which is why we don't use passwords or root user access.
          - You can run `sudo tail -f /var/log/auth.log` to see a current log of whats happening/whos trying to access your server
            - equivalent to a console.log for servers, best debugging tool.
            - the `-f` flag is "follow".

        # Change to home directory next.
          - type `cd ~` and then `pwd` to go to your user's home directory on the server.
    
    4. Enable login for new user
      * What we need to do is create an ssh directory so we can login as this new user after we've
        disabled root login.
      - Change to home directory: 
        `cd ~`
      - Create a new directory if it doesn't exist
        `mkdir -p ~/.ssh`
      - Create authorized_keys file and past PUBLIC key from the fsfe_course.pub
        ` vi ~/.ssh/authorized_keys`

    5. Disable root login
      * Now we are going to exit, and then exit to login ssh as our new user
        - Exiting one time puts us back to root because when we switch users that just put
          us in a new shell.
        - Exiting the second time will exit us out of the root.
        - Then we're going to ssh in with our new username
        - `exit` ,  then `exit`.
        - `ssh nate@IPADDRESS` will now log me in ssh as my new user.

      * Now that we are logged in as the new user ssh, we can disable root login.
        * First we make the authorized_keys ssh permissions readable/writeable by our user and certain
          file systems such as SSH daemon.
          `chmod 644 ~/.ssh/authorized_keys`
        * Then we disable root login with those perimissions
          `sudo vi /etc/ssh/sshd_config`
          - change PermitRootLogin to no then write/exit.
      * Now we just need to restart the ssh service for this to all take effect:
        - Restart ssh daemon:
          `sudo service sshd restart`

    * Now if you exit the server and try to login as root, you'll get a permission denied.