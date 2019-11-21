// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


function domainName(url){
    //your code here
    let uArr = url.split('');
    
    for(let i = 0; i <= uArr.length; i++){
      if(uArr[i] == '.' && uArr[i-1] == 'w' || uArr[i] == '/' && uArr[i-1] == '/' && uArr[i+1] !== 'w'){
        uArr.splice(0, i+1)
      }
    }
    
    for(let j = 0; j <= uArr.length; j++){
        if (uArr[j] == '.'){
        uArr.splice(j, uArr.length)
      }
    }
    
    return uArr.join('');
  
}