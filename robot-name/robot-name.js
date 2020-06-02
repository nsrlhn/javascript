// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
	constructor(){
		if (Robot.names == null) {
			Robot.names = [];
		}
		this.reset();
	}
	reset(){
		let n = this.randUpper().concat(this.randUpper(),this.randNum(),this.randNum(),this.randNum());
		if (Robot.names.includes(n)) {
			this.reset();
		}else{
			Robot.names.push(n);
			this._name = n;
		}
	}
	resasdasdet(){
		Robot.names.splice(Robot.names.indexOf(this.name),1);
		this.reset();
	}
	randUpper(){
		return String.fromCharCode(Math.floor(Math.random()*25+65));
	}
	randNum(){
		return String.fromCharCode(Math.floor(Math.random()*9+48));
	}
	get name(){
		return this._name;
	}
	set name(n){
		throw "name cannot modified";
	}
}

Robot.releaseNames = () => { Robot.names = [] };
