function driver(data) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let forename = data[0];
  let middleName = data[1]; // (if any)
  let surname = data[2];
  let dOB = data[3]; // (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)

  let gender = data[4]; // M-Male or F-Female
  let license = '';

  function get0105() {
    let firstFive = surname.slice(0,5).toUpperCase();
    for(let x = firstFive.length; x < 5; x++) {
      firstFive = firstFive + '9';
    }
    console.log(firstFive);
    return firstFive;
  }

  function get06() {
    let decade = dOB.substr(dOB.length - 2, 1);
    console.log(decade);
    return decade;
  }

  function get0708() {
    let month = dOB.substr(3, 3);
    for (var x = 0; x < 12; x++) {
      if(month === months[x]) {
        if(gender === "F") {
          console.log(month, gender, x + 51);
          return x + 51;
        } else {
          x++;
          if (x.toString().length === 1) {
            x = '0' + x;
          }
          console.log(month, gender, x);
          return x;
        }
      }
    }
  }

  function get0910() {
    return dOB.substr(0, 2);
  }

  function get11() {
    return dOB.substr(dOB.length - 1);
  }

  function get1213() {
    let firstInit = forename.substr(0, 1);
    let middleInit = '';
    if (middleName.length > 0) {
      middleInit = middleName.substr(0,1);
    } else {
      middleInit = 9;
    }
    return firstInit + middleInit;
  }

  function get14() {
    return 9;
  }

  function get1516() {
    return 'AA';
  }

  license = get0105() + get06() + get0708() + get0910() + get11() + get1213() + get14() + get1516();

  return license;
}

let data = ["John","James","Smith","01-Jan-2000","M"];

driver(data);

document.getElementById("solution").innerHTML = driver(data);

/*
data = ["John","James","Smith","01-Jan-2000","M"]
Test.expect(driver(data) == "SMITH001010JJ9AA", "Should return 'SMITH001010JJ9AA'")

data = ["Johanna","","Gibbs","13-Dec-1981","F"]
Test.expect(driver(data) == "GIBBS862131J99AA", "Should return 'GIBBS862131J99AA'")

data = ["Andrew","Robert","Lee","02-September-1981","M"]
Test.expect(driver(data) == "LEE99809021AR9AA", "Should return 'LEE99809021AR9AA'")
*/
