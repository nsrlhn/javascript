//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {

    var row_str = input.split("\n");
    this.arr = [];
    for (var i = 0; i < row_str.length; i++) {
    	this.arr.push(row_str[i].split(" "));
    }
    this.arr = this.arr.map(r => r.map(Number));

    this.arr_transpose = [...Array(this.arr[0].length)].map(e => Array(this.arr.length));
  	for (var i = this.arr.length - 1; i >= 0; i--) {
    	for (var j = this.arr[0].length - 1; j >= 0; j--) {
    		this.arr_transpose[j][i] = this.arr[i][j];
    	}
    }
  }
  get rows(){
  	return this.arr;
  }
  get columns(){
    return this.arr_transpose;
  }
}
