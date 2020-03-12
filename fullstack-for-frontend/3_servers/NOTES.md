# Servers

  # VIM - VI improved
  * This is a text editor on every server you can use to access/edit/create files
  * VIM has different modes:
    * Insert Mode - Text editing
      * `i`
    * Command Mode - Primary mode
      * `ESC`
    * Last Line Mode - Searching, saving, exiting
      * `:`
  * How to quit VIM: `:q!`
  * VIM commands cheat sheet: https://linuxmoz.com/vi-commands-cheat-sheet/
  * You cannot write anything in your computers root directory.

  * Essential Commands
    * `man vi` - opens the VIM manual
    * `vi` - opens VIM
    * `vi <filename>` - opens VIM and creates a new file
    * `wq`: - write and quit
    * `set number` and `set no number` - creates line numbers / removes line numbers

# What does a server do?
  * It serves content and listens for requests for content

# Create a simple server using VIM
  * `vi simpleServer.js`
  * press `i` to go into insert mode

# Data Centers and the Cloud
  * Servers have really nice hardware that is not typical for consumer hardware.
  * They are stored in data centers, very secure/clean locations for server stacks.

  * The Cloud allows for applications to be loaded in different locations around the world, 
    even if the website was built in asia, it can be hosted on servers in North America for 
    faster access.

  * `Elastic Computing`, allowing software to scale automatically with traffic so you can 
    maintain a decent cost in serving your application.

  * Most people just need a fraction of a fraction of a server to run their application,
    so Servers are split into peices that can run different processes. The different slices
    don't have access to one another so that there is `process isolation`.
      - This is a `VPS`, a `Virtual Private Server`.

# Operating Systems
  * Create a new `droplet` on digital ocean and you'll need to pick an operating system for it.
     * A `Droplet` on digital ocean is a fraction of a server.
  * We'll be using linux's Ubuntu that uses unix.
  * Two types of server operating systems, `Windows` & `Unix`.
    - They work very differently
  * We use a flavor of unix called Linux that is more user friendly
    - Other unix types are BSD and Solaris. MacOS is a sub-set of BSD.
    - Linux had a bunch of distributions including `ubuntu`, `debian`, `fedora`, and `red hat`.
      We'll be using Ubuntu which is the most popular.

# Linux
  * Linux works on the principle of 2 things.
  * The `Kernal` is the layer that talks to the actual machine hardware.
  * The `Utilities` are tiny applications that generally do one thing and provide the ways
    to interact with the Kernal.
    - Everything we'll do here is through the Utilities layer.
  * Its best to use an `LTS: long term support` server version for production servers so that
    it is maintained overtime despite updates to ubuntu.

# SSH - Secure Socket Shell
  * While passwords are tempting, SSH is preffered.
  * A very large key that is, as of now, unbreakable.
  * Made up of 2 parts, a `Public key` and a `Private key`.
    - Private key stays on your device
    - Public key gets sent to the server.
  * Everything gets encrypted with the private key, and then goes in transit, (sometimes
    referred to as a pipe, it is an unbreakable transfer of data).
    - Its the best one way encryption we have.  Anyone could encrypt something with the public
      key, and the only way to decrypt it is to have the private key.

# Create an SSH key
  * Navigate to your .ssh directory on MAC.
    * Move into ..sh diretcory  `cd ~/.ssh`
    * List files: `ls`
    * Generate ssh key: `ssh-keygen`
      * Give it a name (make sure not to use an existing name or else you will overwrite it)
      * Give it a passphrase if you are going to use it a lot.
      * It gives you back a fingerprint and a randomart image.
    * You can search for something with `ls | grep fsfe_course`, where fsfe_course is the regex
      file match you are looking for.
    * Each keygen will create 2 files, a private name `fsfe_course` in this case, and a the public
      key `fsfe_course.pub`.
      - `cat` the filename to see the key, usually not suggested for the private key.
      - `pbcopy < ~/.ssh/fsfe_course.pub` to copy the text for pasting.
   
# Connecting to the server
  * After creating the droplet on digital ocean, it will give you an IP address to the server.
  * You can use your SSH key to ssh into the server (secure connect to the user using your root user)
  * `ssh root@SERVER_IP`
    * You will get a message saying the authenticity of the host cannot be established, which is
      just letting you know your machine has never communicated with this server before.
    * It will give you a fingerprint and then ask if you want to continue connecting.
      - This will get denied because the default key/pair is id_ssh, so ssh will try to look there
        first and if the key it finds doesn't match the public key on the server, it says
        I don't know.
      - What we need to do then is `ssh -i fsfe_course root@SERVER_IP` so it knows which SSH key to
        compare against the SSH key set on the server.
    * You can say `ssh root@SERVER_IP -v` to get additional information on the server.

# SSH Keychain
  * A list of ssh keys that SSH will automatically look at when trying to authenticate a key.  
    Some systems automatically add your ssh key to the keychain when you successfully ssh connect
    to your server.
  * To make sure keychain is active: `vi ~/.ssh/config`
  * To add private key to keychain: `ssh-add -K ~/.ssh/fsfe`

* Now you can get on your server with the `ssh root@SERVER_IP` command, and by default the 
  command line will end with a `#`, this means we're on the server as a `super user`, or 
  `root` user.
  - This is dangerous because it will let you do whatever you want, so we want to switch out
    of superuser.
  - Type `exit` to exit out of the server on your terminal.
