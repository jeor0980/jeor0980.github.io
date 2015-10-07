var day = new Date();
var monthValue = day.getMonth();
var dayValue = day.getDay();
var monthDate = day.getDate();
var hourValue = day.getHours(); //gets hour in military time, minutes are dropped
var minuteValue = day.getMinutes(); //gets minutes
var secondValue = day.getSeconds(); //gets minutes
var closedString = "Closed";closedString = closedString.fontcolor("red"); //closedString = red "Closed"
var openString = "Open"; openString = openString.fontcolor("green"); //openString = green "Open"
//dayValue: Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6
//hourValue: 0 = 12am
//opening values do not include the hours themselves, but closing values do (opening statements should use < or >)

//hourValue = 12; minuteValue = 30; dayValue = 3; monthValue = 10;

displayTime(hourValue,minuteValue,dayValue,monthValue,monthDate);

Wtec(dayValue,hourValue,closedString,openString,minuteValue); //unique
C4C(dayValue,hourValue,minuteValue,closedString,openString); //unique

var EcenterArray = ["Ecenter", "Armory", "Carlson", "Economics", "Hale", "Humanities", "Ketchum", "Stadium", "TB1", "Woodbury", "Clare-Small"]; //7am-10pm M-F
Ecenter(dayValue,hourValue,minuteValue,closedString,openString,EcenterArray); //

var ChemistryArray = ["Chemistry", "CIRES", "Duane", "Ekely", "JILA", "LASP", "OldMain", "Rcomplex", "SLHS", "University Club"]; //7am-6pm M-F
Chemistry(dayValue,hourValue,minuteValue,closedString,openString,ChemistryArray);

var FlemingArray = ["Fleming", "ENVD", "Muenzinger", "Ramaley", "Guggenheim", "Macky", "McKenna", "Porter", "MCDB", "The Hub"]; //7am-8pm M-F
Fleming(dayValue,hourValue,minuteValue,closedString,openString,FlemingArray);
//Special cases: Guggenheim, Macky, The Hub, & McKenna (7am-9pm M-F); Porter (7am-7pm M-F) & MCDB (7am-7pm M-F)
//seperate building entries for closesIn

var BensonArray = ["Benson"]; //7am-10pm M-Th, 7am-6pm F-S, 7am-10pm Sun
Benson(dayValue,hourValue,minuteValue,closedString,openString,BensonArray);

var MusicArray = ["Music"]; //7am-10pm M-Th, 7am-6pm F-S, 7am-10pm Sun
Music(dayValue,hourValue,minuteValue,closedString,openString,MusicArray);

var HellemsArray = ["Hellems", "Duane G-Wing", "TheatreAndDance", "Visual Arts Complex"]; //7am-10pm All Week
Hellems(dayValue,hourValue,minuteValue,closedString,openString,HellemsArray);
//Special cases: Visual Arts Complex (7am-9pm All Week)
//seperate building entries for closesIn

var DenisonArray = ["Denison", "Museum Collections", "ContEducation"]; //7am-5pm M-F EXCEPT Continuing Education
Denison(dayValue,hourValue,minuteValue,closedString,openString,DenisonArray);
//Special cases: Continuing Education (8am-5pm M-Th, 7am-5pm F)
//seperate building entries for opensIn

//add: MCDB, Porter, Visual Arts Complex


function displayTime(hourValue,minuteValue,dayValue,monthValue,monthDate){
	var ampm; var ampmHour; var ordinalMonthdate; var adjustedMinuteValue;
	var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	if(hourValue>=0 && hourValue<12){
		ampm = "am";
		if(hourValue==0){
			ampmHour=12;
		} else {
			ampmHour=hourValue;
		}
	} else {
		ampm = "pm";
		if(hourValue!=12){
			ampmHour=hourValue-12;
		} else {
			ampmHour=hourValue;
		}
	}

	if(minuteValue<=9){
		adjustedMinuteValue = "0" + minuteValue;
	} else {
		adjustedMinuteValue = minuteValue;
	}

	if(monthDate>3 && monthDate<21){
		ordinalMonthDate = monthDate + "th";
	} else {
		var monthDateTest = monthDate%10;
		if(monthDateTest==1){
			ordinalMonthDate = monthDate + "st";
		} else if (monthDateTest==2){
			ordinalMonthDate = monthDate + "nd";
		} else if (monthDateTest==3){
			ordinalMonthDate = monthDate + "rd";
		} else{
			ordinalMonthDate = monthDate + "th";
		}
	}

	document.getElementById("currentTime").innerHTML="The time is "+ampmHour+":"+adjustedMinuteValue+ampm+". It is a "+dayOfWeek[dayValue]+" in "+month[monthValue]+". The day of the month is the "+ordinalMonthDate+".";
}

