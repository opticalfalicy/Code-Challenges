// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

// He knows that the time is 11:38

// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.

function WhatIsTheTime(timeInMirror)
{
            //"05:25" --> "06:35";
            // Happy Coding
            
            console.log(timeInMirror.split(":"));
            let sT = timeInMirror.split(":");
            let hr = parseInt(sT[0]);
            let sec = parseInt(sT[1]);
            
            if(hr === 12){
              hr = 0;
            }
            if(sec === 0){
              sec = 60;
              hr -= 1;
            }
            let fT = [(11 - hr).toString(),
            (60 - sec).toString()];
            if(fT[0] === '0'){
              fT[0] = '12';
            }
            if(fT[0].length == 1){
              fT[0] = '0' + fT[0];
            }
            if(fT[1].length == 1){
              fT[1] = '0' + fT[1];
            }
            return fT.join(':');
            
            
            
}