function Signaling(model, qurentPass) {
	Device.call(this, model); // model - что мы сразу с model работали
	this._qurentPass = qurentPass;

	this.plusTemperature = function(){
		if((this._qurentTemperature < 25) && (this._state == true)){
			this._qurentTemperature += 2;
		}
	};

	this.minusTemperature = function(){
		if((this._qurentTemperature > -5) && (this._state == true)){
			this._qurentTemperature -= 2;
		}
	};

	this.getQurentTemperature = function(){
        return this._qurentTemperature;
        
    this.setQurentPass = function(){
        confirm
        return this._qurentTemperature;        
	};
}
