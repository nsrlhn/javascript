//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
	constructor(value, preNode, nextNode){
		this.value = value;
		this.preNode = preNode;
		this.nextNode = nextNode;
	}
}

export class LinkedList {
	constructor(){
		this.start = null;
		this.end = null;
	}

	push(value) {
		if(this.end == null){
			this.start = new Node(value,null,null);
			this.end = this.start;
		}else{
			let n = new Node(value,this.end,null);
			this.end.nextNode = n;
			this.end = n;
		}
	}

  	pop() {
  		let v = this.end.value;
  		if (this.end.preNode != null) {
  			this.end = this.end.preNode;
  			this.end.nextNode = null;
  		}else{
  			this.start = null;
  			this.end = null;
  		}
  		return v;
  	}

  	shift() {
  		let v = this.start.value;
  		if (this.start.nextNode != null) {
  			this.start = this.start.nextNode;
  			this.start.preNode = null;
  		}else{
  			this.start = null;
  			this.end = null;
  		}
  		return v;
  	}

  	unshift(value) {
  		if (this.start == null) {
  			this.start = new Node(value,null,null);
			this.end = this.start;
  		}else{
	  		let n = new Node(value,null,this.start);
	  		this.start.preNode = n;
	  		this.start = n;
	  	}
  	}

  	delete(value) {
  		let n = this.start;
  		let exist = false;
  		for (var i = 0; i < this.count(); i++) {
  			if (n.value == value) {
  				exist = true;
  				break;
  			}
  			n = n.nextNode;
  		}
  		if (exist == false) {
  			return false;
  		} else {
  			let pre = n.preNode;
  			let next = n.nextNode;
  			if (pre == null && next == null) {
  				this.start = null;
  				this.end = null;
  			} else {
  				if (pre == null) {
  					next.preNode = null;
  					this.start = next;
  				} else {
  					if (next == null) {
  						pre.nextNode = null;
  						this.end = pre;
  					}else{
  						next.preNode = pre;
  						pre.nextNode = next;
  					}
  				}
  			}
  		}
  	}

  	count() {
  		let n = this.start;
  		let i = 0;
  		while(true){
  			if (n !=null) {
  				i++;
  				n = n.nextNode;
  			}else{
  				return i;
  			}
  		}
  		
  	}
}

