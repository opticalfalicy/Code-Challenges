function digitize(n) {
    //code here
    // initiate variable
      let x = n;
      // seperate x integer into an array
      let xray = Array.from(String(n), Number);
      // confirm result
      console.log(xray);
      // function to reverse the xray array
      xray = xray.reverse();
      // confirm result
      console.log(xray);
      // return result
      return xray;
    
  }