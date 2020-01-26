function viewCondicioner(conditioner, rootDom){
    this._condicioner = condicioner;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}

viewCondicioner.prototype = Object.create(Devices.prototype);
viewCondicioner.prototype.constructor = viewCondicioner;

ViewCondicioner.prototype.stateChange = function(){
    if(this._conditioner._state){
        this._state.innerHTML = "Устройство включено";
    } else{
        this._state.innerHTML = "Устройство отключено";
    }
};

ViewCondicioner.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Кондисионер";

    var condicion = document.createElement("div");
    condicion.className = "cond";

    var term = document.createElement("div");
    term.innerHTML = "Температура " + this._condicioner._currentTemperature;

    var model = document.createElement("div");
    model.innerHTML = "Модель LG";

    var onBtn = document.createElement("button"); //кнопку создаём Включить
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () =>{
        this._condicioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button"); //кнопку создаём Отключить
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Отключить";
    offBtn.addEventListener('click', () =>{
        this._condicioner.off();
        this.stateChange();
    });

    var plusTemp = document.createElement("button"); //кнопку создаём увеличения температуры
    plusTemp.type = "button";
    plusTemp.className = "inc-temp";
    plusTemp.innerHTML = "Увеличить температуру";
    plusTemp.addEventListener('click', () =>{
        this._concicioner.plusTemperature();
        term.innerHTML = "Температура " + this._condicioner._currentTemperature;
    });

    var minusTemp = document.createElement("button"); //кнопку создаём уменьшения температуры
    minusTemp.type = "button";
    minusTemp.className = "dec-temp";
    minusTemp.innerHTML = "Уменьшить температуру";
    minusTemp.addEventListener('click', () =>{
        this._condicioner.minusTemperature();
        term.innerHTML = "Температура " + this._condicioner._currentTemperature;
    });

    this.stateChange();

    condicion.appendChild(name);
    condicion.appendChild(this._state);
    condicion.appendChild(term);
    condicion.appendChild(model);
    condicion.appendChild(onBtn);
    condicion.appendChild(offBtn);
    condicion.appendChild(plusTemp);
    condicion.appendChild(minusTemp);
    this._rootDom.appendChild(condicion);
}