function opensIn(building,dayValue,hourValue,minuteValue){
	var hoursUntilOpening; var minutesUntilOpening; var hourText; var minuteText;
	if(building=="C4C"){
		if(dayValue >= 1 && dayValue <= 5){
			if(hourValue>=20){
				hoursUntilOpening = (7 + 24 - hourValue - 1); //30 - hourValue
				minutesUntilOpening = (60 - minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7 - hourValue -1); //- (1) [to compensate for the fact that there are minutes]
				minutesUntilOpening = (60 - minuteValue);
			}
		} 
		else {
			if(hourValue>=20){
				hoursUntilOpening = (33 - hourValue);
				minutesUntilOpening = (60 - minuteValue);
			}
			if(hourValue<10){
				hoursUntilOpening = (10 - hourValue - 1); //(opening time) - (hourValue) - (1) [to compensate for the fact that there are minutes]
				minutesUntilOpening = (60 - minuteValue);
			}
		}
	}

	if(building=="Wtec"){
		if(dayValue >= 0 && dayValue <= 5){
			if(hourValue>=2 && hourValue<11){
				hoursUntilOpening = (11 - hourValue - 1);
				minutesUntilOpening = (60 - minuteValue);
			}
		} else {
			if(hourValue<16 && hourValue>2){
				hoursUntilOpening = (16 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
	}

	if(building=="Ecenter"){
		if(dayValue > 0 && dayValue <= 4){
			if(hourValue<7){
				hoursUntilOpening = (7 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue>=22){
				hoursUntilOpening = (7 + 24 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==5){
			if(hourValue>=22){
				hoursUntilOpening = (24+24+7+24-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==6){
			hoursUntilOpening = (24+24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
		if(dayValue==0){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Benson"){
		if(hourValue>=18){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		} else {
			hoursUntilOpening = (7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Hellems"){
		if(hourValue>=22){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		} else {
			hoursUntilOpening = (7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Visual Arts Complex"){
		if(hourValue>=21){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		} else {
			hoursUntilOpening = (7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Music"){
		if(hourValue>=23){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		} else {
			hoursUntilOpening = (7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Chemistry"){
		if(dayValue > 0 && dayValue <= 4){
			if(hourValue<7){
				hoursUntilOpening = (7 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue>=18){
				hoursUntilOpening = (7 + 24 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==5){
			if(hourValue>=18){
				hoursUntilOpening = (24+24+7+24-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==6){
			hoursUntilOpening = (24+24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
		if(dayValue==0){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Denison"){
		if(dayValue > 0 && dayValue <= 4){
			if(hourValue<7){
				hoursUntilOpening = (7 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue>=17){
				hoursUntilOpening = (7 + 24 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==5){
			if(hourValue>=17){
				hoursUntilOpening = (24+24+7+24-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==6){
			hoursUntilOpening = (24+24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
		if(dayValue==0){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	} 

	if(building=="ContEducation"){
		if(dayValue > 0 && dayValue <= 4){
			if(hourValue<8){
				hoursUntilOpening = (8 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue>=17){
				hoursUntilOpening = (8 + 24 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==5){
			if(hourValue>=17){
				hoursUntilOpening = (24+24+7+24-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==6){
			hoursUntilOpening = (24+24+8-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
		if(dayValue==0){
			hoursUntilOpening = (24+8-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(building=="Fleming" || building=="Guggenheim" || building=="Macky" || building=="McKenna" || building=="Porter" || building == "MCDB" || building == "The Hub"){
		if(dayValue > 0 && dayValue <= 4){
			if(hourValue<7){
				hoursUntilOpening = (7 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue>=19){
				hoursUntilOpening = (7 + 24 - hourValue - 1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==5){
			if(hourValue>=19){
				hoursUntilOpening = (24+24+7+24-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
			if(hourValue<7){
				hoursUntilOpening = (7-hourValue-1);
				minutesUntilOpening = (60-minuteValue);
			}
		}
		if(dayValue==6){
			hoursUntilOpening = (24+24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
		if(dayValue==0){
			hoursUntilOpening = (24+7-hourValue-1);
			minutesUntilOpening = (60-minuteValue);
		}
	}

	if(minuteValue==0){ //JS goes to 60 minutes 0 hours instead of 1 hour 0 minutes
		hoursUntilOpening += 1;
		minutesUntilOpening = 0;
	}

	if(hoursUntilOpening==1){
		hourText = "hour";
	} else {
		hourText = "hours";
	}

	if(minutesUntilOpening==1){
		minuteText = "minute";
	} else {
		minuteText = "minutes"
	}

	var opening = "(Opening in " + hoursUntilOpening + " " + hourText + " and " + minutesUntilOpening + " " + minuteText + ")";
	opening = opening.fontcolor("orange");
	return opening;
}

function closesIn(building,dayValue,hourValue,minuteValue){
	var hoursUntilClosing; var minutesUntilClosing; var hourText; var minuteText;
	if(building=="C4C"){
		hoursUntilClosing = (19-hourValue);
	}

	if(building=="Wtec"){
		if(hourValue<2 && hourValue != 0){
			hoursUntilClosing = (hourValue-1);
		} else if(hourValue==0) {
			hoursUntilClosing = 1;
		} else {
			hoursUntilClosing = (25-hourValue);
		}

	}

	if(building=="Ecenter"){
		hoursUntilClosing = (22-hourValue-1);
	}

	if(building=="Benson"){
		if(dayValue>=0 && dayValue <= 4){
			hoursUntilClosing = (22-hourValue-1);
		} else {
			hoursUntilClosing = (18-hourValue-1);
		}
	}

	if(building=="Hellems"){
		hoursUntilClosing = (22-hourValue-1);
	}

	if(building=="Visual Arts Complex"){
		hoursUntilClosing = (21-hourValue-1);
	}

	if(building=="Music"){
		hoursUntilClosing = (23-hourValue-1);
	}

	if(building=="Chemistry"){
		hoursUntilClosing = (18-hourValue-1);
	}

	if(building=="Denison" || building=="ContEducation"){
		hoursUntilClosing = (17-hourValue-1);
	}

	if(building=="Fleming"){
		hoursUntilClosing = (20-hourValue);
	}

	if(building=="Guggenheim" || building=="Macky" || building=="McKenna" || building=="The Hub"){
		hoursUntilClosing = (21-hourValue);
	}

	if(building=="Porter" || building=="MCDB"){
		hoursUntilClosing = (19-hourValue);
	}

	if(building!="SSL"){
		minutesUntilClosing = (60-minuteValue); //seems to be the same for every building; remember this takes care of all minuteValues
	}

	if(minuteValue==0){
		hoursUntilClosing += 1;
		minutesUntilClosing = 0;
	}

	if(hoursUntilClosing==1){
		hourText = "hour";
	} else {
		hourText = "hours";
	}

	if(minutesUntilClosing==1){
		minuteText = "minute";
	} else {
		minuteText = "minutes";
	}

	var closing = "(Closes in " + hoursUntilClosing + " " + hourText + " and " + minutesUntilClosing + " " + minuteText + ")";
	closing = closing.fontcolor("orange");
	return closing;
}

//multi
function Ecenter(dayValue,hourValue,minuteValue,closedString,openString,EcenterArray){

	for(i = 0; i < EcenterArray.length; i++){

		document.getElementById(EcenterArray[i]).innerHTML = EcenterArray[i];
		if(EcenterArray[i] == "Ecenter") document.getElementById(EcenterArray[i]).innerHTML = "Engineering Center";
		if(EcenterArray[i] == "Stadium") document.getElementById(EcenterArray[i]).innerHTML = "Folsom Stadium";
		if(EcenterArray[i] == "TB1") document.getElementById(EcenterArray[i]).innerHTML = "Temporary Building #1";

		if(dayValue==0 || dayValue==6){
			document.getElementById(EcenterArray[i]+"Status").innerHTML = closedString;
			document.getElementById(EcenterArray[i]+"Detail").innerHTML = opensIn("Ecenter",dayValue,hourValue,minuteValue);
		} else {
			if(hourValue<7 || hourValue>=22){
				document.getElementById(EcenterArray[i]+"Status").innerHTML = closedString;
				document.getElementById(EcenterArray[i]+"Detail").innerHTML = opensIn("Ecenter",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(EcenterArray[i]+"Status").innerHTML = openString;
				document.getElementById(EcenterArray[i]+"Detail").innerHTML = closesIn("Ecenter",dayValue,hourValue,minuteValue);
			}
		}
	}
}

//multi
function Chemistry(dayValue,hourValue,minuteValue,closedString,openString,ChemistryArray){

	for(i = 0; i < ChemistryArray.length; i++){

		document.getElementById(ChemistryArray[i]).innerHTML = ChemistryArray[i];
		if(ChemistryArray[i] == "OldMain") document.getElementById(ChemistryArray[i]).innerHTML = "Old Main";
		if(ChemistryArray[i] == "Rcomplex") document.getElementById(ChemistryArray[i]).innerHTML = "RL1/RL2/RL3/ARC/RL6";

		if(dayValue==0 || dayValue==6){
			document.getElementById(ChemistryArray[i]+"Status").innerHTML = closedString;
			document.getElementById(ChemistryArray[i]+"Detail").innerHTML = opensIn("Chemistry",dayValue,hourValue,minuteValue);
		} else {
			if(hourValue<7 || hourValue>=18){
				document.getElementById(ChemistryArray[i]+"Status").innerHTML = closedString;
				document.getElementById(ChemistryArray[i]+"Detail").innerHTML = opensIn("Chemistry",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(ChemistryArray[i]+"Status").innerHTML = openString;
				document.getElementById(ChemistryArray[i]+"Detail").innerHTML = closesIn("Chemistry",dayValue,hourValue,minuteValue);
			}
		}
	}
}

//multi
function Denison(dayValue,hourValue,minuteValue,closedString,openString,DenisonArray){

	var currentBuildingHour = 7; //used for changing to 8 if the building is continuing education
	for(i = 0; i < DenisonArray.length; i++){

		document.getElementById(DenisonArray[i]).innerHTML = DenisonArray[i];

		if(DenisonArray[i] == "ContEducation"){
			document.getElementById(DenisonArray[i]).innerHTML = "Continuing Education";

			if(dayValue==0 || dayValue==6){
				document.getElementById(DenisonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = opensIn("ContEducation",dayValue,hourValue,minuteValue);
			} else if (hourValue<8 || hourValue>=17){
				document.getElementById(DenisonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = opensIn("ContEducation",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(DenisonArray[i]+"Status").innerHTML = openString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = closesIn("ContEducation",dayValue,hourValue,minuteValue);
			}
		} else {
			if(dayValue==0 || dayValue==6){
				document.getElementById(DenisonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = opensIn("Denison",dayValue,hourValue,minuteValue);
			} else if (hourValue<7 || hourValue>=17){
				document.getElementById(DenisonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = opensIn("Denison",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(DenisonArray[i]+"Status").innerHTML = openString;
				document.getElementById(DenisonArray[i]+"Detail").innerHTML = closesIn("Denison",dayValue,hourValue,minuteValue);
			}
		}
	}
}

//multi
function Fleming(dayValue,hourValue,minuteValue,closedString,openString,FlemingArray){

	for(i = 0; i < FlemingArray.length; i++){

		document.getElementById(FlemingArray[i]).innerHTML = FlemingArray[i];

		if(FlemingArray[i] == "Guggenheim" || FlemingArray[i] == "Macky" || FlemingArray[i] == "McKenna" || FlemingArray[i] == "The Hub"){

			if(dayValue==0 || dayValue==6){
				document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			} else if (hourValue<7 || hourValue>=21){
				document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(FlemingArray[i]+"Status").innerHTML = openString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = closesIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			}
		} else if(FlemingArray[i] == "Porter" || FlemingArray[i] == "MCDB"){

			if(dayValue==0 || dayValue==6){
				document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			} else if (hourValue<7 || hourValue>=19){
				document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(FlemingArray[i]+"Status").innerHTML = openString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = closesIn(FlemingArray[i],dayValue,hourValue,minuteValue);
			}

		} else {

			if(dayValue==0 || dayValue==6){
				document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
				document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn("Fleming",dayValue,hourValue,minuteValue);
			} else {
				if(hourValue<7 || hourValue>=20){
					document.getElementById(FlemingArray[i]+"Status").innerHTML = closedString;
					document.getElementById(FlemingArray[i]+"Detail").innerHTML = opensIn("Fleming",dayValue,hourValue,minuteValue);
				} else {
					document.getElementById(FlemingArray[i]+"Status").innerHTML = openString;
					document.getElementById(FlemingArray[i]+"Detail").innerHTML = closesIn("Fleming",dayValue,hourValue,minuteValue);
				}
			}
		}
	}
}

//multi
function Hellems(dayValue,hourValue,minuteValue,closedString,openString,HellemsArray){

	for(i = 0; i < HellemsArray.length; i++){
		document.getElementById(HellemsArray[i]).innerHTML = HellemsArray[i];
		if(HellemsArray[i] == "TheatreAndDance") document.getElementById(HellemsArray[i]).innerHTML = "Theatre & Dance"; //the & symbol may cause complications, so there is a unique case here

		if(HellemsArray[i] == "Visual Arts Complex"){

			if(hourValue>= 7 && hourValue<21){
				document.getElementById(HellemsArray[i]+"Status").innerHTML = openString;
				document.getElementById(HellemsArray[i]+"Detail").innerHTML = closesIn("Visual Arts Complex",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(HellemsArray[i]+"Status").innerHTML = closedString;
				document.getElementById(HellemsArray[i]+"Detail").innerHTML = opensIn("Visual Arts Complex",dayValue,hourValue,minuteValue);
			}
			
		} else {
			if(hourValue>= 7 && hourValue<22){
				document.getElementById(HellemsArray[i]+"Status").innerHTML = openString;
				document.getElementById(HellemsArray[i]+"Detail").innerHTML = closesIn("Hellems",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById(HellemsArray[i]+"Status").innerHTML = closedString;
				document.getElementById(HellemsArray[i]+"Detail").innerHTML = opensIn("Hellems",dayValue,hourValue,minuteValue);
			}
		}
	}
}

function Music(dayValue,hourValue,minuteValue,closedString,openString,MusicArray){

	for(i = 0; i < MusicArray.length; i++){
		document.getElementById(MusicArray[i]).innerHTML = MusicArray[i];

		if(hourValue>= 7 && hourValue<23){
			document.getElementById(MusicArray[i]+"Status").innerHTML = openString;
			document.getElementById(MusicArray[i]+"Detail").innerHTML = closesIn("Music",dayValue,hourValue,minuteValue);
		} else {
			document.getElementById(MusicArray[i]+"Status").innerHTML = closedString;
			document.getElementById(MusicArray[i]+"Detail").innerHTML = opensIn("Music",dayValue,hourValue,minuteValue);
		}
	}
}

function Benson(dayValue,hourValue,minuteValue,closedString,openString,BensonArray){

	for(i = 0; i < BensonArray.length; i++){
		document.getElementById(BensonArray[i]).innerHTML = BensonArray[i];
		if(dayValue>=0 && dayValue<=4){
			if(hourValue>= 7 && hourValue<22){
				document.getElementById(BensonArray[i]+"Status").innerHTML = openString;
				document.getElementById(BensonArray[i]+"Detail").innerHTML = closesIn("Benson",dayValue,hourValue,minuteValue);
			} else{
				document.getElementById(BensonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(BensonArray[i]+"Detail").innerHTML = opensIn("Benson",dayValue,hourValue,minuteValue);
			}
		} else {
			if(hourValue>= 7 || hourValue<18){
				document.getElementById(BensonArray[i]+"Status").innerHTML = openString;
				document.getElementById(BensonArray[i]+"Detail").innerHTML = closesIn("Benson",dayValue,hourValue,minuteValue);
			} else{
				document.getElementById(BensonArray[i]+"Status").innerHTML = closedString;
				document.getElementById(BensonArray[i]+"Detail").innerHTML = opensIn("Benson",dayValue,hourValue,minuteValue);
			}
		}
	}
}

function C4C(dayValue,hourValue,minuteValue,closedString,openString){
	document.getElementById("C4Cdining").innerHTML = "Center for Community Dining";
	document.getElementById("C4Conly").innerHTML = "Center for Community";

	if(dayValue==0 || dayValue==6){
		if(hourValue<10 || hourValue>=20){
			document.getElementById("C4Cstatus").innerHTML = closedString;
			document.getElementById("C4Cdetail").innerHTML = opensIn("C4C",dayValue,hourValue,minuteValue);
			document.getElementById("C4ConlyStatus").innerHTML = closedString;
			document.getElementById("C4Conlydetail").innerHTML = opensIn("C4C",dayValue,hourValue,minuteValue);
		}
		if(hourValue>=10 && hourValue<20){
			document.getElementById("C4Cstatus").innerHTML = openString;
			document.getElementById("C4Cdetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue);
			document.getElementById("C4Conlystatus").innerHTML = openString;
			document.getElementById("C4Conlydetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue);
		}
	}

	if(dayValue=!0 && dayValue!=6){
		if(hourValue>=7 && hourValue<=20){
			if(hourValue==10 && minuteValue<=30){
				var timeUntilContinentalCloses = (30-minuteValue);
				var continentalString = "(Continental breakfast closes in " + timeUntilContinentalCloses + " minutes)"; continentalString = continentalString.fontcolor("blue");

				document.getElementById("C4Cstatus").innerHTML = openString;
				document.getElementById("C4Cdetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue) + " " + continentalString;
				document.getElementById("C4Conlystatus").innerHTML = openString;
				document.getElementById("C4Conlydetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue);
			} else {
				document.getElementById("C4Cstatus").innerHTML = openString;
				document.getElementById("C4Cdetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue);
				document.getElementById("C4Conlystatus").innerHTML = openString;
				document.getElementById("C4Conlydetail").innerHTML = closesIn("C4C",dayValue,hourValue,minuteValue);
			}
		}
		if(hourValue<7 || hourValue>=20){
			document.getElementById("C4Cstatus").innerHTML = closedString;
			document.getElementById("C4Cdetail").innerHTML = opensIn("C4C",dayValue,hourValue,minuteValue);
			document.getElementById("C4Conlystatus").innerHTML = closedString;
			document.getElementById("C4Conlydetail").innerHTML = opensIn("C4C",dayValue,hourValue,minuteValue);
		}
	}
}

function Wtec(dayValue,hourValue,closedString,openString,minuteValue){
	document.getElementById("Wtec").innerHTML = "WeatherTech Café";

	if(dayValue==0||dayValue==6){ //wekeends
		if(hourValue>=16 || hourValue<2){
			document.getElementById("WtecStatus").innerHTML = openString;
			document.getElementById("WtecDetail").innerHTML = closesIn("Wtec",dayValue,hourValue,minuteValue);
		} else {
			document.getElementById("WtecStatus").innerHTML = closedString;
			document.getElementById("WtecDetail").innerHTML = opensIn("Wtec",dayValue,hourValue,minuteValue);
		}
	} else { //weekdays
		if(hourValue>=11||hourValue<=2){
			document.getElementById("WtecStatus").innerHTML = openString;
			document.getElementById("WtecDetail").innerHTML = closesIn("Wtec",dayValue,hourValue,minuteValue);
		} else {
			document.getElementById("WtecStatus").innerHTML = closedString;
			document.getElementById("WtecDetail").innerHTML = opensIn("Wtec",dayValue,hourValue,minuteValue);
		}
	}
} 