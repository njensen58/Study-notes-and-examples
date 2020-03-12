# Write up for Course: https://btholt.github.io/four-semesters-of-cs-part-two/

# Bloom Filters - (named after a guy with the last name of Bloom..  Orlando?)
  * Bloom filters are an interesting data structure which are designed to tell you quickly and efficiently if 
    an item is in a set.
  * In exchange for being really fast and memory efficient, bloom filters trade off the fact that it 
    can't tell you definitely if an item is in the set; it can only tell you definitely that item is not 
    in the set. Stated differently, bloom filters have a false positive rate but do not have false negatives. 
  * Very compact memory and does a very fast lookup to let you know if something is Not in a list.
  # How they work
    * Imagine you have an array with ten elements in it. Every element in the array is a 0 bit. This is an 
      empty bloom filter. Now we want to add "Brian" to the array. I'm going to run "Brian" through three different 
      hashing functions (see previous course for explanation on hashing functions.) Each hashing function should be 
      fast and definitely not cryptographically secure (which are by-design slow.) This means don't use SHA or MD5. 
      They should also have a uniform distribution as much as possible.
    * Okay, so I run my string through three different hashing functions and they give me 2, 5, and 8 
      (I'm making up the numbers; we won't implement hashing functions so it doesn't really matter how they work.) 
      I'll flip all those bits at those indexes so my new array is [0, 0, 1, 0, 0, 1, 0, 0, 1, 0].
    * After doing this, I'll check to see if "Sarah" is in the array. After running through the hashing function, 
      they give 2, 2, and 4. 2 is flipped but 4 is not, so I can definitively say that "Sarah" is not in the data set.
    * So let's add one more item to the array, "Simona". The indexes we get back 0, 4, and 5. So now our array is 
      [1, 0, 1, 0, 1, 1, 0, 0, 1, 0]. We flip both 0 and 4 indexes and 5 was already flipped so we do nothing to it. 
      Now what happens if we check "Sarah" again? This time we'll get a false positive that "Sarah" is in the dataset.
      That's why the two answers you can get back from the question "Is X in the bloom filter" are no and maybe.
      That's it!
  # Use Example
    * How the site 'medium.com' gives article recommendations.  It does not want to show you articles that you have already
      been recommended in the past, so it uses a bloom filter to check whether or not articles are NOT in your "already seen" 
      list or have they read it before.  If they haven't you can view it, and that adds it to the list of things you've seen.
    * So you can get a false positive of "Maybe they've seen this", and in that case they just treat it as a "already seen" and
      don't show it to you.
  # Bloom filters use multiple (different) hashing functions
    * My explanation:  An array of 0's is used to keep track of what is definitely not in the array.  When an entry goes through
      the hashing functions, it outputs different index numbers that we can then compare against the array.  If the item at the
      index in the array is a 0, it means the item doesnt exist.  If its a 1, it might exist.  It might exist because it is 
      possible that another entry when hashed output the same index number so really we're seeing the confirmation of something
      else existing in the array, not the current item we're checking on.
    * Here is an example bloom filter array: [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0]
      * If I search for "john", that string goes through the hashing functions and outputs 1 and 4. 
      * when checking the array, i see indexes 1 and 4 are 0 meaning "John" is absolutely not in the array.
      * If it instead ouput 2 and 4, "John" is not in the array as both of those indexes would be 1 if he was.
      * If it output 2 and 6, "John" might be in the array.
  # You can never remove anything you have added to a bloom filter.
  # You need to allocate enough memory upfront as you cannot resize a bloom filter.