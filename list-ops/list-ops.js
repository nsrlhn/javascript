//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values=[]) {
    this.values = values;
  }

  append(newList) {
    for (var i = 0; i < newList.length(); i++) {
      this.values.push(newList.values[i]);
    }
    return this;
  }

  concat(listOfLists) {
    for (var i = 0; i < listOfLists.length(); i++) {
      this.append(listOfLists.values[i]);
    }
    return this;
  }

  filter(func) {
    let r = [];
    for (var i = 0; i < this.length(); i++) {
      if (func(this.values[i])) {
        r.push(this.values[i]);
      }
    }
    return new List(r);
  }

  map(func) {
    let r = [];
    for (var i = 0; i < this.length(); i++) {
      r.push(func(this.values[i]));
    }
    return new List(r);
  }

  length() {
    return this.values.length;
  }

  foldl(func,initial) {
    let acc = initial;
    for (var i = 0; i < this.length(); i++) {
      acc = func(acc,this.values[i]);
    }
    return acc;
  }

  foldr(func,initial) {
    let acc = initial;
    for (var i = this.length() - 1; i >= 0; i--) {
      acc = func(acc,this.values[i]);
    }
    return acc;
  }

  reverse() {
    let r = [];
    for (var i = this.length() - 1; i >= 0; i--) {
      r.push(this.values[i]);
    }
    return new List(r);
  }
}
