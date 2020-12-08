// JavaScript Document

function creaUnidades(){	
	calculo1 = 0; calculo2 = 0; calculo3 = 0; calculo4 = 0; calculo5 = 0; 
	calculo6 = 0; calculo7 = 0; calculo8 = 0; calculo9 = 0; calculo10 = 0;
	calculo11 = 0; calculo12 = 0; calculo13 = 0; calculo14 = 0; calculo15 = 0; 
	calculo16 = 0; calculo17; sobrante2 = 0; sobrante4 = 0;
	
	if (centena111 < divisor && centena111 != 0){	
	
		calculo1 = centena111*10 + decena111;//total decenas
		calculo2 = calculo1 % divisor;//sobrante de decenas
		calculo3 = calculo1 - calculo2;//decenas necesarias
		calculo6 = calculo2 * 10 + unidad111;//cantidad total de unidades
		calculo7 = calculo6 % divisor;//sobrante unidades
		calculo8 = calculo6 - calculo7;//unidades necesarias
		if (calculo6 < divisor) {
			calculo8 = 0;
		}
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
		if (calculo9 < divisor) {
			calculo8 = 0;
		}
	}
	
	if (centena111 == divisor){
		if (decena111 >= divisor) {
		calculo11 = decena111 % divisor;//sobrante de decenas		
		calculo12 = calculo11 * 10 + unidad111;//total de unidades
		calculo13 = calculo12 % divisor;//sobrante de unidades		
		calculo8 = calculo12 - calculo13;//unidades necesarias
		if (calculo12 < divisor){
			calculo8 = 0;			
		}
		calculo3 = decena111 - calculo11;//decenas necesarias
		} else {
			calculo12 = decena111 * 10 + unidad111;//total de unidades
			calculo13 = calculo12 % divisor;//sobrante de unidades		
			calculo8 = calculo12 - calculo13;//unidades necesarias
			if (calculo12 < divisor) {
				calculo8 = 0;
		}
		}
	}
	
	if (centena111 == 0 && decena111 >= divisor) {
		calculo14 = decena111 % divisor;//sobrante de decenas
		calculo3 = decena111 - calculo14;//decenas necesarias
		calculo15 = calculo14 * 10 + unidad111;//total unidades
		calculo16 = calculo15 % divisor;//sobrante unidades
		calculo8 = calculo15 - calculo16;//unidades necesarias
		if (calculo15 < divisor){
			calculo8 = 0;			
		}
	}
	
	
	if (centena111 == 0 && decena111 < divisor) {
		calculo14 = decena111 *10 + unidad111;//total unidades		
		calculo16 = calculo14 % divisor;//sobrante unidades
		calculo8 = calculo14 - calculo16;//unidades necesarias	
		if (calculo14 < divisor){
			calculo8 = 0;			
		}
	}
	
	if (calculo2 < 10  || calculo4 < 10 ) {		
		sobrante2 = 83;
		sobrante4 = 83;
	}	
	
	if (calculo2 >= 10  || calculo4 >= 10 ) {//REVISAR LA IGUALDAD
		sobrante2 = calculo2 % 10;
		sobrante4 = calculo4 % 10;
	}

	comodincontrol1 = 0;	
	contact44 = 0;
	
	var cadiuni1 = 0, cadiuni10 = 0, cadiuni19 = 0, cadiuni2 = 0, cadiuni11 = 0; 
	var cadiuni20 = 0, cadiuni3 = 0, cadiuni12 = 0, cadiuni4 = 0, cadiuni13 = 0;
	var cadiuni5 = 0, cadiuni14 = 0, cadiuni6 = 0, cadiuni15 = 0, cadiuni7 = 0; 
	var cadiuni16 = 0, cadiuni8 = 0, cadiuni17 = 0, cadiuni9 = 0, cadiuni18 = 0;
	
	cadiuni1 = 0; cadiuni10 = 0; cadiuni19 = 0; cadiuni2 = 0; cadiuni11 = 0; 
	cadiuni20 = 0; cadiuni3 = 0; cadiuni12 = 0; cadiuni4 = 0; cadiuni13 = 0;
	cadiuni5 = 0; cadiuni14 = 0; cadiuni6 = 0; cadiuni15 = 0; cadiuni7 = 0; 
	cadiuni16 = 0; cadiuni8 = 0; cadiuni17 = 0; cadiuni9 = 0; cadiuni18 = 0;
	
	function unidadInterna(){		
		var  unidadu11 = Object.create(objetoUnidad);
			 adiuni1[0] = unidadu11;
		var  unidadu12 = Object.create(objetoUnidad);
			 adiuni1[1] = unidadu12;
		var  unidadu13 = Object.create(objetoUnidad);
			 adiuni1[2] = unidadu13;
		var  unidadu14 = Object.create(objetoUnidad);
			 adiuni1[3] = unidadu14;
		var  unidadu15 = Object.create(objetoUnidad);
			 adiuni1[4] = unidadu15;
		var  unidadu16 = Object.create(objetoUnidad);
			 adiuni1[5] = unidadu16;
		var  unidadu17 = Object.create(objetoUnidad);
			 adiuni1[6] = unidadu17;
		var  unidadu18 = Object.create(objetoUnidad);
			 adiuni1[7] = unidadu18;
		var  unidadu19 = Object.create(objetoUnidad);
			 adiuni1[8] = unidadu19;
		var  unidadu110 = Object.create(objetoUnidad);
			 adiuni1[9] = unidadu110;		
	}
	
	document.getElementById("wilmar4").innerHTML = ""+revisiondecdecena+"";
	document.getElementById("wilmar5").innerHTML = ""+calculo3+"";
	document.getElementById("wilmar6").innerHTML = ""+sobrante2+"";
	document.getElementById("wilmar7").innerHTML = ""+sobrante4+"";
	
	if (unidad111 > 0 && decena111 >= 0) {
		for (var i = 0; i < unidad111; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxx[i] >= gruposx[j]) && (unidasxx[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyy[i] >= gruposy[j]) && (unidasyy[i] + altomue <= gruposy[j] + altodi) && veryuni1 == 0) {
					
					cadiuni1 += 1;					
					
					//if (cadiuni1 == unidad111) {
					
					if ((cadiuni1 == unidad111 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni1 == unidad111 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad2 = 1;
						accesunidad1 = 1;
						veryuni1 = 1;
						
						unidadInterna();				
						
						for (var i = 0; i < 10; i++) {
							unidasxxa[i] = muevex - i*30;
							unidasyya[i] = muevey;
						}
						
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}						
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}			
	
	if (dividendo >= 200 && dividendo <= 999 ) {
		if ((centena111 < divisor && unidad111 == 0 && decena111 == 0) || 
			(centena111 > divisor && unidad111 == 0 && decena111 == 0) ) { 
			
			//if (especialuni11 == 0){
  
  			if ((especialuni11 == 0 && (detectorcero < sobrante2 ||
				detectorcero < sobrante4) && verificaunidades < calculo8) && revisiondecdecena == calculo3 || (especialuni11 == 0 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 
		 		&& revisiondecdecena == calculo3)) {  
		  
	  				if (calculo2 != 0 || calculo4 != 0 ) {
						
						especialuni11 = 1;
	  					accesunidad2 = 1;
						accesunidad1 = 1;
						
						unidadInterna();
						
						for (var i = 0; i < 10; i++) {
							unidasxxa[i] = muevex - i*30;
							unidasyya[i] = muevey;
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}						
						
					}
			}
		}
	}
	
	
	if (dividendo >= 200 && dividendo <= 999 ) {
		if ((centena111 <= divisor && unidad111 == 0 && decena111 != 0) || 
			(centena111 >= divisor && unidad111 == 0 && decena111 != 0) ) { 
			
			//if (especialuni11 == 0){
			
			if ((especialuni11 == 0 && (detectorcero < sobrante2 ||
				detectorcero < sobrante4) && verificaunidades < calculo8) && revisiondecdecena == calculo3 || (especialuni11 == 0 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 
		 		&& revisiondecdecena == calculo3)) {  
		  
	  				if (calculo2 != 0 || calculo4 != 0 || centena111 == divisor) {
						
						especialuni11 = 1;
	  					accesunidad2 = 1;
						accesunidad1 = 1;
						
						unidadInterna();
						
						for (var i = 0; i < 10; i++) {
							unidasxxa[i] = muevex - i*30;
							unidasyya[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
			}
		}
	}
						
	if (dividendo >= 15 && dividendo <= 99 && especialuni11 == 0  ) {		
 			if ((decena111 > divisor && unidad111 == 0) ||
				(decena111 < divisor && unidad111 == 0)) {	
			
  				if (verificaunidades < calculo8 && revisiondecdecena == calculo3 &&
						calculo8 >= divisor) {					  
						  
						especialuni11 = 1;
	  					accesunidad2 = 1;
						accesunidad1 = 1;
					
						unidadInterna();
					
						for (var i = 0; i < 10; i++) {
							unidasxxa[i] = muevex - i*30;
							unidasyya[i] = muevey;
						}
					
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
					
				}
			}
	}
						
	
	if (accesunidad2 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxa[i] >= gruposx[j]) && (unidasxxa[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyya[i] >= gruposy[j]) && (unidasyya[i] + altomue <= gruposy[j] + altodi) && veryuni2 == 0) {
					
					cadiuni2 += 1;					
					
					//if (cadiuni2 == 10) {
					
					if ((cadiuni2 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni2 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad3 = 1;
						veryuni2 = 1;
						
						var  unidadu21 = Object.create(objetoUnidad);
			 				adiuni2[0] = unidadu21;
						var  unidadu22 = Object.create(objetoUnidad);
			 				adiuni2[1] = unidadu22;
						var  unidadu23 = Object.create(objetoUnidad);
							adiuni2[2] = unidadu23;
						var  unidadu24 = Object.create(objetoUnidad);
							adiuni2[3] = unidadu24;
						var  unidadu25 = Object.create(objetoUnidad);
			 				adiuni2[4] = unidadu25;
						var  unidadu26 = Object.create(objetoUnidad);
			 				adiuni2[5] = unidadu26;
						var  unidadu27 = Object.create(objetoUnidad);
							adiuni2[6] = unidadu27;
						var  unidadu28 = Object.create(objetoUnidad);
							adiuni2[7] = unidadu28;
						var  unidadu29 = Object.create(objetoUnidad);
			 				adiuni2[8] = unidadu29;
						var  unidadu210 = Object.create(objetoUnidad);
			 				adiuni2[9] = unidadu210;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxb[i] = muevex - i*30;
							unidasyyb[i] = muevey;
						}
						
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}		
	}
	
	
	if (accesunidad3 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxb[i] >= gruposx[j]) && (unidasxxb[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyb[i] >= gruposy[j]) && (unidasyyb[i] + altomue <= gruposy[j] + altodi) && veryuni3 == 0) {
					
					cadiuni3 += 1;					
					
					//if (cadiuni3 == 10) {
					
					if ((cadiuni3 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni3 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad4 = 1;
						veryuni3 = 1;
						
						var  unidadu31 = Object.create(objetoUnidad);
			 				adiuni3[0] = unidadu31;
						var  unidadu32 = Object.create(objetoUnidad);
			 				adiuni3[1] = unidadu32;
						var  unidadu33 = Object.create(objetoUnidad);
							adiuni3[2] = unidadu33;
						var  unidadu34 = Object.create(objetoUnidad);
							adiuni3[3] = unidadu34;
						var  unidadu35 = Object.create(objetoUnidad);
			 				adiuni3[4] = unidadu35;
						var  unidadu36 = Object.create(objetoUnidad);
			 				adiuni3[5] = unidadu36;
						var  unidadu37 = Object.create(objetoUnidad);
							adiuni3[6] = unidadu37;
						var  unidadu38 = Object.create(objetoUnidad);
							adiuni3[7] = unidadu38;
						var  unidadu39 = Object.create(objetoUnidad);
			 				adiuni3[8] = unidadu39;
						var  unidadu310 = Object.create(objetoUnidad);
			 				adiuni3[9] = unidadu310;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxc[i] = muevex - i*30;
							unidasyyc[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad4 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxc[i] >= gruposx[j]) && (unidasxxc[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyc[i] >= gruposy[j]) && (unidasyyc[i] + altomue <= gruposy[j] + altodi) && veryuni4 == 0) {
					
					cadiuni4 += 1;					
					
					//if (cadiuni4 == 10) {
					
					if ((cadiuni4 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni4 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad5 = 1;
						veryuni4 = 1;
						
						var  unidadu41 = Object.create(objetoUnidad);
			 				adiuni4[0] = unidadu41;
						var  unidadu42 = Object.create(objetoUnidad);
			 				adiuni4[1] = unidadu42;
						var  unidadu43 = Object.create(objetoUnidad);
							adiuni4[2] = unidadu43;
						var  unidadu44 = Object.create(objetoUnidad);
							adiuni4[3] = unidadu44;
						var  unidadu45 = Object.create(objetoUnidad);
			 				adiuni4[4] = unidadu45;
						var  unidadu46 = Object.create(objetoUnidad);
			 				adiuni4[5] = unidadu46;
						var  unidadu47 = Object.create(objetoUnidad);
							adiuni4[6] = unidadu47;
						var  unidadu48 = Object.create(objetoUnidad);
							adiuni4[7] = unidadu48;
						var  unidadu49 = Object.create(objetoUnidad);
			 				adiuni4[8] = unidadu49;
						var  unidadu410 = Object.create(objetoUnidad);
			 				adiuni4[9] = unidadu410;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxd[i] = muevex - i*30;
							unidasyyd[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad5 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxd[i] >= gruposx[j]) && (unidasxxd[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyd[i] >= gruposy[j]) && (unidasyyd[i] + altomue <= gruposy[j] + altodi) && veryuni5 == 0) {
					
					cadiuni5 += 1;					
					
					//if (cadiuni5 == 10) {
					
					if ((cadiuni5 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni5 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad6 = 1;
						veryuni5 = 1;
						
						var  unidadu51 = Object.create(objetoUnidad);
			 				adiuni5[0] = unidadu51;
						var  unidadu52 = Object.create(objetoUnidad);
			 				adiuni5[1] = unidadu52;
						var  unidadu53 = Object.create(objetoUnidad);
							adiuni5[2] = unidadu53;
						var  unidadu54 = Object.create(objetoUnidad);
							adiuni5[3] = unidadu54;
						var  unidadu55 = Object.create(objetoUnidad);
			 				adiuni5[4] = unidadu55;
						var  unidadu56 = Object.create(objetoUnidad);
			 				adiuni5[5] = unidadu56;
						var  unidadu57 = Object.create(objetoUnidad);
							adiuni5[6] = unidadu57;
						var  unidadu58 = Object.create(objetoUnidad);
							adiuni5[7] = unidadu58;
						var  unidadu59 = Object.create(objetoUnidad);
			 				adiuni5[8] = unidadu59;
						var  unidadu510 = Object.create(objetoUnidad);
			 				adiuni5[9] = unidadu510;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxe[i] = muevex - i*30;
							unidasyye[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad6 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxe[i] >= gruposx[j]) && (unidasxxe[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyye[i] >= gruposy[j]) && (unidasyye[i] + altomue <= gruposy[j] + altodi) && veryuni6 == 0) {
					
					cadiuni6 += 1;					
					
					//if (cadiuni6 == 10) {
					
					if ((cadiuni6 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni6 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad7 = 1;
						veryuni6 = 1;
						
						var  unidadu61 = Object.create(objetoUnidad);
			 				adiuni6[0] = unidadu61;
						var  unidadu62 = Object.create(objetoUnidad);
			 				adiuni6[1] = unidadu62;
						var  unidadu63 = Object.create(objetoUnidad);
							adiuni6[2] = unidadu63;
						var  unidadu64 = Object.create(objetoUnidad);
							adiuni6[3] = unidadu64;
						var  unidadu65 = Object.create(objetoUnidad);
			 				adiuni6[4] = unidadu65;
						var  unidadu66 = Object.create(objetoUnidad);
			 				adiuni6[5] = unidadu66;
						var  unidadu67 = Object.create(objetoUnidad);
							adiuni6[6] = unidadu67;
						var  unidadu68 = Object.create(objetoUnidad);
							adiuni6[7] = unidadu68;
						var  unidadu69 = Object.create(objetoUnidad);
			 				adiuni6[8] = unidadu69;
						var  unidadu610 = Object.create(objetoUnidad);
			 				adiuni6[9] = unidadu610;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxf[i] = muevex - i*30;
							unidasyyf[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad7 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxf[i] >= gruposx[j]) && (unidasxxf[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyf[i] >= gruposy[j]) && (unidasyyf[i] + altomue <= gruposy[j] + altodi) && veryuni7 == 0) {
					
					cadiuni7 += 1;					
					
					//if (cadiuni7 == 10) {
					
					if ((cadiuni7 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni7 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad8 = 1;
						veryuni7 = 1;
						
						var  unidadu71 = Object.create(objetoUnidad);
			 				adiuni7[0] = unidadu71;
						var  unidadu72 = Object.create(objetoUnidad);
			 				adiuni7[1] = unidadu72;
						var  unidadu73 = Object.create(objetoUnidad);
							adiuni7[2] = unidadu73;
						var  unidadu74 = Object.create(objetoUnidad);
							adiuni7[3] = unidadu74;
						var  unidadu75 = Object.create(objetoUnidad);
			 				adiuni7[4] = unidadu75;
						var  unidadu76 = Object.create(objetoUnidad);
			 				adiuni7[5] = unidadu76;
						var  unidadu77 = Object.create(objetoUnidad);
							adiuni7[6] = unidadu77;
						var  unidadu78 = Object.create(objetoUnidad);
							adiuni7[7] = unidadu78;
						var  unidadu79 = Object.create(objetoUnidad);
			 				adiuni7[8] = unidadu79;
						var  unidadu710 = Object.create(objetoUnidad);
			 				adiuni7[9] = unidadu710;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxg[i] = muevex - i*30;
							unidasyyg[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	if (accesunidad8 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxg[i] >= gruposx[j]) && (unidasxxg[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyg[i] >= gruposy[j]) && (unidasyyg[i] + altomue <= gruposy[j] + altodi) && veryuni8 == 0) {
					
					cadiuni8 += 1;					
					
					//if (cadiuni8 == 10) {
					
					if ((cadiuni8 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni8 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad9 = 1;
						veryuni8 = 1;
						
						var  unidadu81 = Object.create(objetoUnidad);
			 				adiuni8[0] = unidadu81;
						var  unidadu82 = Object.create(objetoUnidad);
			 				adiuni8[1] = unidadu82;
						var  unidadu83 = Object.create(objetoUnidad);
							adiuni8[2] = unidadu83;
						var  unidadu84 = Object.create(objetoUnidad);
							adiuni8[3] = unidadu84;
						var  unidadu85 = Object.create(objetoUnidad);
			 				adiuni8[4] = unidadu85;
						var  unidadu86 = Object.create(objetoUnidad);
			 				adiuni8[5] = unidadu86;
						var  unidadu87 = Object.create(objetoUnidad);
							adiuni8[6] = unidadu87;
						var  unidadu88 = Object.create(objetoUnidad);
							adiuni8[7] = unidadu88;
						var  unidadu89 = Object.create(objetoUnidad);
			 				adiuni8[8] = unidadu89;
						var  unidadu810 = Object.create(objetoUnidad);
			 				adiuni8[9] = unidadu810;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxh[i] = muevex - i*30;
							unidasyyh[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad9 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxh[i] >= gruposx[j]) && (unidasxxh[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyh[i] >= gruposy[j]) && (unidasyyh[i] + altomue <= gruposy[j] + altodi) && veryuni9 == 0) {
					
					cadiuni9 += 1;					
					
					//if (cadiuni9 == 10) {
					
					if ((cadiuni9 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni9 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad10 = 1;
						veryuni9 = 1;
						
						var  unidadu91 = Object.create(objetoUnidad);
			 				adiuni9[0] = unidadu91;
						var  unidadu92 = Object.create(objetoUnidad);
			 				adiuni9[1] = unidadu92;
						var  unidadu93 = Object.create(objetoUnidad);
							adiuni9[2] = unidadu93;
						var  unidadu94 = Object.create(objetoUnidad);
							adiuni9[3] = unidadu94;
						var  unidadu95 = Object.create(objetoUnidad);
			 				adiuni9[4] = unidadu95;
						var  unidadu96 = Object.create(objetoUnidad);
			 				adiuni9[5] = unidadu96;
						var  unidadu97 = Object.create(objetoUnidad);
							adiuni9[6] = unidadu97;
						var  unidadu98 = Object.create(objetoUnidad);
							adiuni9[7] = unidadu98;
						var  unidadu99 = Object.create(objetoUnidad);
			 				adiuni9[8] = unidadu99;
						var  unidadu910 = Object.create(objetoUnidad);
			 				adiuni9[9] = unidadu910;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxi[i] = muevex - i*30;
							unidasyyi[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	if (accesunidad10 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxi[i] >= gruposx[j]) && (unidasxxi[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyi[i] >= gruposy[j]) && (unidasyyi[i] + altomue <= gruposy[j] + altodi) && veryuni10 == 0) {
					
					cadiuni10 += 1;					
					
					//if (cadiuni10 == 10) {
					
					if ((cadiuni10 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni10 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad11 = 1;
						veryuni10 = 1;
						
						
						
						var  unidadu101 = Object.create(objetoUnidad);
			 				adiuni10[0] = unidadu101;
						var  unidadu102 = Object.create(objetoUnidad);
			 				adiuni10[1] = unidadu102;
						var  unidadu103 = Object.create(objetoUnidad);
							adiuni10[2] = unidadu103;
						var  unidadu104 = Object.create(objetoUnidad);
							adiuni10[3] = unidadu104;
						var  unidadu105 = Object.create(objetoUnidad);
			 				adiuni10[4] = unidadu105;
						var  unidadu106 = Object.create(objetoUnidad);
			 				adiuni10[5] = unidadu106;
						var  unidadu107 = Object.create(objetoUnidad);
							adiuni10[6] = unidadu107;
						var  unidadu108 = Object.create(objetoUnidad);
							adiuni10[7] = unidadu108;
						var  unidadu109 = Object.create(objetoUnidad);
			 				adiuni10[8] = unidadu109;
						var  unidadu1010 = Object.create(objetoUnidad);
			 				adiuni10[9] = unidadu1010;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxj[i] = muevex - i*30;
							unidasyyj[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}
	
	if (accesunidad11 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxj[i] >= gruposx[j]) && (unidasxxj[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyj[i] >= gruposy[j]) && (unidasyyj[i] + altomue <= gruposy[j] + altodi) && veryuni11 == 0) {
					
					cadiuni11 += 1;					
					
					//if (cadiuni11 == 10) {
					
					if ((cadiuni11 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni11 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad12 = 1;
						veryuni11 = 1;
						
						var  unidadu111 = Object.create(objetoUnidad);
			 				adiuni11[0] = unidadu111;
						var  unidadu112 = Object.create(objetoUnidad);
			 				adiuni11[1] = unidadu112;
						var  unidadu113 = Object.create(objetoUnidad);
							adiuni11[2] = unidadu113;
						var  unidadu114 = Object.create(objetoUnidad);
							adiuni11[3] = unidadu114;
						var  unidadu115 = Object.create(objetoUnidad);
			 				adiuni11[4] = unidadu115;
						var  unidadu116 = Object.create(objetoUnidad);
			 				adiuni11[5] = unidadu116;
						var  unidadu117 = Object.create(objetoUnidad);
							adiuni11[6] = unidadu117;
						var  unidadu118 = Object.create(objetoUnidad);
							adiuni11[7] = unidadu118;
						var  unidadu119 = Object.create(objetoUnidad);
			 				adiuni11[8] = unidadu119;
						var  unidadu1110 = Object.create(objetoUnidad);
			 				adiuni11[9] = unidadu1110;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxk[i] = muevex - i*30;
							unidasyyk[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad12 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxk[i] >= gruposx[j]) && (unidasxxk[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyk[i] >= gruposy[j]) && (unidasyyk[i] + altomue <= gruposy[j] + altodi) && veryuni12 == 0) {
					
					cadiuni12 += 1;					
					
					//if (cadiuni12 == 10) {
					
					if ((cadiuni12 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni12 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad13 = 1;
						veryuni12 = 1;
						
						var  unidadu121 = Object.create(objetoUnidad);
			 				adiuni12[0] = unidadu121;
						var  unidadu122 = Object.create(objetoUnidad);
			 				adiuni12[1] = unidadu122;
						var  unidadu123 = Object.create(objetoUnidad);
							adiuni12[2] = unidadu123;
						var  unidadu124 = Object.create(objetoUnidad);
							adiuni12[3] = unidadu124;
						var  unidadu125 = Object.create(objetoUnidad);
			 				adiuni12[4] = unidadu125;
						var  unidadu126 = Object.create(objetoUnidad);
			 				adiuni12[5] = unidadu126;
						var  unidadu127 = Object.create(objetoUnidad);
							adiuni12[6] = unidadu127;
						var  unidadu128 = Object.create(objetoUnidad);
							adiuni12[7] = unidadu128;
						var  unidadu129 = Object.create(objetoUnidad);
			 				adiuni12[8] = unidadu129;
						var  unidadu1210 = Object.create(objetoUnidad);
			 				adiuni12[9] = unidadu1210;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxl[i] = muevex - i*30;
							unidasyyl[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
				
			}
		}
	}
	
	
	if (accesunidad13 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxl[i] >= gruposx[j]) && (unidasxxl[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyyl[i] >= gruposy[j]) && (unidasyyl[i] + altomue <= gruposy[j] + altodi) && veryuni13 == 0) {
					
					cadiuni13 += 1;					
					
					//if (cadiuni13 == 10) {
					
					if ((cadiuni13 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni13 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad14 = 1;
						veryuni13 = 1;
						
						var  unidadu131 = Object.create(objetoUnidad);
			 				adiuni13[0] = unidadu131;
						var  unidadu132 = Object.create(objetoUnidad);
			 				adiuni13[1] = unidadu132;
						var  unidadu133 = Object.create(objetoUnidad);
							adiuni13[2] = unidadu133;
						var  unidadu134 = Object.create(objetoUnidad);
							adiuni13[3] = unidadu134;
						var  unidadu135 = Object.create(objetoUnidad);
			 				adiuni13[4] = unidadu135;
						var  unidadu136 = Object.create(objetoUnidad);
			 				adiuni13[5] = unidadu136;
						var  unidadu137 = Object.create(objetoUnidad);
							adiuni13[6] = unidadu137;
						var  unidadu138 = Object.create(objetoUnidad);
							adiuni13[7] = unidadu138;
						var  unidadu139 = Object.create(objetoUnidad);
			 				adiuni13[8] = unidadu139;
						var  unidadu1310 = Object.create(objetoUnidad);
			 				adiuni13[9] = unidadu1310;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxm[i] = muevex - i*30;
							unidasyym[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
						
					}
				}
			}
		}
	}
	
	
	if (accesunidad14 == 1){
		
		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < divisor; j++) {
				if ((unidasxxm[i] >= gruposx[j]) && (unidasxxm[i] + anchomue  <= 
					gruposx[j] + anchodi) && (unidasyym[i] >= gruposy[j]) && (unidasyym[i] + altomue <= gruposy[j] + altodi) && veryuni14 == 0) {
					
					cadiuni14 += 1;					
					
					//if (cadiuni14 == 10) {
					
					if ((cadiuni14 == 10 && (detectorcero < sobrante2 || detectorcero < sobrante4) && verificaunidades < calculo8 && revisiondecdecena == calculo3) || (cadiuni14 == 10 && verificaunidades < calculo8 && particulardecena == 1 && controluniparty == 1 && revisiondecdecena == calculo3)) {				
					
						accesunidad15 = 1;
						veryuni14 = 1;
						
						var  unidadu141 = Object.create(objetoUnidad);
			 				adiuni14[0] = unidadu141;
						var  unidadu142 = Object.create(objetoUnidad);
			 				adiuni14[1] = unidadu142;
						var  unidadu143 = Object.create(objetoUnidad);
							adiuni14[2] = unidadu143;
						var  unidadu144 = Object.create(objetoUnidad);
							adiuni14[3] = unidadu144;
						var  unidadu145 = Object.create(objetoUnidad);
			 				adiuni14[4] = unidadu145;
						var  unidadu146 = Object.create(objetoUnidad);
			 				adiuni14[5] = unidadu146;
						var  unidadu147 = Object.create(objetoUnidad);
							adiuni14[6] = unidadu147;
						var  unidadu148 = Object.create(objetoUnidad);
							adiuni14[7] = unidadu148;
						var  unidadu149 = Object.create(objetoUnidad);
			 				adiuni14[8] = unidadu149;
						var  unidadu1410 = Object.create(objetoUnidad);
			 				adiuni14[9] = unidadu1410;						
									
						
						for (var i = 0; i < 10; i++) {
							unidasxxn[i] = muevex - i*30;
							unidasyyn[i] = muevey;
						}
						
						if (controldecena == 0){
							borrarDecenacero();
							decenas[c] = 0;
							decenasxx[c] = undefined;
							decenasyy[c] = undefined;							
						}
						
						if (controldecena == 1){
							borrarDecenauno();
							adidecen1[c] = 0;
							decenasxxa[c] = undefined;
							decenasyya[c] = undefined;							
						}
						
						if (controldecena == 2){
							borrarDecenados();
							adidecen2[c] = 0;
							decenasxxb[c] = undefined;
							decenasyyb[c] = undefined;							
						}
						
						if (controldecena == 3){
							borrarDecenatres();
							adidecen3[c] = 0;
							decenasxxc[c] = undefined;
							decenasyyc[c] = undefined;							
						}
						
						if (controldecena == 4){
							borrarDecenacuatro();
							adidecen4[c] = 0;
							decenasxxd[c] = undefined;
							decenasyyd[c] = undefined;							
						}
						
						if (controldecena == 5){
							borrarDecenacinco();
							adidecen5[c] = 0;
							decenasxxe[c] = undefined;
							decenasyye[c] = undefined;							
						}
						
						if (controldecena == 6){
							borrarDecenaseis();
							adidecen6[c] = 0;
							decenasxxf[c] = undefined;
							decenasyyf[c] = undefined;							
						}
						
						if (controldecena == 7){
							borrarDecenasiete();
							adidecen7[c] = 0;
							decenasxxg[c] = undefined;
							decenasyyg[c] = undefined;							
						}
						
						if (controldecena == 8){
							borrarDecenaocho();
							adidecen8[c] = 0;
							decenasxxh[c] = undefined;
							decenasyyh[c] = undefined;							
						}
						
						if (controldecena == 9){
							borrarDecenanueve();
							adidecen9[c] = 0;
							decenasxxi[c] = undefined;
							decenasyyi[c] = undefined;							
						}
						
						if (controldecena == 10){
							borrarDecenadiez();
							adidecen10[c] = 0;
							decenasxxj[c] = undefined;
							decenasyyj[c] = undefined;							
						}
						
					}
				}
			}
		}
	}
	
if ((calculo2 == 10 && detectorcero == 0 && detectorcero == sobrante2) ||
	(calculo4 == 10 && detectorcero == 0 && detectorcero == sobrante4)) {
		construye10 = 1;	
} else if ((detectorcero > 0 && detectorcero == sobrante2) ||
	(detectorcero > 0 && detectorcero == sobrante4)) {
		construye10 = 1;	
} else {
	construye10 = 0;
}
	
	
}//FIN FUNCIÓN PRINCIPAL


function borrarDecenacero(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxx[c] > gruposx[j] + anchodi) || (decenasxx[c] + anchodde < gruposx[j]) || (decenasyy[c] > gruposy[j] + altodi) || (decenasyy[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;					
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenauno(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxa[c] > gruposx[j] + anchodi) || (decenasxxa[c] + anchodde < gruposx[j]) || (decenasyya[c] > gruposy[j] + altodi) || 	(decenasyya[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenados(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxb[c] > gruposx[j] + anchodi) || (decenasxxb[c] + anchodde < gruposx[j]) || (decenasyyb[c] > gruposy[j] + altodi) || (decenasyyb[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenatres(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxc[c] > gruposx[j] + anchodi) || (decenasxxc[c] + anchodde < gruposx[j]) || (decenasyyc[c] > gruposy[j] + altodi) || (decenasyyc[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}	
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenacuatro(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxd[c] > gruposx[j] + anchodi) || (decenasxxd[c] + anchodde < gruposx[j]) || (decenasyyd[c] > gruposy[j] + altodi) || (decenasyyd[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenacinco(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxe[c] > gruposx[j] + anchodi) || (decenasxxe[c] + anchodde < gruposx[j]) || (decenasyye[c] > gruposy[j] + altodi) || (decenasyye[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}	
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenaseis(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxf[c] > gruposx[j] + anchodi) || (decenasxxf[c] + anchodde < gruposx[j]) || (decenasyyf[c] > gruposy[j] + altodi) || (decenasyyf[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenasiete(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxg[c] > gruposx[j] + anchodi) || (decenasxxg[c] + anchodde < gruposx[j]) || (decenasyyg[c] > gruposy[j] + altodi) || (decenasyyg[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenaocho(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxh[c] > gruposx[j] + anchodi) || (decenasxxh[c] + anchodde < gruposx[j]) || (decenasyyh[c] > gruposy[j] + altodi) || (decenasyyh[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}	
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenanueve(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxi[c] > gruposx[j] + anchodi) || (decenasxxi[c] + anchodde < gruposx[j]) || (decenasyyi[c] > gruposy[j] + altodi) || (decenasyyi[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}	
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}

function borrarDecenadiez(){
		if (comodincontrol1 == 0) {			
			c = 0;
			do{				
				for (var j = 0; j < divisor; j++) {
					if (((decenasxxj[c] > gruposx[j] + anchodi) || (decenasxxj[c] + anchodde < gruposx[j]) || (decenasyyj[c] > gruposy[j] + altodi) || (decenasyyj[c]+ altodde < gruposy[j])) && comodincontrol1 == 0) {		
						contact44 += 1;					 	
					}					 
				 }				
				if (contact44 == divisor){					    
					 	comodincontrol1 = 1;
						contact44 = 0;	
						detectorcero += 1;
				}else {
					contact44 = 0;
					c += 1;
				}	
				if (c >= 10){
					break;					
				}
			}while(comodincontrol1 == 0); 			
		}			
		}
