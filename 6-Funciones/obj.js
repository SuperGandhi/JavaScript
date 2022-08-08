function checkObj(obj, checkProp) {
    // Only change code below this line
  
    var myObj = {
      gift: "pony",
      pet: "kitten",
      bed: "sleigh",
      city: "Seattle"
    };
  
    return (obj.hasOwnProperty(checkProp)) ? myObj[checkProp] : "Not Found";
  
    // Only change code above this line
  }