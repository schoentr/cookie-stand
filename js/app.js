'use strict';

var cookieCounter;
var hours = ['6AM', '7AM', '9AM', '10AM', '11AM','12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM','7PM','8PM']
var pikeStreet = {
  minGuest: 23,
  maxGuest: 65,
  avgCookie:6.3,
  guestRandom: function (){
    var min = Math.ceil(this.minGuest);
    var max = Math.floor(this.maxGuest);
    return Math.floor(Math.random() * (max - min)) + min;
    },
  render: function() {
    var ulEl = document.getElementById('pike-street');
    
    for(var i=0; i<hours.length; i++){
      var cookieHour= this.guestRandom() * this.avgCookie;
      var cookieHour= Math.floor(cookieHour);
      var liEl = document.createElement('li');
      liEl.textContent = ` ${hours[i]} : ${cookieHour} `;
      cookieCounter += cookieHour;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total : ${cookieCounter}`;
    ulEl.appendChild(liEl);
    
  }
}

var seaTac = {
  minGuest: 3,
  maxGuest:24,
  avgCookie:1.2, guestRandom: function (){
    var min = Math.ceil(this.minGuest);
    var max = Math.floor(this.maxGuest);
    return Math.floor(Math.random() * (max - min)) + min;
    },
  render: function(){
    var ulEl=document.getElementById('sea-tac');
    cookieCounter=0;
    for(var i=0; i<hours.length;i++){
      var cookieHour= this.guestRandom() *this.avgCookie;
      cookieHour= Math.floor(cookieHour);
      var liEl = document.createElement('li')
      liEl.textContent =`${hours[i]}: ${cookieHour}`;
      cookieCounter+=cookieHour
      ulEl.appendChild(liEl);
    }
    liEl.textContent=`Total: ${cookieCounter}`;
    ulEl.appendChild(liEl);

  
  }
}
var seaCenter = {
  minGuest:22,
  maxGuest:38,
  avgCookie:3.7, 
  guestRandom: function (){
    var min = Math.ceil(this.minGuest);
    var max = Math.floor(this.maxGuest);
    return Math.floor(Math.random() * (max - min)) + min;
    },
  render: function() {
    var ulEl = document.getElementById('seattle-center');
    cookieCounter=0;
    for(var i=0; i<hours.length; i++){
      var cookieHour= this.guestRandom() * this.avgCookie;
      cookieHour= Math.floor(cookieHour);
      var liEl = document.createElement('li');
      liEl.textContent = ` ${hours[i]} : ${cookieHour} `;
      cookieCounter += cookieHour;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total : ${cookieCounter}`;
    ulEl.appendChild(liEl);
    
  }
}

var capitolHill = {
  minGuest:20,
  maxGuest:38,
  avgCookie:2.,
  guestRandom: function (){
    var min = Math.ceil(this.minGuest);
    var max = Math.floor(this.maxGuest);
    return Math.floor(Math.random() * (max - min)) + min;
    },
  render: function() {
    var ulEl = document.getElementById('capitol-hill');
    cookieCounter=0;
    for(var i=0; i<hours.length; i++){
      var cookieHour= this.guestRandom() * this.avgCookie;
      var cookieHour= Math.floor(cookieHour);
      var liEl = document.createElement('li');
      liEl.textContent = ` ${hours[i]} : ${cookieHour} `;
      cookieCounter += cookieHour;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total : ${cookieCounter}`;
    ulEl.appendChild(liEl); 
  }
}

var alki = {
  minGuest:2,
  maxGuest:16,
  avgCookie:4.6,
  guestRandom: function (){
    var min = Math.ceil(this.minGuest);
    var max = Math.floor(this.maxGuest);
    return Math.floor(Math.random() * (max - min)) + min;
    },
  render: function() {
    var ulEl = document.getElementById('alki');
    cookieCounter=0;
    for(var i=0; i<hours.length; i++){
      var cookieHour= this.guestRandom() * this.avgCookie;
      var cookieHour= Math.floor(cookieHour);
      var liEl = document.createElement('li');
      liEl.textContent = ` ${hours[i]} : ${cookieHour} `;
      cookieCounter += cookieHour;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total : ${cookieCounter}`;
    ulEl.appendChild(liEl);
    
  }
}

cookieCounter=0;
pikeStreet.render();
capitolHill.render();
seaCenter.render();
seaTac.render();
alki.render();




