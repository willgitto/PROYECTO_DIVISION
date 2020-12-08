// JavaScript Document

function creaDDecenas(){
		
		comodincentenas = 0; contacto = 0;
		
		var cadidecen11 = 0, cadidecen22 = 0; 	
		var cadidecen33 = 0, cadidecen44 = 0, cadidecen55 = 0, cadidecen66 = 0;
		var cadidecen77 = 0, cadidecen88 = 0, cadidecen99 = 0;
		
		calculo1 = 0; calculo2 = 0; calculo3 = 0; calculo4 = 0; calculo5 = 0; 
		calculo6 = 0; calculo7 = 0; calculo8 = 0; calculo9 = 0; calculo10 = 0;
		sobrante2 = 0; sobrante4 = 0;
		
		if (centena111 < divisor && centena111 != 0){	
			calculo1 = centena111*10 + decena111;//total decenas
			calculo2 = calculo1 % divisor;//sobrante de decenas
			calculo3 = calculo1 - calculo2;//decenas necesarias
			calculo6 = calculo2 * 10 + unidad111;//cantidad total de unidades
			calculo7 = calculo6 % divisor;//sobrante unidades
			calculo8 = calculo6 - calculo7;//unidades necesarias
		}
		
		if (centena111 > divisor){	
			calculo1 = centena111 % divisor;//sobrante de centenas
			calculo5 = calculo1*10 + decena111;//total de decenas
			calculo4 = calculo5 % divisor;//sobrante de decenas
			calculo3 = calculo5 - calculo4;//decenas necesarias
			calculo9 = calculo4 * 10 + unidad111;//total unidades
			if (calculo5 < divisor){
				calculo3 = 0;
				calculo9 = calculo5 * 10 + unidad111;			
			}
			calculo10 = calculo9 % divisor;//sobrante unidades
			calculo8 = calculo9 - calculo10//unidades necesarias
		}
		
		function decenaInterna(){			
			var  decennna11 = Object.create(decenareparti);
				 adidecen1[0] = decennna11;
			var  decennna12 = Object.create(decenareparti);
				 adidecen1[1] = decennna12;
			var  decennna13 = Object.create(decenareparti);
				 adidecen1[2] = decennna13;
			var  decennna14 = Object.create(decenareparti);
				 adidecen1[3] = decennna14;
			var  decennna15 = Object.create(decenareparti);
				 adidecen1[4] = decennna15;
			var  decennna16 = Object.create(decenareparti);
				 adidecen1[5] = decennna16;
			var  decennna17 = Object.create(decenareparti);
				 adidecen1[6] = decennna17;
			var  decennna18 = Object.create(decenareparti);
				 adidecen1[7] = decennna18;
			var  decennna19 = Object.create(decenareparti);
				 adidecen1[8] = decennna19;
			var  decennna110 = Object.create(decenareparti);
				 adidecen1[9] = decennna110;			
		}
		
		if ((centena111 != 0 && centena111 < divisor && unidad111 >= 0 && decena111 > 0)      || (centena111 != 0 && centena111 > divisor && unidad111 >= 0 && decena111 > 0) ) {
			for (var i = 0; i < decena111; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxx[i] >= gruposx[k]) && (decenasxx[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyy[i] >= gruposy[k]) && (decenasyy[i] + altodde <= gruposy[k] + altodi) && verydecen1 == 0) {
						
						cadidecen11 += 1;
						if (cadidecen11 == decena111 && revisiondecdecena < calculo3 ) {
							accesdecena2 = 1;
							accesdecena1 = 1;
							
							verydecen1 = 1;
							controldecena = 1;	
							
							decenaInterna();							
							
							for (var i = 0; i < 10; i++) {
								decenasxxa[i] = iniddx - i*60;
								decenasyya[i] = iniddy;
							}	
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;
							
						}
						
					}
				}						
			
			}
			
		}					
				
		
		if ((centena111 != 0 && centena111 < divisor && unidad111 != 0 && decena111 == 0)      || (centena111 != 0 && centena111 > divisor && unidad111 != 0 && decena111 == 0) ) {
			
			if (decenacero1 == 0 && revisiondecdecena < calculo3) {
				accesdecena2 = 1;
				accesdecena1 = 1;
				decenacero1 = 1;
				controldecena = 1;
				
				decenaInterna();							
							
				for (var i = 0; i < 10; i++) {
					decenasxxa[i] = iniddx - i*60;
					decenasyya[i] = iniddy;
				}	
				controlCentena();			
				centenas[c] = 0;
				centenasxx[c] = undefined;
				centenasyy[c] = undefined;
			}
			
		}
		
		
		if ((centena111 != 0 && centena111 < divisor && unidad111 == 0 && decena111 == 0)      || (centena111 != 0 && centena111 > divisor && unidad111 == 0 && decena111 == 0) ) {
			
			if (decenacero2 == 0 && revisiondecdecena < calculo3) {
				accesdecena2 = 1;
				accesdecena1 = 1;
				decenacero2 = 1;
				controldecena = 1;
				
				decenaInterna();							
							
				for (var i = 0; i < 10; i++) {
					decenasxxa[i] = iniddx - i*60;
					decenasyya[i] = iniddy;
				}	
				controlCentena();			
				centenas[c] = 0;
				centenasxx[c] = undefined;
				centenasyy[c] = undefined;
			}
			
		}
		
		
		if (accesdecena2 == 1){
			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxa[i] >= gruposx[k]) && (decenasxxa[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyya[i] >= gruposy[k]) && (decenasyya[i] + altodde <= gruposy[k] + altodi) && verydecen2 == 0) {						
						cadidecen22 += 1;
						if (cadidecen22 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena3 = 1;
							verydecen2 = 1;
							controldecena = 2;
							
							var  decennna21 = Object.create(decenareparti);
								adidecen2[0] = decennna21;
							var  decennna22 = Object.create(decenareparti);
				 				adidecen2[1] = decennna22;
							var  decennna23 = Object.create(decenareparti);
				 				adidecen2[2] = decennna23;
							var  decennna24 = Object.create(decenareparti);
								adidecen2[3] = decennna24;
							var  decennna25 = Object.create(decenareparti);
								adidecen2[4] = decennna25;
							var  decennna26 = Object.create(decenareparti);
								adidecen2[5] = decennna26;
							var  decennna27 = Object.create(decenareparti);
								adidecen2[6] = decennna27;
							var  decennna28 = Object.create(decenareparti);
								adidecen2[7] = decennna28;
							var  decennna29 = Object.create(decenareparti);
				 				adidecen2[8] = decennna29;
							var  decennna210 = Object.create(decenareparti);
								adidecen2[9] = decennna210;
							
							for (var i = 0; i < 10; i++) {
								decenasxxb[i] = iniddx - i*60;
								decenasyyb[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
						}
					}
				}
			}
			
			
		} 
		
		
		if (accesdecena3 == 1){
			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxb[i] >= gruposx[k]) && (decenasxxb[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyb[i] >= gruposy[k]) && (decenasyyb[i] + altodde <= gruposy[k] + altodi) && verydecen3 == 0) {						
						cadidecen33 += 1;
						if (cadidecen33 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena4 = 1;
							verydecen3 = 1;
							controldecena = 3;
							
							var  decennna31 = Object.create(decenareparti);
								adidecen3[0] = decennna31;
							var  decennna32 = Object.create(decenareparti);
				 				adidecen3[1] = decennna32;
							var  decennna33 = Object.create(decenareparti);
				 				adidecen3[2] = decennna33;
							var  decennna34 = Object.create(decenareparti);
								adidecen3[3] = decennna34;
							var  decennna35 = Object.create(decenareparti);
								adidecen3[4] = decennna35;
							var  decennna36 = Object.create(decenareparti);
								adidecen3[5] = decennna36;
							var  decennna37 = Object.create(decenareparti);
								adidecen3[6] = decennna37;
							var  decennna38 = Object.create(decenareparti);
								adidecen3[7] = decennna38;
							var  decennna39 = Object.create(decenareparti);
				 				adidecen3[8] = decennna39;
							var  decennna310 = Object.create(decenareparti);
								adidecen3[9] = decennna310;
							
							for (var i = 0; i < 10; i++) {
								decenasxxc[i] = iniddx - i*60;
								decenasyyc[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
							
						}
					}
				}
			}
		}
	
	
	if (accesdecena4 == 1){
			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxc[i] >= gruposx[k]) && (decenasxxc[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyc[i] >= gruposy[k]) && (decenasyyc[i] + altodde <= gruposy[k] + altodi) && verydecen4 == 0) {						
						cadidecen44 += 1;
						if (cadidecen44 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena5 = 1;
							verydecen4 = 1;
							controldecena = 4;
							
							var  decennna41 = Object.create(decenareparti);
								adidecen4[0] = decennna41;
							var  decennna42 = Object.create(decenareparti);
				 				adidecen4[1] = decennna42;
							var  decennna43 = Object.create(decenareparti);
				 				adidecen4[2] = decennna43;
							var  decennna44 = Object.create(decenareparti);
								adidecen4[3] = decennna44;
							var  decennna45 = Object.create(decenareparti);
								adidecen4[4] = decennna45;
							var  decennna46 = Object.create(decenareparti);
								adidecen4[5] = decennna46;
							var  decennna47 = Object.create(decenareparti);
								adidecen4[6] = decennna47;
							var  decennna48 = Object.create(decenareparti);
								adidecen4[7] = decennna48;
							var  decennna49 = Object.create(decenareparti);
				 				adidecen4[8] = decennna49;
							var  decennna410 = Object.create(decenareparti);
								adidecen4[9] = decennna410;
							
							for (var i = 0; i < 10; i++) {
								decenasxxd[i] = iniddx - i*60;
								decenasyyd[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
							
						}
					}
				}
			}
	}	
	
	
	if (accesdecena5 == 1){
			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxd[i] >= gruposx[k]) && (decenasxxd[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyd[i] >= gruposy[k]) && (decenasyyd[i] + altodde <= gruposy[k] + altodi) && verydecen5 == 0) {						
						cadidecen55 += 1;
						if (cadidecen55 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena6 = 1;
							verydecen5 = 1;
							controldecena = 5;
							
							var  decennna51 = Object.create(decenareparti);
								adidecen5[0] = decennna51;
							var  decennna52 = Object.create(decenareparti);
				 				adidecen5[1] = decennna52;
							var  decennna53 = Object.create(decenareparti);
				 				adidecen5[2] = decennna53;
							var  decennna54 = Object.create(decenareparti);
								adidecen5[3] = decennna54;
							var  decennna55 = Object.create(decenareparti);
								adidecen5[4] = decennna55;
							var  decennna56 = Object.create(decenareparti);
								adidecen5[5] = decennna56;
							var  decennna57 = Object.create(decenareparti);
								adidecen5[6] = decennna57;
							var  decennna58 = Object.create(decenareparti);
								adidecen5[7] = decennna58;
							var  decennna59 = Object.create(decenareparti);
				 				adidecen5[8] = decennna59;
							var  decennna510 = Object.create(decenareparti);
								adidecen5[9] = decennna510;
							
							for (var i = 0; i < 10; i++) {
								decenasxxe[i] = iniddx - i*60;
								decenasyye[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
						}
					}
				}
			}
	}
	
	
	if (accesdecena6 == 1){			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxe[i] >= gruposx[k]) && (decenasxxe[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyye[i] >= gruposy[k]) && (decenasyye[i] + altodde <= gruposy[k] + altodi) && verydecen6 == 0) {						
						cadidecen66 += 1;
						if (cadidecen66 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena7 = 1;
							verydecen6 = 1;
							controldecena = 6;
							
							var  decennna61 = Object.create(decenareparti);
								adidecen6[0] = decennna61;
							var  decennna62 = Object.create(decenareparti);
				 				adidecen6[1] = decennna62;
							var  decennna63 = Object.create(decenareparti);
				 				adidecen6[2] = decennna63;
							var  decennna64 = Object.create(decenareparti);
								adidecen6[3] = decennna64;
							var  decennna65 = Object.create(decenareparti);
								adidecen6[4] = decennna65;
							var  decennna66 = Object.create(decenareparti);
								adidecen6[5] = decennna66;
							var  decennna67 = Object.create(decenareparti);
								adidecen6[6] = decennna67;
							var  decennna68 = Object.create(decenareparti);
								adidecen6[7] = decennna68;
							var  decennna69 = Object.create(decenareparti);
				 				adidecen6[8] = decennna69;
							var  decennna610 = Object.create(decenareparti);
								adidecen6[9] = decennna610;
							
							for (var i = 0; i < 10; i++) {
								decenasxxf[i] = iniddx - i*60;
								decenasyyf[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
						}
					}
				}
			}
	}
	
	
	if (accesdecena7 == 1){			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxf[i] >= gruposx[k]) && (decenasxxf[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyf[i] >= gruposy[k]) && (decenasyyf[i] + altodde <= gruposy[k] + altodi) && verydecen7 == 0) {						
						cadidecen77 += 1;
						if (cadidecen77 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena8 = 1;
							verydecen7 = 1;
							controldecena = 7;
							
							var  decennna71 = Object.create(decenareparti);
								adidecen7[0] = decennna71;
							var  decennna72 = Object.create(decenareparti);
				 				adidecen7[1] = decennna72;
							var  decennna73 = Object.create(decenareparti);
				 				adidecen7[2] = decennna73;
							var  decennna74 = Object.create(decenareparti);
								adidecen7[3] = decennna74;
							var  decennna75 = Object.create(decenareparti);
								adidecen7[4] = decennna75;
							var  decennna76 = Object.create(decenareparti);
								adidecen7[5] = decennna76;
							var  decennna77 = Object.create(decenareparti);
								adidecen7[6] = decennna77;
							var  decennna78 = Object.create(decenareparti);
								adidecen7[7] = decennna78;
							var  decennna79 = Object.create(decenareparti);
				 				adidecen7[8] = decennna79;
							var  decennna710 = Object.create(decenareparti);
								adidecen7[9] = decennna710;
							
							for (var i = 0; i < 10; i++) {
								decenasxxg[i] = iniddx - i*60;
								decenasyyg[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;
							
						}
					}
				}
			}
	}
	
	if (accesdecena8 == 1){			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxg[i] >= gruposx[k]) && (decenasxxg[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyg[i] >= gruposy[k]) && (decenasyyg[i] + altodde <= gruposy[k] + altodi) && verydecen8 == 0) {						
						cadidecen88 += 1;
						if (cadidecen88 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena9 = 1;
							verydecen8 = 1;
							controldecena = 8;
							
							var  decennna81 = Object.create(decenareparti);
								adidecen8[0] = decennna81;
							var  decennna82 = Object.create(decenareparti);
				 				adidecen8[1] = decennna82;
							var  decennna83 = Object.create(decenareparti);
				 				adidecen8[2] = decennna83;
							var  decennna84 = Object.create(decenareparti);
								adidecen8[3] = decennna84;
							var  decennna85 = Object.create(decenareparti);
								adidecen8[4] = decennna85;
							var  decennna86 = Object.create(decenareparti);
								adidecen8[5] = decennna86;
							var  decennna87 = Object.create(decenareparti);
								adidecen8[6] = decennna87;
							var  decennna88 = Object.create(decenareparti);
								adidecen8[7] = decennna88;
							var  decennna89 = Object.create(decenareparti);
				 				adidecen8[8] = decennna89;
							var  decennna810 = Object.create(decenareparti);
								adidecen8[9] = decennna810;
							
							for (var i = 0; i < 10; i++) {
								decenasxxh[i] = iniddx - i*60;
								decenasyyh[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;
							
							
						}
					}
				}
			}
	}
	
	if (accesdecena9 == 1){			
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < divisor; k++) {
					if ((decenasxxh[i] >= gruposx[k]) && (decenasxxh[i] + anchodde  <= 
						gruposx[k] + anchodi) && (decenasyyh[i] >= gruposy[k]) && (decenasyyh[i] + altodde <= gruposy[k] + altodi) && verydecen9 == 0) {						
						cadidecen99 += 1;
						if (cadidecen99 == 10 && revisiondecdecena < calculo3 ) {
							accesdecena10 = 1;
							verydecen9 = 1;
							controldecena = 9;
							
							var  decennna91 = Object.create(decenareparti);
								adidecen9[0] = decennna91;
							var  decennna92 = Object.create(decenareparti);
				 				adidecen9[1] = decennna92;
							var  decennna93 = Object.create(decenareparti);
				 				adidecen9[2] = decennna93;
							var  decennna94 = Object.create(decenareparti);
								adidecen9[3] = decennna94;
							var  decennna95 = Object.create(decenareparti);
								adidecen9[4] = decennna95;
							var  decennna96 = Object.create(decenareparti);
								adidecen9[5] = decennna96;
							var  decennna97 = Object.create(decenareparti);
								adidecen9[6] = decennna97;
							var  decennna98 = Object.create(decenareparti);
								adidecen9[7] = decennna98;
							var  decennna99 = Object.create(decenareparti);
				 				adidecen9[8] = decennna99;
							var  decennna910 = Object.create(decenareparti);
								adidecen9[9] = decennna910;
							
							for (var i = 0; i < 10; i++) {
								decenasxxi[i] = iniddx - i*60;
								decenasyyi[i] = iniddy;
							}	
							
							controlCentena();			
							centenas[c] = 0;
							centenasxx[c] = undefined;
							centenasyy[c] = undefined;							
						}
					}
				}
			}
	}
	
	
