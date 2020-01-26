function Timer(model) {
// function Timer(model, qurentTime) {
	Devices.call(this, model); // model - что мы сразу с model работали
    // this._qurentTime = qurentTime;
    this._qurentTime = 0;
}

Timer.prototype = Object.create(Devices.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.goTimer = function(){
    setTimeout(function ff() {
        console.log(this._qurentTime);
        if (this._state) {      
            setTimeout(ff, 1000);
            };
            this._qurentTime++;
    }, 1000);
	
};

Timer.prototype.resetTimer = function(){
	this._qurentTime = 0;
};

Timer.prototype.getQurentTime = function(){
		return this._qurentTime;
};
