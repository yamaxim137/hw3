function ViewTimer(timer, rootDom){
	this._timer = timer;
	this._rootDom = rootDom;
	this._state = document.createElement("div");
}

ViewTimer.prototype = Object.create(Devices.prototype);
ViewTimer.prototype.constructor = ViewTimer;

ViewTimer.prototype.stateChange = function() {
	if (this._timer._state) {
		this._state.innerHTML = "устройство включено";
	} else{
		this._state.innerHTML = "устройство выключено";
	}
};

ViewTimer.prototype.render = function() {    //создаёт все элементы
	var name = document.createElement("div");
	name.innerHTML = "МилиСекундоМер";

	var mlsecund = document.createElement("div");
	mlsecund.className = "mls";

	var time = document.createElement("div");
	time.innerHTML = "Милисекунд: " + this._timer._qurentTime;

	var model = document.createElement("div");
	model.innerHTML = "Модель My1";

	// пока логики не реализовали ещё

	var onBtn = document.createElement("Button");
	onBtn.type = "button";
	onBtn.className = "on";
	onBtn.innerHTML = "Старт";
	onBtn.addEventListener('click', () =>{   // тут происходит потеря контекста вызова поэтому стрелочную функцию используем
		this._timer.on();
		this.stateChange();
	});

	var offBtn = document.createElement("Button");
        offBtn.type = "button";
	offBtn.className = "off";
	offBtn.innerHTML = "Стоп";
	offBtn.addEventListener('click', () => {   
		this._timer.off();
		this.stateChange();
	});

	var plusTime = document.createElement("Button");
	plusTime.type = "button";
	plusTime.className = "inc-time";
	plusTime.innerHTML = "увеличить время";
	plusTime.addEventListener('click', () => {   
		this._timer.goTimer(this._timer._qurentTime);
		time.innerHTML = "Прошло времени: " + this._timer._qurentTime;
	});
	
	var delBtn = document.createElement("Button");
        delBtn.type = "button";
	delBtn.className = "del";
	delBtn.innerHTML = "Убрать";
	delBtn.addEventListener('click', () => {   
// 			this._timer.del();
		alert("Скоро уберём Секундомер (ещё не умеем) )");
	});

	this.stateChange(); // постоянная проверка состояния

	mlsecund.appendChild(name);
	mlsecund.appendChild(this._state);
	mlsecund.appendChild(time);
	mlsecund.appendChild(model);
	mlsecund.appendChild(onBtn);
	mlsecund.appendChild(offBtn);
	mlsecund.appendChild(plusTime);
	mlsecund.appendChild(delBtn);
	
	this._rootDom.appendChild(mlsecund); // обернули
};
