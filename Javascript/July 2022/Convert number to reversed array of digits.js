function digitize(n) {
    // initiate variable
      let x = n;
      // seperate integer into an array
      let xray = Array.from(String(n), Number);
      // test result
      console.log(xray);
      // reverse array
      xray = xray.reverse();
      // test result
      console.log(xray);
      // return result
      return xray;
    
  }