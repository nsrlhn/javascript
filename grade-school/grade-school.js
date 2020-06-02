//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
	constructor(){
		this.grades = {};
	}

	roster() {
		let clone = {};
		let unordered = this.grades;
		Object.keys(unordered).sort().forEach(function(key) {
  				clone[key] = [...unordered[key]];
			});
		return clone;
	}

	add(name,grade) {
		let keys = Object.keys(this.grades);
		if(this.grades[grade]){
			this.grades[grade].push(name);
			this.grades[grade].sort();
		}else{
			this.grades[grade] = [name];
		}
	}

	grade(grade) {
		if (this.grades[grade]) {
			return [...this.grades[grade]];
		}else{
			return [];
		}
	}
}
