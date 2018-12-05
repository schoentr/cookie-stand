'use strict';

var hours = ['6AM', '7AM', '9AM', '10AM', '11AM','12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM','7PM','8PM']

var salesTable=document.getElementById('sales');

function Store(name,minGuest,maxGuest,avgCookie){
  this.name=name;
  this.minGuest=minGuest;
  this.maxGuest=maxGuest;
  this.avgCookie=avgCookie;
  this.cookiesSold= [];
  Store.allStores.push(this);
}
Store.allStores = [];

Store.prototype.randomGuest=function(){;
  return  Math.round(Math.random() * (this.maxGuest - this.minGuest)) + this.minGuest;
}
Store.prototype.cookiesByHour = function(){
 return Math.round (this.randomGuest()*this.avgCookie);
}

Store.prototype.render = function(){
  var totalByStore=0;
  var trElement = document.createElement('tr');
  var tdElement =document.createElement('td');
  tdElement.textContent = this.name;
  trElement.appendChild(tdElement);
  for(var x=0; x < hours.length; x++){
    var tdElement =document.createElement('td');
    this.cookiesSold[x]= this.cookiesByHour();
    tdElement.textContent = this.cookiesSold[x];
    trElement.appendChild(tdElement);
    totalByStore+=this.cookiesSold[x];
  }
  var tdElement =document.createElement('td');
  tdElement.textContent = totalByStore;
  trElement.appendChild(tdElement);
  salesTable.appendChild(trElement);
} 

Store.renderHeader = function() {
  var headerRow = document.createElement('tr');
  var thElement = document.createElement('th');
  headerRow.appendChild(thElement);
  for(var i = 0; i < hours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    headerRow.appendChild(thElement);
  } 
  thElement =document.createElement('th');
  thElement.textContent = 'Totals';
  headerRow.appendChild(thElement);
  salesTable.appendChild(headerRow);
}

Store.renderFooter = function() {
  var cookiesByHour=0;
  var totalCookies=0;
  var footerRow = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent= 'Totals';
  footerRow.appendChild(tdElement);
  for(var x =0; x < hours.length; x++) {
    cookiesByHour=0;
    
    for(var y=0; y<Store.allStores.length;y++){
    var tdElement = document.createElement('td');
    cookiesByHour +=Store.allStores[y].cookiesSold[x];
    totalCookies+=cookiesByHour;  
    }
  tdElement.textContent =cookiesByHour;  
  footerRow.appendChild(tdElement);
  }
  tdElement =document.createElement('td');
  tdElement.textContent= totalCookies;
  footerRow.appendChild(tdElement);
salesTable.appendChild(footerRow);  
}

var pikeStreet = new Store('Pike Street',23,65,6.3);
var seaTac = new Store('Sea-Tac',1,23,1.2);
var seaCenter= new Store('Seattle Center',22,38,3.7);
var capitolHill = new Store(' Capitol Hill',20,38,2.3)
var alki= new Store('Alki',2,16,4.6);









console.log(Store.allStores);




Store.renderHeader();
for (var i=0; i<Store.allStores.length; i++){
Store.allStores[i].render();
}
Store.renderFooter();






