function Camera(model, qurentType, qurentMode) {
	Device.call(this, model); // model - что мы сразу с model работали
    this._qurentType = qurentType;
    this._qurentMode = qurentMode;

	this.setType = function(){
		if((this._qurentType < 25) && (this._state == true)){
			this._qurentType += 2;
		}
	};

	this.getqurentType = function(){
		return this._qurentType;
    	};
    
    	this.setMode = function(){
		if((this._qurentType < 25) && (this._state == true)){
			this._qurentType += 2;
		}
	};

	this.getqurentMode = function(){
		return this._qurentMode;
	};
}
