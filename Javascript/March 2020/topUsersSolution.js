function idBestUsers(...args) {
    let data = args;
    
    let counts = {};
    let users = {};
    
    data.forEach((month, index) => {
      month.forEach(user => {
        if (!users[user]) users[user] = { months: {}, count: 0 }
        users[user].months[index] = true;
        users[user].count += 1;
      })
    })
    for (user in users) {
      let allMonths = Object.keys(users[user].months).length === data.length
      if (allMonths) {
        if (!counts[users[user].count]) counts[users[user].count] = [];
        counts[users[user].count].push(user);
      }
    }
    
    let result = [];
    for (count in counts) {
      result.unshift([Number(count), counts[count].sort()]);
    }
    
    return result;
}


// Solution by jocaron27