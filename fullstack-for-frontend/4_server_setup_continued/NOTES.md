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
    * So now we go to our domain provider, in this case `namecheap`, and tell it to use a custome DNS name server.
    