//CREACIÓN DE DECENAS CUANDO EL SOBRANTE ES >= QUE 10

if (revisiondecdecena == calculo3 && particulardecena == 0 && controluniparty == 1 ) {
	if (calculo2 == 10 || calculo4 == 10 || (calculo2 > 10 && calculo2 < 20) ||
			(calculo4 > 10 && calculo4 < 20)){
		
			if (construye10 == 1) {
				
				accesdecena11 = 1;				
				controldecena = 10;
				particulardecena = 1;
				
				var  decennna101 = Object.create(decenareparti);
					adidecen10[0] = decennna101;
				var  decennna102 = Object.create(decenareparti);
					adidecen10[1] = decennna102;
				var  decennna103 = Object.create(decenareparti);
					adidecen10[2] = decennna103;
				var  decennna104 = Object.create(decenareparti);
					adidecen10[3] = decennna104;
				var  decennna105 = Object.create(decenareparti);
					adidecen10[4] = decennna105;
				var  decennna106 = Object.create(decenareparti);
					adidecen10[5] = decennna106;
				var  decennna107 = Object.create(decenareparti);
					adidecen10[6] = decennna107;
				var  decennna108 = Object.create(decenareparti);
					adidecen10[7] = decennna108;
				var  decennna109 = Object.create(decenareparti);
					adidecen10[8] = decennna109;
				var  decennna1010 = Object.create(decenareparti);
					adidecen10[9] = decennna1010;
							
				for (var i = 0; i < 10; i++) {
					decenasxxj[i] = iniddx - i*60;
					decenasyyj[i] = iniddy;
				}
				
				controlCentena();			
				centenas[c] = 0;
				centenasxx[c] = undefined;
				centenasyy[c] = undefined;
				
			}
	}
}
	
	
	
	
		
	}//FIN FUNCIÓN PRINCIPAL DE CREACIÓN DE DECENAS 
		
		
		
		function controlCentena(){
		if (comodincentenas == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((centenasxx[c] > gruposx[j] + anchodi) || (centenasxx[c] + anchocent < gruposx[j]) || (centenasyy[c] > gruposy[j] + altodi) || 	(centenasyy[c]+altocent < gruposy[j])) && comodincentenas == 0) {		
						contacto += 1;					 	
					}					 
				 }				
				if (contacto == divisor){
					    //centenas[c] = 0;
					 	comodincentenas = 1;
						contacto = 0;
						
				}else {
					contacto = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincentenas == 0); 			
		}			
		}