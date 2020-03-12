# How does the internet work?
  * Internet: A system of globally interconneccted devices
  * Intranet: A private internet
    * A `VPN` is a private internet
  
  * `Internet Protocol`: (IP)
  * `IP Address`: A label assigned to an internet connected device.
  * Its a system of trust with protocols that everyone decided to collectively use.
  * `IPv4`: 8.8.8.8
    - We've run out of standard IP addresses with the amount of connected devices.
  * `IPv6`: 2001:4860:4860:8888
    - Current version of IP addresses, has 340 undecillion options so we wont run out! (hopefully)
  * `TCP: Transmission Control Protocol` - Standardizes how computers talk to each other
    * TCP is lossless which means if you send information over TCP it's going to make it.
    * It has things like error correction and error checking
  * `UDP: User Datagram Protocol` - Very similar to TCP with some noteable exceptions:
    * Can be lossless, it will attempt to send you information but doesn't care whether you get it
      or not.
    * A one-way blast of information, so its `faster than TCP` but is not lossless.

  # SEE PING EXERCISE BELOW
    
  * `DNS: Domain Name System` - ICANN runs this domain system. 
    * Its an intelligent internet phonebook.
    * DNS says "what is the closest server this request resolves to", so all it does is map domain
      names to IP addresses.
  
  * Web address parts: EX: `blog.nate.com`
    * `.com` is the TLD: Top Level Domain
      * TLDs are owned by specific companies, entities or countries.
    * `.nate` is the domain
    * `blog.nate.com` is the subdomain
      * You would use a subdomain instead of a path as it will denote it is a different site, not 
        just a different page on the same site.

  * `Nameservers`: Map domains to IP addresses.

  # SEE TRACEROUTES EXERCISE BELOW

  * If you run a traceroute on something like `frontendmasters.com` it may not resolve.
  * `ICMP: Internet Control Protocol`: Both `ping` and `traceroute` are using `ICMP`.
    * This is because you can explictly deny/ignore ICMP requests, and this is referred to as 
      `black holeing`.

  * `Packet` - The smallest bit of information you can transmit. Like an envelope with data.
    * Has info of where its going, where it came from, and the data it contains.
    * It mainly contains meta-data.
  * With `TCP`, trillions of these packets are sent with error correcting, so if a client recieves
    48 out of 50 packets in a request, it will let the server know so it can figure out which two
    got lost and resend them.

  * (Again) How does the internet work?
  * It runs on `TCPIP` protocols that everyone agrees upon and sends packets back and forth.
  * `Net Neutrality` is the idea that service providers can charge for these transfers depending
    on where they are going.

  # Exercise: PING
    * Example: type `ping twitter.com` in the terminal
      * All this is saying is, hey are you there? Then a response comes back to essentially say yes.

  # Exercise: Traceroutes
    * Example: type `traceroute google.com` in the terminal
      * Where `ping` just sends back a response letting you know the domain you requested is alive,
        `traceroutes` give you a map of every single hop to that point.
    * Traceroutes is great to diagnos network problems. You can see where the chain of communication
      breaks.
      * For example, if its something early in the process it will more than likely be your local network
        or site.
      * For something further into the process/near the end, you can safely assume the place you are trying
        to reach is down/load balancers not working/ etc.