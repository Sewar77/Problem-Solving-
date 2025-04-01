/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  let newUrl = url.replace(/^https?:\/\//, "").split("/")[0]; 
  if (newUrl.startsWith("www.")) {
    newUrl = newUrl.slice(4); 
  }

  let domainParts = newUrl.split(".");

  return domainParts[0];
}

console.log(domainName("https://www.cnet.com")); 