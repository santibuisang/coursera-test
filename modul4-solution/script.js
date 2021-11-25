var names=new Array();
names[0]="Santi";
names[1]="Vania";
names[2]="Keren";
names[3]="Debora";
names[4]="Gledis";
names[5]="Merry";
names[6]="Hawe";
names[7]="Michelle";
names[8]="Gladies";
names[9]="Berry";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}