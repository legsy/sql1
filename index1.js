
function getRandomNumber() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const randomValue = Math.random();
        const error = randomValue > 0.5 ? true : false;
        if (error) {
          reject(new Error('Ooops, something broke!'));
        } else {
          resolve(randomValue);
        }
      }, 2000);
    }); 
  };

async function logNumber() {
    let number;
    try {
      number = await getRandomNumber();
    } catch (err) {
      number = 42;
    }
    console.log(number);
  };

logNumber();