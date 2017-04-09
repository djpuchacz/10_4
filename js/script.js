function Telefon(marka, cena, kolor, pochodzenie) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.krajProducenta = pochodzenie;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", kraj producenta to " + this.krajProducenta + " a cena to " + this.cena + ".");
	}
var iPhone6s = new Telefon("Apple", 2250, "srebrny", "USA");
var GalaxyS6 = new Telefon("Samsung", 2500, "czarny", "Korea");
var One = new Telefon("OnePlus", 2000, "biały", "Chiny");
iPhone6s.printInfo();
GalaxyS6.printInfo();
One.printInfo();