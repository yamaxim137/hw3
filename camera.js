function Camera(model, qurentType, qurentMode) {
	Device.call(this, model); // model - что мы сразу с model работали
    this._qurentType = qurentType;
    this._qurentMode = qurentMode;

	this.plusType = function(){
		if((this._qurentType < 25) && (this._state == true)){
			this._qurentType += 2;
		}
	};

	this.minusType = function(){
		if((this._qurentType > -5) && (this._state == true)){
			this._qurentType -= 2;
		}
	};

	this.getqurentType = function(){
		return this._qurentType;
    };
    
    this.plusMode = function(){
		if((this._qurentType < 25) && (this._state == true)){
			this._qurentType += 2;
		}
	};

	this.minusMode = function(){
		if((this._qurentType > -5) && (this._state == true)){
			this._qurentType -= 2;
		}
	};

	this.getqurentType = function(){
		return this._qurentType;
	};
}
