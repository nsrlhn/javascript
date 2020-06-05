//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key = "ddddddddddddddddddddddddddd") {
    this._key = key;
  }

  encode(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      var k = this._key.charCodeAt(i%this._key.length)-97;
      var num = (str.charCodeAt(i)+k-97)%26+97;
      result.push(String.fromCharCode(num));
    }
    return result.join("");
  }

  decode(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
      var k = this._key.charCodeAt(i%this._key.length)-97;
      var num = str.charCodeAt(i)-k;
      if (num < 97) {
        num += 26;
      }
      result.push(String.fromCharCode(num));
    }
    return result.join("");
  }

  get key() {
    return this._key;
  }
  set key(k){
    this._key = k;
  }

}
