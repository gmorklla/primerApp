var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.triggerDepart = function () {
		this.data.actualArrive = Date.now();
	};

	this.triggerArrive = function () {
		// var d = new Date();
		// var minutes = d.getMinutes();
		// var hour = d.getHours();
		// var amPm = '';
		// if (hour > 12) {
		//	amPm = 'PM'
		//        hour -= 12;
		//    } else if (hour === 0) {
		//		amPm = 'AM'
		//        hour = 12;
		//    }
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};
};

module.exports = function (info) {
	var instance = new Flight();

	instance.fill(info);

	return instance;
};