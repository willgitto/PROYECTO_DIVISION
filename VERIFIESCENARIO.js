// JavaScript Document

function escenaRiowill(){	
	
	divin1 = 0; 
	divin2 = 0; 
	divin3 = 0; 
	divin4 = 0; 
	divin5 = 0; 
	divin6 = 0;
	divin7 = 0; 
	divin8 = 0;
	divin9 = 0;
	divin10 = 0;
	divin11 = 0;
	divin12 = 0;
	decena1 = 0;
	decena2 = 0;
	unidad1 = 0; 
	centena1 = 0; 
	coc1 = 0;
	coc2 = 0;
	coc3 = 0;
	coc4 = 0;
	prueba1 = 0;
	prueba2 = 0;
	numeral1 = 0; 
	numeral2 = 0;
	numeral3 = 0;
	numeral4 = 0;
	numeral5 = 0;
	numeral6 = 0;
	numeral7 = 0;
	numeral8 = 0; 
	numeral9 = 0; 
	numeral10 = 0;
	numeral11 = 0;
	numeral12 = 0;
	numeral01 = 0;
	numeral02 = 0;
	numeral03 = 0;
	numeral04 = 0;
	verytotal = 0;
	revisiondecdecena = 0;
	verificaunidades = 0;
	
	for (var i = 0; i < divisor; i++) {
		cantidadgrupo[i] = 0;		
	}
	
	for (var i = 0; i < centena111; i++) {
		for (var k = 0; k < divisor; k++) {
			if ((centenasxx[i] >= gruposx[k]) && (centenasxx[i] + anchocent  <= gruposx[k] + 	anchodi) && (centenasyy[i] >= gruposy[k]) && (centenasyy[i] + altocent <= 	      gruposy[k] + altodi)) {				
				cantidadgrupo[k] += 100;				
			}
		}
	}
	
	for (var i = 0; i < decena111; i++) {
		for (var k = 0; k < divisor; k++) {
			if ((decenasxx[i] >= gruposx[k]) && (decenasxx[i] + anchodde  <= gruposx[k] + 		anchodi) && (decenasyy[i] >= gruposy[k]) && (decenasyy[i] + altodde <= 			gruposy[k] + altodi)) {	
				
				cantidadgrupo[k] += 10;	
				revisiondecdecena += 1;
			}else if ((decenasxx[i] < gruposx[k]) && (decenasxx[i] + anchodde  > 
					gruposx[k]) && (decenasyy[i] >= gruposy[k]) && (decenasyy[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxx[i] < gruposx[k] + anchodi) && (decenasxx[i] + anchodde  > 			gruposx[k] + anchodi) && (decenasyy[i] >= gruposy[k]) && (decenasyy[i] + 		 altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyy[i] < gruposy[k]) && (decenasyy[i] + altodde > gruposy[k]) && 	 (decenasxx[i] >= gruposx[k]) && (decenasxx[i] + anchodde <= gruposx[k] + 	      anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyy[i] < gruposy[k] + altodi) && (decenasyy[i] + altodde > 			gruposy[k] + altodi) && (decenasxx[i] >= gruposx[k]) && (decenasxx[i] + 		anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxx[i] < gruposx[k]) && (decenasxx[i] + anchodde  > 
					gruposx[k]) && (decenasyy[i] < gruposy[k] + altodi) && (decenasyy[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxx[i] < gruposx[k]) && (decenasxx[i] + anchodde  > 
					gruposx[k]) && (decenasyy[i] < gruposy[k] ) && (decenasyy[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxx[i] < gruposx[k] + anchodi) && (decenasxx[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyy[i] < gruposy[k] ) && (decenasyy[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxx[i] < gruposx[k] + anchodi) && (decenasxx[i] + anchodde  > 
			  gruposx[k] + anchodi) && (decenasyy[i] < gruposy[k] + altodi) && (decenasyy[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	
	for (var i = 0; i < unidad111; i++) {
		for (var k = 0; k < divisor; k++) {
			if ((unidasxx[i] >= gruposx[k]) && (unidasxx[i] + anchomue  <= gruposx[k] + 		anchodi) && (unidasyy[i] >= gruposy[k]) && (unidasyy[i] + altomue <= 			gruposy[k] + altodi)) {	
				
				cantidadgrupo[k] += 1;	
				verificaunidades += 1;
			}else if ((unidasxx[i] < gruposx[k]) && (unidasxx[i] + anchomue  > 
					gruposx[k]) && (unidasyy[i] >= gruposy[k]) && (unidasyy[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxx[i] < gruposx[k] + anchodi) && (unidasxx[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyy[i] >= gruposy[k]) && (unidasyy[i] + 			altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyy[i] < gruposy[k]) && (unidasyy[i] + altomue > gruposy[k]) && 		(unidasxx[i] >= gruposx[k]) && (unidasxx[i] + anchomue  <= 
					gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyy[i] < gruposy[k] + altodi) && (unidasyy[i] + altomue > 				gruposy[k] + altodi) && (unidasxx[i] >= gruposx[k]) && (unidasxx[i] + 			anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxx[i] < gruposx[k]) && (unidasxx[i] + anchomue  > 
					gruposx[k]) && (unidasyy[i] < gruposy[k] + altodi) && (unidasyy[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxx[i] < gruposx[k]) && (unidasxx[i] + anchomue  > 
					gruposx[k]) && (unidasyy[i] < gruposy[k] ) && (unidasyy[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxx[i] < gruposx[k] + anchodi) && (unidasxx[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyy[i] < gruposy[k] ) && (unidasyy[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxx[i] < gruposx[k] + anchodi) && (unidasxx[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyy[i] < gruposy[k] + altodi) && (unidasyy[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		} 
	}
	
	
	
	if ( accesdecena1 == 1){ 
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxa[i] >= gruposx[k]) && (decenasxxa[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyya[i] >= gruposy[k]) && (decenasyya[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;	
					revisiondecdecena += 1;
			}else if ((decenasxxa[i] < gruposx[k]) && (decenasxxa[i] + anchodde  > 
					gruposx[k]) && (decenasyya[i] >= gruposy[k]) && (decenasyya[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxa[i] < gruposx[k] + anchodi) && (decenasxxa[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyya[i] >= gruposy[k]) && (decenasyya[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyya[i] < gruposy[k]) && (decenasyya[i] + altodde > gruposy[k]) 		&& (decenasxxa[i] >= gruposx[k]) && (decenasxxa[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyya[i] < gruposy[k] + altodi) && (decenasyya[i] + altodde > 			gruposy[k] + altodi) && (decenasxxa[i] >= gruposx[k]) && (decenasxxa[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxa[i] < gruposx[k]) && (decenasxxa[i] + anchodde  > 
					gruposx[k]) && (decenasyya[i] < gruposy[k] + altodi) && (decenasyya[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxa[i] < gruposx[k]) && (decenasxxa[i] + anchodde  > 
					gruposx[k]) && (decenasyya[i] < gruposy[k] ) && (decenasyya[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxa[i] < gruposx[k] + anchodi) && (decenasxxa[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyya[i] < gruposy[k] ) && (decenasyya[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxa[i] < gruposx[k] + anchodi) && (decenasxxa[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyya[i] < gruposy[k] + altodi) && (decenasyya[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena2 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxb[i] >= gruposx[k]) && (decenasxxb[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyb[i] >= gruposy[k]) && (decenasyyb[i] + altodde <=     gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 10;	
					revisiondecdecena += 1;
			}else if ((decenasxxb[i] < gruposx[k]) && (decenasxxb[i] + anchodde  > 
					gruposx[k]) && (decenasyyb[i] >= gruposy[k]) && (decenasyyb[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxb[i] < gruposx[k] + anchodi) && (decenasxxb[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyb[i] >= gruposy[k]) && (decenasyyb[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyb[i] < gruposy[k]) && (decenasyyb[i] + altodde > gruposy[k]) 		&& (decenasxxb[i] >= gruposx[k]) && (decenasxxb[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyb[i] < gruposy[k] + altodi) && (decenasyyb[i] + altodde > 			gruposy[k] + altodi) && (decenasxxb[i] >= gruposx[k]) && (decenasxxb[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxb[i] < gruposx[k]) && (decenasxxb[i] + anchodde  > 
					gruposx[k]) && (decenasyyb[i] < gruposy[k] + altodi) && (decenasyyb[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxb[i] < gruposx[k]) && (decenasxxb[i] + anchodde  > 
					gruposx[k]) && (decenasyyb[i] < gruposy[k] ) && (decenasyyb[i] + altodde > gruposy[k])  ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxb[i] < gruposx[k] + anchodi) && (decenasxxb[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyb[i] < gruposy[k] ) && (decenasyyb[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxb[i] < gruposx[k] + anchodi) && (decenasxxb[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyyb[i] < gruposy[k] + altodi) && (decenasyyb[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena3 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxc[i] >= gruposx[k]) && (decenasxxc[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyc[i] >= gruposy[k]) && (decenasyyc[i] + altodde <=     gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxc[i] < gruposx[k]) && (decenasxxc[i] + anchodde  > 
					gruposx[k]) && (decenasyyc[i] >= gruposy[k]) && (decenasyyc[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxc[i] < gruposx[k] + anchodi) && (decenasxxc[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyc[i] >= gruposy[k]) && (decenasyyc[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyc[i] < gruposy[k]) && (decenasyyc[i] + altodde > gruposy[k]) 		&& (decenasxxc[i] >= gruposx[k]) && (decenasxxc[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyc[i] < gruposy[k] + altodi) && (decenasyyc[i] + altodde > 			gruposy[k] + altodi) && (decenasxxc[i] >= gruposx[k]) && (decenasxxc[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxc[i] < gruposx[k]) && (decenasxxc[i] + anchodde  > 
					gruposx[k]) && (decenasyyc[i] < gruposy[k] + altodi) && (decenasyyc[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxc[i] < gruposx[k]) && (decenasxxc[i] + anchodde  > 
					gruposx[k]) && (decenasyyc[i] < gruposy[k] ) && (decenasyyc[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxc[i] < gruposx[k] + anchodi) && (decenasxxc[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyc[i] < gruposy[k] ) && (decenasyyc[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxc[i] < gruposx[k] + anchodi) && (decenasxxc[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyyc[i] < gruposy[k] + altodi) && (decenasyyc[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena4 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxd[i] >= gruposx[k]) && (decenasxxd[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyd[i] >= gruposy[k]) && (decenasyyd[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxd[i] < gruposx[k]) && (decenasxxd[i] + anchodde  > 
					gruposx[k]) && (decenasyyd[i] >= gruposy[k]) && (decenasyyd[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxd[i] < gruposx[k] + anchodi) && (decenasxxd[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyd[i] >= gruposy[k]) && (decenasyyd[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyd[i] < gruposy[k]) && (decenasyyd[i] + altodde > gruposy[k]) 		&& (decenasxxd[i] >= gruposx[k]) && (decenasxxd[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyd[i] < gruposy[k] + altodi) && (decenasyyd[i] + altodde > 			gruposy[k] + altodi) && (decenasxxd[i] >= gruposx[k]) && (decenasxxd[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxd[i] < gruposx[k]) && (decenasxxd[i] + anchodde  > 
					gruposx[k]) && (decenasyyd[i] < gruposy[k] + altodi) && (decenasyyd[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxd[i] < gruposx[k]) && (decenasxxd[i] + anchodde  > 
					gruposx[k]) && (decenasyyd[i] < gruposy[k] ) && (decenasyyd[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxd[i] < gruposx[k] + anchodi) && (decenasxxd[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyd[i] < gruposy[k] ) && (decenasyyd[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxd[i] < gruposx[k] + anchodi) && (decenasxxd[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyyd[i] < gruposy[k] + altodi) && (decenasyyd[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena5 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxe[i] >= gruposx[k]) && (decenasxxe[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyye[i] >= gruposy[k]) && (decenasyye[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxe[i] < gruposx[k]) && (decenasxxe[i] + anchodde  > 
					gruposx[k]) && (decenasyye[i] >= gruposy[k]) && (decenasyye[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxe[i] < gruposx[k] + anchodi) && (decenasxxe[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyye[i] >= gruposy[k]) && (decenasyye[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyye[i] < gruposy[k]) && (decenasyye[i] + altodde > gruposy[k]) 		&& (decenasxxe[i] >= gruposx[k]) && (decenasxxe[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyye[i] < gruposy[k] + altodi) && (decenasyye[i] + altodde > 			gruposy[k] + altodi) && (decenasxxe[i] >= gruposx[k]) && (decenasxxe[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxe[i] < gruposx[k]) && (decenasxxe[i] + anchodde  > 
					gruposx[k]) && (decenasyye[i] < gruposy[k] + altodi) && (decenasyye[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxe[i] < gruposx[k]) && (decenasxxe[i] + anchodde  > 
					gruposx[k]) && (decenasyye[i] < gruposy[k] ) && (decenasyye[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxe[i] < gruposx[k] + anchodi) && (decenasxxe[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyye[i] < gruposy[k] ) && (decenasyye[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxe[i] < gruposx[k] + anchodi) && (decenasxxe[i] + anchodde  > 
			 gruposx[k] + anchodi) && (decenasyye[i] < gruposy[k] + altodi) && (decenasyye[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena6 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxf[i] >= gruposx[k]) && (decenasxxf[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyf[i] >= gruposy[k]) && (decenasyyf[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxf[i] < gruposx[k]) && (decenasxxf[i] + anchodde  > 
					gruposx[k]) && (decenasyyf[i] >= gruposy[k]) && (decenasyyf[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxf[i] < gruposx[k] + anchodi) && (decenasxxf[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyf[i] >= gruposy[k]) && (decenasyyf[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyf[i] < gruposy[k]) && (decenasyyf[i] + altodde > gruposy[k]) 		&& (decenasxxf[i] >= gruposx[k]) && (decenasxxf[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyf[i] < gruposy[k] + altodi) && (decenasyyf[i] + altodde > 			gruposy[k] + altodi) && (decenasxxf[i] >= gruposx[k]) && (decenasxxf[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxf[i] < gruposx[k]) && (decenasxxf[i] + anchodde  > 
					gruposx[k]) && (decenasyyf[i] < gruposy[k] + altodi) && (decenasyyf[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxf[i] < gruposx[k]) && (decenasxxf[i] + anchodde  > 
					gruposx[k]) && (decenasyyf[i] < gruposy[k] ) && (decenasyyf[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxf[i] < gruposx[k] + anchodi) && (decenasxxf[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyf[i] < gruposy[k] ) && (decenasyyf[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxf[i] < gruposx[k] + anchodi) && (decenasxxf[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyf[i] < gruposy[k] + altodi) && (decenasyyf[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena7 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxg[i] >= gruposx[k]) && (decenasxxg[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyg[i] >= gruposy[k]) && (decenasyyg[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxg[i] < gruposx[k]) && (decenasxxg[i] + anchodde  > 
					gruposx[k]) && (decenasyyg[i] >= gruposy[k]) && (decenasyyg[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxg[i] < gruposx[k] + anchodi) && (decenasxxg[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyg[i] >= gruposy[k]) && (decenasyyg[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyg[i] < gruposy[k]) && (decenasyyg[i] + altodde > gruposy[k]) 		&& (decenasxxg[i] >= gruposx[k]) && (decenasxxg[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyg[i] < gruposy[k] + altodi) && (decenasyyg[i] + altodde > 			gruposy[k] + altodi) && (decenasxxg[i] >= gruposx[k]) && (decenasxxg[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxg[i] < gruposx[k]) && (decenasxxg[i] + anchodde  > 
					gruposx[k]) && (decenasyyg[i] < gruposy[k] + altodi) && (decenasyyg[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxg[i] < gruposx[k]) && (decenasxxg[i] + anchodde  > 
					gruposx[k]) && (decenasyyg[i] < gruposy[k] ) && (decenasyyg[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxg[i] < gruposx[k] + anchodi) && (decenasxxg[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyg[i] < gruposy[k] ) && (decenasyyg[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxg[i] < gruposx[k] + anchodi) && (decenasxxg[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyg[i] < gruposy[k] + altodi) && (decenasyyg[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena8 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxh[i] >= gruposx[k]) && (decenasxxh[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyh[i] >= gruposy[k]) && (decenasyyh[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxh[i] < gruposx[k]) && (decenasxxh[i] + anchodde  > 
					gruposx[k]) && (decenasyyh[i] >= gruposy[k]) && (decenasyyh[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxh[i] < gruposx[k] + anchodi) && (decenasxxh[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyh[i] >= gruposy[k]) && (decenasyyh[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyh[i] < gruposy[k]) && (decenasyyh[i] + altodde > gruposy[k]) 		&& (decenasxxh[i] >= gruposx[k]) && (decenasxxh[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyh[i] < gruposy[k] + altodi) && (decenasyyh[i] + altodde > 			gruposy[k] + altodi) && (decenasxxh[i] >= gruposx[k]) && (decenasxxh[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxh[i] < gruposx[k]) && (decenasxxh[i] + anchodde  > 
					gruposx[k]) && (decenasyyh[i] < gruposy[k] + altodi) && (decenasyyh[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxh[i] < gruposx[k]) && (decenasxxh[i] + anchodde  > 
					gruposx[k]) && (decenasyyh[i] < gruposy[k] ) && (decenasyyh[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxh[i] < gruposx[k] + anchodi) && (decenasxxh[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyh[i] < gruposy[k] ) && (decenasyyh[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxh[i] < gruposx[k] + anchodi) && (decenasxxh[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyh[i] < gruposy[k] + altodi) && (decenasyyh[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesdecena9 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((decenasxxi[i] >= gruposx[k]) && (decenasxxi[i] + anchodde  <= gruposx[k] + anchodi) && (decenasyyi[i] >= gruposy[k]) && (decenasyyi[i] + altodde <=     gruposy[k] + altodi)) {
					
					cantidadgrupo[k] += 10;
					revisiondecdecena += 1;
			}else if ((decenasxxi[i] < gruposx[k]) && (decenasxxi[i] + anchodde  > 
					gruposx[k]) && (decenasyyi[i] >= gruposy[k]) && (decenasyyi[i] + altodde <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxi[i] < gruposx[k] + anchodi) && (decenasxxi[i] + anchodde  > 		gruposx[k] + anchodi) && (decenasyyi[i] >= gruposy[k]) && (decenasyyi[i] + 		  altodde <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;				
			}else if ((decenasyyi[i] < gruposy[k]) && (decenasyyi[i] + altodde > gruposy[k]) 		&& (decenasxxi[i] >= gruposx[k]) && (decenasxxi[i] + anchodde <= 			   gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasyyi[i] < gruposy[k] + altodi) && (decenasyyi[i] + altodde > 			gruposy[k] + altodi) && (decenasxxi[i] >= gruposx[k]) && (decenasxxi[i] + 		  anchodde  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((decenasxxi[i] < gruposx[k]) && (decenasxxi[i] + anchodde  > 
					gruposx[k]) && (decenasyyi[i] < gruposy[k] + altodi) && (decenasyyi[i] + altodde > gruposy[k] + altodi) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxi[i] < gruposx[k]) && (decenasxxi[i] + anchodde  > 
					gruposx[k]) && (decenasyyi[i] < gruposy[k] ) && (decenasyi[i] + altodde > gruposy[k]) ) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxi[i] < gruposx[k] + anchodi) && (decenasxxi[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyi[i] < gruposy[k] ) && (decenasyyi[i] + altodde > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((decenasxxi[i] < gruposx[k] + anchodi) && (decenasxxi[i] + anchodde  > 
			gruposx[k] + anchodi) && (decenasyyi[i] < gruposy[k] + altodi) && (decenasyyi[i] + altodde > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}		
	}
	
	if ( accesunidad1 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxa[i] >= gruposx[k]) && (unidasxxa[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyya[i] >= gruposy[k]) && (unidasyya[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;
					verificaunidades += 1;
			}else if ((unidasxxa[i] < gruposx[k]) && (unidasxxa[i] + anchomue  > 
					gruposx[k]) && (unidasyya[i] >= gruposy[k]) && (unidasyya[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxa[i] < gruposx[k] + anchodi) && (unidasxxa[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyya[i] >= gruposy[k]) && (unidasyya[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyya[i] < gruposy[k]) && (unidasyya[i] + altomue > gruposy[k]) && 		(unidasxxa[i] >= gruposx[k]) && (unidasxxa[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyya[i] < gruposy[k] + altodi) && (unidasyya[i] + altomue > 			gruposy[k] + altodi) && (unidasxxa[i] >= gruposx[k]) && (unidasxxa[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxa[i] < gruposx[k]) && (unidasxxa[i] + anchomue  > 
					gruposx[k]) && (unidasyya[i] < gruposy[k] + altodi) && (unidasyya[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxa[i] < gruposx[k]) && (unidasxxa[i] + anchomue  > 
					gruposx[k]) && (unidasyya[i] < gruposy[k] ) && (unidasyya[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxa[i] < gruposx[k] + anchodi) && (unidasxxa[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyya[i] < gruposy[k] ) && (unidasyya[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxa[i] < gruposx[k] + anchodi) && (unidasxxa[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyya[i] < gruposy[k] + altodi) && (unidasyya[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}	
	}
	}
	
	
	if ( accesunidad2 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxb[i] >= gruposx[k]) && (unidasxxb[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyb[i] >= gruposy[k]) && (unidasyyb[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxb[i] < gruposx[k]) && (unidasxxb[i] + anchomue  > 
					gruposx[k]) && (unidasyyb[i] >= gruposy[k]) && (unidasyyb[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxb[i] < gruposx[k] + anchodi) && (unidasxxb[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyb[i] >= gruposy[k]) && (unidasyyb[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyb[i] < gruposy[k]) && (unidasyyb[i] + altomue > gruposy[k]) && 		(unidasxxb[i] >= gruposx[k]) && (unidasxxb[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyb[i] < gruposy[k] + altodi) && (unidasyyb[i] + altomue > 			gruposy[k] + altodi) && (unidasxxb[i] >= gruposx[k]) && (unidasxxb[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxb[i] < gruposx[k]) && (unidasxxb[i] + anchomue  > 
					gruposx[k]) && (unidasyyb[i] < gruposy[k] + altodi) && (unidasyyb[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxb[i] < gruposx[k]) && (unidasxxb[i] + anchomue  > 
					gruposx[k]) && (unidasyyb[i] < gruposy[k] ) && (unidasyyb[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxb[i] < gruposx[k] + anchodi) && (unidasxxb[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyb[i] < gruposy[k] ) && (unidasyyb[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxb[i] < gruposx[k] + anchodi) && (unidasxxb[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyb[i] < gruposy[k] + altodi) && (unidasyyb[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad3 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxc[i] >= gruposx[k]) && (unidasxxc[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyc[i] >= gruposy[k]) && (unidasyyc[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;
					verificaunidades += 1;
			}else if ((unidasxxc[i] < gruposx[k]) && (unidasxxc[i] + anchomue  > 
					gruposx[k]) && (unidasyyc[i] >= gruposy[k]) && (unidasyyc[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxc[i] < gruposx[k] + anchodi) && (unidasxxc[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyc[i] >= gruposy[k]) && (unidasyyc[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyc[i] < gruposy[k]) && (unidasyyc[i] + altomue > gruposy[k]) && 		(unidasxxc[i] >= gruposx[k]) && (unidasxxc[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyc[i] < gruposy[k] + altodi) && (unidasyyc[i] + altomue > 			gruposy[k] + altodi) && (unidasxxc[i] >= gruposx[k]) && (unidasxxc[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxc[i] < gruposx[k]) && (unidasxxc[i] + anchomue  > 
					gruposx[k]) && (unidasyyc[i] < gruposy[k] + altodi) && (unidasyyc[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxc[i] < gruposx[k]) && (unidasxxc[i] + anchomue  > 
					gruposx[k]) && (unidasyyc[i] < gruposy[k] ) && (unidasyyc[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxc[i] < gruposx[k] + anchodi) && (unidasxxc[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyc[i] < gruposy[k] ) && (unidasyyc[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxc[i] < gruposx[k] + anchodi) && (unidasxxc[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyc[i] < gruposy[k] + altodi) && (unidasyyc[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad4 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxd[i] >= gruposx[k]) && (unidasxxd[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyd[i] >= gruposy[k]) && (unidasyyd[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;
					verificaunidades += 1;
			}else if ((unidasxxd[i] < gruposx[k]) && (unidasxxd[i] + anchomue  > 
					gruposx[k]) && (unidasyyd[i] >= gruposy[k]) && (unidasyyd[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxd[i] < gruposx[k] + anchodi) && (unidasxxd[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyd[i] >= gruposy[k]) && (unidasyyd[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyd[i] < gruposy[k]) && (unidasyyd[i] + altomue > gruposy[k]) && 		(unidasxxd[i] >= gruposx[k]) && (unidasxxd[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyd[i] < gruposy[k] + altodi) && (unidasyyd[i] + altomue > 			gruposy[k] + altodi) && (unidasxxd[i] >= gruposx[k]) && (unidasxxd[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxd[i] < gruposx[k]) && (unidasxxd[i] + anchomue  > 
					gruposx[k]) && (unidasyyd[i] < gruposy[k] + altodi) && (unidasyyd[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxd[i] < gruposx[k]) && (unidasxxd[i] + anchomue  > 
					gruposx[k]) && (unidasyyd[i] < gruposy[k] ) && (unidasyyd[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxd[i] < gruposx[k] + anchodi) && (unidasxxd[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyd[i] < gruposy[k] ) && (unidasyyd[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxd[i] < gruposx[k] + anchodi) && (unidasxxd[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyd[i] < gruposy[k] + altodi) && (unidasyyd[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad5 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxe[i] >= gruposx[k]) && (unidasxxe[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyye[i] >= gruposy[k]) && (unidasyye[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxe[i] < gruposx[k]) && (unidasxxe[i] + anchomue  > 
					gruposx[k]) && (unidasyye[i] >= gruposy[k]) && (unidasyye[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxe[i] < gruposx[k] + anchodi) && (unidasxxe[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyye[i] >= gruposy[k]) && (unidasyye[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyye[i] < gruposy[k]) && (unidasyye[i] + altomue > gruposy[k]) && 		(unidasxxe[i] >= gruposx[k]) && (unidasxxe[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyye[i] < gruposy[k] + altodi) && (unidasyye[i] + altomue > 			gruposy[k] + altodi) && (unidasxxe[i] >= gruposx[k]) && (unidasxxe[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxe[i] < gruposx[k]) && (unidasxxe[i] + anchomue  > 
					gruposx[k]) && (unidasyye[i] < gruposy[k] + altodi) && (unidasyye[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxe[i] < gruposx[k]) && (unidasxxe[i] + anchomue  > 
					gruposx[k]) && (unidasyye[i] < gruposy[k] ) && (unidasyye[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxe[i] < gruposx[k] + anchodi) && (unidasxxe[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyye[i] < gruposy[k] ) && (unidasyye[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxe[i] < gruposx[k] + anchodi) && (unidasxxe[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyye[i] < gruposy[k] + altodi) && (unidasyye[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	}
	
	
	if ( accesunidad6 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxf[i] >= gruposx[k]) && (unidasxxf[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyf[i] >= gruposy[k]) && (unidasyyf[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxf[i] < gruposx[k]) && (unidasxxf[i] + anchomue  > 
					gruposx[k]) && (unidasyyf[i] >= gruposy[k]) && (unidasyyf[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxf[i] < gruposx[k] + anchodi) && (unidasxxf[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyf[i] >= gruposy[k]) && (unidasyyf[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyf[i] < gruposy[k]) && (unidasyyf[i] + altomue > gruposy[k]) && 		(unidasxxf[i] >= gruposx[k]) && (unidasxxf[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyf[i] < gruposy[k] + altodi) && (unidasyyf[i] + altomue > 			gruposy[k] + altodi) && (unidasxxf[i] >= gruposx[k]) && (unidasxxf[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxf[i] < gruposx[k]) && (unidasxxf[i] + anchomue  > 
					gruposx[k]) && (unidasyyf[i] < gruposy[k] + altodi) && (unidasyyf[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxf[i] < gruposx[k]) && (unidasxxf[i] + anchomue  > 
					gruposx[k]) && (unidasyyf[i] < gruposy[k] ) && (unidasyyf[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxf[i] < gruposx[k] + anchodi) && (unidasxxf[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyf[i] < gruposy[k] ) && (unidasyyf[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxf[i] < gruposx[k] + anchodi) && (unidasxxf[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyf[i] < gruposy[k] + altodi) && (unidasyyf[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	}
	
	
	if ( accesunidad7 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxg[i] >= gruposx[k]) && (unidasxxg[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyg[i] >= gruposy[k]) && (unidasyyg[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;
					verificaunidades += 1;
			}else if ((unidasxxg[i] < gruposx[k]) && (unidasxxg[i] + anchomue  > 
					gruposx[k]) && (unidasyyg[i] >= gruposy[k]) && (unidasyyg[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxg[i] < gruposx[k] + anchodi) && (unidasxxg[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyg[i] >= gruposy[k]) && (unidasyyg[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyg[i] < gruposy[k]) && (unidasyyg[i] + altomue > gruposy[k]) && 		(unidasxxg[i] >= gruposx[k]) && (unidasxxg[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyg[i] < gruposy[k] + altodi) && (unidasyyg[i] + altomue > 			gruposy[k] + altodi) && (unidasxxg[i] >= gruposx[k]) && (unidasxxg[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxg[i] < gruposx[k]) && (unidasxxg[i] + anchomue  > 
					gruposx[k]) && (unidasyyg[i] < gruposy[k] + altodi) && (unidasyyg[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxg[i] < gruposx[k]) && (unidasxxg[i] + anchomue  > 
					gruposx[k]) && (unidasyyg[i] < gruposy[k] ) && (unidasyyg[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxg[i] < gruposx[k] + anchodi) && (unidasxxg[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyg[i] < gruposy[k] ) && (unidasyyg[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxg[i] < gruposx[k] + anchodi) && (unidasxxg[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyg[i] < gruposy[k] + altodi) && (unidasyyg[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad8 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxh[i] >= gruposx[k]) && (unidasxxh[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyh[i] >= gruposy[k]) && (unidasyyh[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxh[i] < gruposx[k]) && (unidasxxh[i] + anchomue  > 
					gruposx[k]) && (unidasyyh[i] >= gruposy[k]) && (unidasyyh[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxh[i] < gruposx[k] + anchodi) && (unidasxxh[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyh[i] >= gruposy[k]) && (unidasyyh[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyh[i] < gruposy[k]) && (unidasyyh[i] + altomue > gruposy[k]) && 		(unidasxxh[i] >= gruposx[k]) && (unidasxxh[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyh[i] < gruposy[k] + altodi) && (unidasyyh[i] + altomue > 			gruposy[k] + altodi) && (unidasxxh[i] >= gruposx[k]) && (unidasxxh[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxh[i] < gruposx[k]) && (unidasxxh[i] + anchomue  > 
					gruposx[k]) && (unidasyyh[i] < gruposy[k] + altodi) && (unidasyyh[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxh[i] < gruposx[k]) && (unidasxxh[i] + anchomue  > 
					gruposx[k]) && (unidasyyh[i] < gruposy[k] ) && (unidasyyh[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxh[i] < gruposx[k] + anchodi) && (unidasxxh[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyh[i] < gruposy[k] ) && (unidasyyh[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxh[i] < gruposx[k] + anchodi) && (unidasxxh[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyh[i] < gruposy[k] + altodi) && (unidasyyh[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	}
	
	
	if ( accesunidad9 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxi[i] >= gruposx[k]) && (unidasxxi[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyi[i] >= gruposy[k]) && (unidasyyi[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;
					verificaunidades += 1;
			}else if ((unidasxxi[i] < gruposx[k]) && (unidasxxi[i] + anchomue  > 
					gruposx[k]) && (unidasyyi[i] >= gruposy[k]) && (unidasyyi[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxi[i] < gruposx[k] + anchodi) && (unidasxxi[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyi[i] >= gruposy[k]) && (unidasyyi[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyi[i] < gruposy[k]) && (unidasyyi[i] + altomue > gruposy[k]) && 		(unidasxxi[i] >= gruposx[k]) && (unidasxxi[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyi[i] < gruposy[k] + altodi) && (unidasyyi[i] + altomue > 			gruposy[k] + altodi) && (unidasxxi[i] >= gruposx[k]) && (unidasxxi[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxi[i] < gruposx[k]) && (unidasxxi[i] + anchomue  > 
					gruposx[k]) && (unidasyyi[i] < gruposy[k] + altodi) && (unidasyyi[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxi[i] < gruposx[k]) && (unidasxxi[i] + anchomue  > 
					gruposx[k]) && (unidasyyi[i] < gruposy[k] ) && (unidasyyi[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxi[i] < gruposx[k] + anchodi) && (unidasxxi[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyi[i] < gruposy[k] ) && (unidasyyi[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxi[i] < gruposx[k] + anchodi) && (unidasxxi[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyi[i] < gruposy[k] + altodi) && (unidasyyi[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad10 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxj[i] >= gruposx[k]) && (unidasxxj[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyj[i] >= gruposy[k]) && (unidasyyj[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxj[i] < gruposx[k]) && (unidasxxj[i] + anchomue  > 
					gruposx[k]) && (unidasyyj[i] >= gruposy[k]) && (unidasyyj[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxj[i] < gruposx[k] + anchodi) && (unidasxxj[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyj[i] >= gruposy[k]) && (unidasyyj[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyj[i] < gruposy[k]) && (unidasyyj[i] + altomue > gruposy[k]) && 		(unidasxxj[i] >= gruposx[k]) && (unidasxxj[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyj[i] < gruposy[k] + altodi) && (unidasyyj[i] + altomue > 			 gruposy[k] + altodi) && (unidasxxj[i] >= gruposx[k]) && (unidasxxj[i] + 		  anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxj[i] < gruposx[k]) && (unidasxxj[i] + anchomue  > 
					gruposx[k]) && (unidasyyj[i] < gruposy[k] + altodi) && (unidasyyj[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxj[i] < gruposx[k]) && (unidasxxj[i] + anchomue  > 
					gruposx[k]) && (unidasyyj[i] < gruposy[k] ) && (unidasyyj[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxj[i] < gruposx[k] + anchodi) && (unidasxxj[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyj[i] < gruposy[k] ) && (unidasyyj[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxj[i] < gruposx[k] + anchodi) && (unidasxxj[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyj[i] < gruposy[k] + altodi) && (unidasyyj[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad11 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxk[i] >= gruposx[k]) && (unidasxxk[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyk[i] >= gruposy[k]) && (unidasyyk[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxk[i] < gruposx[k]) && (unidasxxk[i] + anchomue  > 
					gruposx[k]) && (unidasyyk[i] >= gruposy[k]) && (unidasyyk[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxk[i] < gruposx[k] + anchodi) && (unidasxxk[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyk[i] >= gruposy[k]) && (unidasyyk[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyk[i] < gruposy[k]) && (unidasyyk[i] + altomue > gruposy[k]) && 		(unidasxxk[i] >= gruposx[k]) && (unidasxxk[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyk[i] < gruposy[k] + altodi) && (unidasyyk[i] + altomue > 			gruposy[k] + altodi) && (unidasxxk[i] >= gruposx[k]) && (unidasxxk[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxk[i] < gruposx[k]) && (unidasxxk[i] + anchomue  > 
					gruposx[k]) && (unidasyyk[i] < gruposy[k] + altodi) && (unidasyyk[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxk[i] < gruposx[k]) && (unidasxxk[i] + anchomue  > 
					gruposx[k]) && (unidasyyk[i] < gruposy[k] ) && (unidasyyk[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxk[i] < gruposx[k] + anchodi) && (unidasxxk[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyk[i] < gruposy[k] ) && (unidasyyk[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxk[i] < gruposx[k] + anchodi) && (unidasxxk[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyk[i] < gruposy[k] + altodi) && (unidasyyk[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad12 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxl[i] >= gruposx[k]) && (unidasxxl[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyl[i] >= gruposy[k]) && (unidasyyl[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxl[i] < gruposx[k]) && (unidasxxl[i] + anchomue  > 
					gruposx[k]) && (unidasyyl[i] >= gruposy[k]) && (unidasyyl[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxl[i] < gruposx[k] + anchodi) && (unidasxxl[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyl[i] >= gruposy[k]) && (unidasyyl[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyl[i] < gruposy[k]) && (unidasyyl[i] + altomue > gruposy[k]) && 		(unidasxxl[i] >= gruposx[k]) && (unidasxxl[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;

			}else if ((unidasyyl[i] < gruposy[k] + altodi) && (unidasyyl[i] + altomue > 			gruposy[k] + altodi) && (unidasxxl[i] >= gruposx[k]) && (unidasxxl[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxl[i] < gruposx[k]) && (unidasxxl[i] + anchomue  > 
					gruposx[k]) && (unidasyyl[i] < gruposy[k] + altodi) && (unidasyyl[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxl[i] < gruposx[k]) && (unidasxxl[i] + anchomue  > 
					gruposx[k]) && (unidasyyl[i] < gruposy[k] ) && (unidasyyl[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxl[i] < gruposx[k] + anchodi) && (unidasxxl[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyl[i] < gruposy[k] ) && (unidasyyl[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxl[i] < gruposx[k] + anchodi) && (unidasxxl[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyl[i] < gruposy[k] + altodi) && (unidasyyl[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	}
	
	
	if ( accesunidad13 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxm[i] >= gruposx[k]) && (unidasxxm[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyym[i] >= gruposy[k]) && (unidasyym[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxm[i] < gruposx[k]) && (unidasxxm[i] + anchomue  > 
					gruposx[k]) && (unidasyym[i] >= gruposy[k]) && (unidasyym[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxm[i] < gruposx[k] + anchodi) && (unidasxxm[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyym[i] >= gruposy[k]) && (unidasyym[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyym[i] < gruposy[k]) && (unidasyym[i] + altomue > gruposy[k]) && 		(unidasxxm[i] >= gruposx[k]) && (unidasxxm[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyym[i] < gruposy[k] + altodi) && (unidasyym[i] + altomue > 			gruposy[k] + altodi) && (unidasxxm[i] >= gruposx[k]) && (unidasxxm[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxm[i] < gruposx[k]) && (unidasxxm[i] + anchomue  > 
					gruposx[k]) && (unidasyym[i] < gruposy[k] + altodi) && (unidasyym[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxm[i] < gruposx[k]) && (unidasxxm[i] + anchomue  > 
					gruposx[k]) && (unidasyym[i] < gruposy[k] ) && (unidasyym[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxm[i] < gruposx[k] + anchodi) && (unidasxxm[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyym[i] < gruposy[k] ) && (unidasyym[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxm[i] < gruposx[k] + anchodi) && (unidasxxm[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyym[i] < gruposy[k] + altodi) && (unidasyym[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}	
	}
	
	
	if ( accesunidad14 == 1){
		for (var i = 0; i < 10; i++) {
			for (var k = 0; k < divisor; k++) {
				if ((unidasxxn[i] >= gruposx[k]) && (unidasxxn[i] + anchomue  <= gruposx[k] + 	anchodi) && (unidasyyn[i] >= gruposy[k]) && (unidasyyn[i] + altomue <= 		gruposy[k] + altodi)) {	
					
					cantidadgrupo[k] += 1;	
					verificaunidades += 1;
			}else if ((unidasxxn[i] < gruposx[k]) && (unidasxxn[i] + anchomue  > 
					gruposx[k]) && (unidasyyn[i] >= gruposy[k]) && (unidasyyn[i] + altomue <= gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 4000;
					  
			}else if ((unidasxxn[i] < gruposx[k] + anchodi) && (unidasxxn[i] + anchomue  > 			gruposx[k] + anchodi) && (unidasyyn[i] >= gruposy[k]) && (unidasyyn[i] + 		 altomue <= gruposy[k] + altodi)){
					  
				 cantidadgrupo[k] += 4000;
				
			}else if ((unidasyyn[i] < gruposy[k]) && (unidasyyn[i] + altomue > gruposy[k]) && 		(unidasxxn[i] >= gruposx[k]) && (unidasxxn[i] + anchomue  <= 
				  gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;
					  
			}else if ((unidasyyn[i] < gruposy[k] + altodi) && (unidasyyn[i] + altomue > 			gruposy[k] + altodi) && (unidasxxn[i] >= gruposx[k]) && (unidasxxn[i] + 		anchomue  <= gruposx[k] + anchodi)){
				
				  cantidadgrupo[k] += 4000;					  
			}else if ((unidasxxn[i] < gruposx[k]) && (unidasxxn[i] + anchomue  > 
					gruposx[k]) && (unidasyyn[i] < gruposy[k] + altodi) && (unidasyyn[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxn[i] < gruposx[k]) && (unidasxxn[i] + anchomue  > 
					gruposx[k]) && (unidasyyn[i] < gruposy[k] ) && (unidasyyn[i] + altomue > gruposy[k])) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxn[i] < gruposx[k] + anchodi) && (unidasxxn[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyn[i] < gruposy[k] ) && (unidasyyn[i] + altomue > gruposy[k] )) {
				
				cantidadgrupo[k] += 5000;					  
			}else if ((unidasxxn[i] < gruposx[k] + anchodi) && (unidasxxn[i] + anchomue  > 
					gruposx[k] + anchodi) && (unidasyyn[i] < gruposy[k] + altodi) && (unidasyyn[i] + altomue > gruposy[k] + altodi)) {
				
				cantidadgrupo[k] += 5000;					  
			}
		}
	}
	}
	
	
	if (verificaunidades == ((detectorcero*10) + unidad111) && detectorcero != 0) {		
		controluniparty = 1;
	}else if(verificaunidades == ((detectorcero*10) + unidad111) && detectorcero == 0
			 && (calculo2 == 10 || calculo4 == 10 )){
		controluniparty = 1;
	} else {
		controluniparty = 0;
	}
	
	
	
	if (dividendo >= 15 && dividendo <= 99) {
		divin1 =  dividendo % 10;
		divin2 = dividendo - divin1;
		decena1 = divin2 / 10;
		unidad1 = divin1;
	if (decena1 > divisor) {
		divin3 = decena1 % divisor;
		divin4 = decena1 - divin3;
		coc1 = divin4 / divisor;
		divin5 = divin3 * 10 + unidad1;
		if (componentes[0].value ==  (coc1*divisor) ) {
			numeral01 += 1;					
		}
		if (componentes[2].value == divin5 ) {
			numeral01 += 1;
		}				
		if (divin5 > divisor) {
			divin6 = divin5 % divisor;
			divin7 = divin5 - divin6;
			coc2 = divin7 / divisor;
			coc3 = coc1 * 10 + coc2;
			prueba1 = coc3 * divisor + divin6;
			
			if (componentes[3].value == (coc2*divisor) ) {
				numeral01 += 1;
			}
			if (componentes[4].value == divin6 ) {
			numeral01 += 1;
			}
			if (componentes[1].value == coc3  && numeral01 == 4) {
			numeral01 += 1;
			}
		}
	} else if (decena1 == divisor) {
		divin3 = decena1 % divisor;
		divin4 = decena1 - divin3;
		coc1 = divin4 / divisor;
		divin5 = divin3 * 10 + unidad1;
		if (componentes[0].value == (coc1*divisor) ) {
			numeral02 += 1;
			numeral03 += 1;
		}
		if (componentes[2].value == divin5  ) {
			numeral02 += 1;
			numeral03 += 1;
		}		
		if (divin5 >= divisor) {
			divin6 = divin5 % divisor;
			divin7 = divin5 - divin6;
			coc2 = divin7 / divisor;
			coc3 = coc1 * 10 + coc2;
			prueba1 = coc3 * divisor + divin6;
			
			
			if (componentes[3].value == (coc2*divisor)) {
				numeral02 += 1;
			}
			if (componentes[4].value == divin6 ) {
				numeral02 += 1;
			}
			if (componentes[1].value == coc3 && numeral02 == 4) {
				numeral02 += 1;			
			}			
		} else {
			coc2 = 0;
			coc3 = coc1 * 10 + coc2;
			prueba1 = coc3 * divisor + divin5;
			
			if (componentes[1].value == coc3 && numeral03 == 2) {
				numeral03 += 1;			
			}}			
	}else {		
		divin3 = dividendo % divisor;
		divin4 = dividendo - divin3;
		coc1 = divin4 / divisor;
		prueba1 =  coc1 * divisor + divin3;
		
		if (componentes[0].value == (coc1*divisor)) {
			numeral04 += 1;			
		}
		if (componentes[2].value == divin3 ) {
			numeral04 += 1;			
		}
		if (componentes[1].value == coc1 && numeral04 == 2) {
			numeral04 += 1;				
			
		}
		
	}
		
	}//FIN 15-99	
	
	if (numeral01 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral02 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor) {
					menxa = "CORRECTO, "+dividendo+"  DIVIDIDO  "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y  SOBRA"+componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	
		
	}
	
	if (numeral03 == 3) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	
		
	}
	
	if (numeral04 == 3) {		
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {				
				verytotal += 1;	
				document.getElementById("wilmar3").innerHTML = ""+verytotal+"";
				if (verytotal == divisor) {					
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
					
				}
			}			
		}	
		
	}
	
		
	if (dividendo >= 200 && dividendo <= 999) {
		divin1 =  dividendo % 100;
		divin2 = dividendo - divin1;
		centena1 = divin2 / 100;
		divin3 = divin1 % 10;
		if (divin3 == 0 && divin1 <= 10){
				if (divin1 == 10){
					decena1 = 1;
					unidad1 = 0;					
				}else{
					decena1 = 0;
					unidad1 = divin1;
				}				
		}else {		
			divin4 = divin1 - divin3;
			decena1 = divin4 / 10;
			unidad1 = divin3;
		}
	
	
	if (centena1 > divisor) {
		divin5 = centena1 % divisor;
		divin6 = centena1 - divin5;
		coc1 = divin6 / divisor;
		divin7 = divin5 * 10 + decena1;
		divin8 = divin7 % divisor;
		divin9 = divin7 - divin8;
		coc2 = divin9 / divisor;
		divin10 = divin8 * 10 + unidad1;
		if (componentes[0].value == (coc1 * divisor)) {
			numeral1 += 1;
			numeral2 += 1;
		}
		if (componentes[2].value == divin7 ) {
			numeral1 += 1;
			numeral2 += 1;
		}
		if (componentes[3].value == (coc2 * divisor)) {//NUEVO
			numeral1 += 1;
			numeral2 += 1;
		}		
		if (divin10 >= divisor) {//TRATAMIENTO DE UNIDADES
			divin11 = divin10 % divisor;
			divin12 = divin10 - divin11;
			coc3 = divin12 / divisor;
			coc4 = coc1 * 100 + coc2 * 10 + coc3;
			if (componentes[4].value == divin10) {
			numeral1 += 1;
			}
			if (componentes[5].value == (coc3 * divisor)) {//NUEVO
			numeral1 += 1;
			}
			if (componentes[6].value == divin11 ) {
			numeral1 += 1;
			}
			if (componentes[1].value == coc4 && numeral1 == 6 ) {
			numeral1 += 1;
			}			
		} else {
			coc3 = 0;
			coc4 = coc1 * 100 + coc2 * 10 + coc3;
			if (componentes[4].value == divin10 ) {
			numeral2 += 1;
			}
			if (componentes[1].value == coc4 && numeral2 == 4 ) {
			numeral2 += 1;
			}			
		}
	} else if (centena1 == divisor) {
		divin5 = centena1 % divisor;
		divin6 = centena1 - divin5;
		coc1 = divin6 / divisor;
		divin7 = divin5 * 10 + decena1;
		if (componentes[0].value == (coc1 * divisor)) {
			
			numeral3 += 1;
			numeral4 += 1;
			numeral5 += 1;
			numeral6 += 1;
		}
		if (componentes[2].value== divin7 ) {
			
			numeral3 += 1;
			numeral4 += 1;
			
		}		
		if (divin7 >= divisor) {
			divin8 = divin7 % divisor;
			divin9 = divin7 - divin8;
			coc2 = divin9 / divisor;
			divin10 = divin8 * 10 + unidad1;
			if (componentes[3].value == (coc2 * divisor) ) {
				
				numeral3 += 1;
				numeral4 += 1;
			}
			if (componentes[4].value == divin10) {
				
				numeral3 += 1;
				numeral4 += 1;
			}			
			if (divin10 >= divisor) {
				divin11 = divin10 % divisor;
				divin12 = divin10 - divin11;
				coc3 = divin12 / divisor;
				coc4 = coc1 * 100 + coc2 * 10 + coc3;
				if (componentes[5].value == (coc3 * divisor)) {//NUEVO					
					numeral3 += 1;
				}
				if (componentes[6].value == divin11 ) {
					
					numeral3 += 1;
				}
				if (componentes[1].value == coc4 && numeral3 == 6 ) {
					numeral3 += 1;
				}				
			} else {
				coc3 = 0;
				coc4 = coc1 * 100 + coc2 * 10 + coc3;
				if (componentes[1].value == coc4 && numeral4 == 4 ) {
					numeral4 += 1;
				}
			}
		} else {
			coc2 = 0;
			divin8 = divin7 * 10 + unidad1;
			if (componentes[2].value == divin8 ) {
				numeral5 += 1;
				numeral6 += 1;
			}
			if (divin8 >= divisor) {
				divin9 = divin8 % divisor;
				divin10 = divin8 - divin9;
				coc3 = divin10 / divisor;
				coc4 = coc1 * 100 + coc2 * 10 + coc3;
				if (componentes[3].value == (coc3 * divisor) ) {//NUEVO
					numeral5 += 1;
				}
				if (componentes[4].value == divin9 ) {
					numeral5 += 1;
				}
				if (componentes[1].value == coc4 && numeral5 == 4) {
					numeral5 += 1;
				}				
			} else {
				coc3 = 0;
				coc4 = coc1 * 100 + coc2 * 10 + coc3;
							
				if (componentes[1].value == coc4 && numeral6 == 2) {
					numeral6 += 1;
				}				
			}
		}
	} else {//CENTENAS MENOR QUE EL DIVISOR 
		decena2 = centena1 * 10 + decena1;
		
		if (decena2 > divisor ) {
			divin5 = decena2 % divisor;
			divin6 = decena2 - divin5;
			coc1 = divin6 / divisor;
			divin7 = divin5 * 10 + unidad1;
			
			if (componentes[0].value == (coc1 * divisor)) {
				
				numeral7 += 1;
				numeral8 += 1;
			}
			if (componentes[2].value ==  divin7 ) {
								
				numeral7 += 1;
				numeral8 += 1;
			}
			
			if (divin7 >= divisor) {			
				divin8 = divin7 % divisor;
				divin9 = divin7 - divin8;
				coc2 = divin9 / divisor;
				coc3 = coc1 * 10 + coc2;
				if (componentes[3].value ==  (coc2 * divisor)) {//NUEVO
					
					numeral7 += 1;
				}
				if (componentes[4].value ==  divin8 ) {
					numeral7 += 1;
				}
				if (componentes[1].value ==  coc3 && numeral7 == 4) {
					numeral7 += 1;
				}		
				
			} else {
				coc2 = 0;
				coc3 = coc1 * 10 + coc2;
				if (componentes[1].value ==  coc3 && numeral8 == 2) {
					numeral8 += 1;
				}				
			}
		} else if (decena2 == divisor) {
			divin5 = decena2 % divisor;
			divin6 = decena2 - divin5;
			coc1 = divin6 / divisor;
			divin7 = divin5 * 10 + unidad1;
			if (componentes[0].value == (coc1 * divisor) ) {
				numeral9 += 1;
				numeral10 += 1;
			}
			if (componentes[2].value == divin7 ) {
				numeral9 += 1;
				numeral10 += 1;
			}			
			if (divin7 >= divisor) {			
				divin8 = divin7 % divisor;
				divin9 = divin7 - divin8;
				coc2 = divin9 / divisor;
				coc3 = coc1 * 10 + coc2;
				if (componentes[3].value ==  (coc2 * divisor) ) {//NUEVO
					numeral9 += 1;
				}
				if (componentes[4].value ==  divin8 ) {
					numeral9 += 1;
				}
				if (componentes[1].value ==  coc3 && numeral9 == 4) {
					numeral9 += 1;
				}				
			} else {
				coc2 = 0;
				coc3 = coc1 * 10 + coc2;
				if (componentes[1].value ==  coc3 && numeral10 == 2) {
					numeral10 += 1;
				}
			}
		} else {
			divin5 = dividendo % divisor;
			divin6 = dividendo - divin5;
			coc1 = divin6 / divisor;
			divin7 = divin5;
			if (componentes[0].value == (coc1 * divisor) ) {
				numeral11 += 1;
				numeral12 += 1;
			}
			if (componentes[2].value == divin7 ) {
				numeral11 += 1;
				numeral12 += 1;
			}			
			if (divin7 >= divisor) {			
				divin8 = divin7 % divisor;
				divin9 = divin7 - divin8;
				coc2 = divin9 / divisor;
				coc3 = coc1 * 10 + coc2;
				if (componentes[3].value ==  (coc2 * divisor) ) {//NUEVO
					numeral11 += 1;
				}
				if (componentes[4].value ==  divin8 ) {
					numeral11 += 1;
				}
				if (componentes[1].value ==  coc3 && numeral11 == 4) {
					numeral11 += 1;
				}
				
			} else {
				coc2 = 0;
				coc3 = coc1  + coc2;
				if (componentes[1].value ==  coc3 && numeral12 == 2) {
					numeral12 += 1;
				}
			}
		}
	}	
		
	}//FIN 200 - 999
	
	
	
	if (numeral1 == 7) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[6].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral2 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral3 == 7) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[6].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral4 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral5 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral6 == 3) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral7 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral8 == 3) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral9 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral10 == 3) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral11 == 5) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[4].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	if (numeral12 == 3) {
		for (var i = 0; i < divisor; i++) {
			if (componentes[1].value == cantidadgrupo[i]) {
				verytotal += 1;
				if (verytotal == divisor ) {
					menxa = "CORRECTO, "+dividendo+" DIVIDIDO "+divisor;
					menxb = "ES IGUAL A "+componentes[1].value+ " Y SOBRA "+ componentes[2].value;
					mueveMensajee();
					if (conpuntos == 0) {
						conpuntos = 1;
						puntos += 1;						
					}
				}
			}			
		}	 
		
	}
	
	
	if (verytotal == divisor){
		document.getElementById('demo').play();		
	}
	
	imprimePuntos();
	
	
	
					
				
}//FUNCIÓN PRINCIPAL

//setInterval(escenaRiowill, 40);
var mensajexito =  {
	menreSulta: function(mensax, mensay, menxa, menxb){
		ctxx.fillStyle = 'rgba(255, 221, 0, 1)';
  		ctxx.fillRect(mensax, mensay, anchomen, altomen);				
		ctxx.strokeStyle = 'black';
		ctxx.strokeRect(mensax, mensay, anchomen, altomen);
		ctxx.fillStyle = 'rgba(0, 0, 0, 1)';
		ctxx.font = '20px serif';
		ctxx.fillText(menxa, mensax+10, mensay+22);
		ctxx.fillText(menxb, mensax+10, mensay+40);
		//ctxx.fillText(menxc, mensax+10, mensay+56);
	}
}

function mueveMensajee(){	
	mensajexito.menreSulta(mensax, mensay, menxa, menxb);
	mensay += 3;	
	if (mensay >= 500){
		mensay = 10;
	}
}

var objetopuntaje =  {
	textoPuntaje: function(puntos){
		ctxx.fillStyle = 'rgba(255, 221, 0, 1)';
  		ctxx.fillRect(puntax, puntay, anchopunt, altopunt);				
		ctxx.strokeStyle = 'black';
		ctxx.strokeRect(puntax, puntay, anchopunt, altopunt);
		ctxx.fillStyle = 'rgba(0, 0, 0, 1)';
		ctxx.font = '20px serif';
		ctxx.fillText("PUNTAJE = "+puntos, puntax+10, puntay+22);		
	}
}

function imprimePuntos(){
	objetopuntaje.textoPuntaje(puntos);
	if (verytotal != divisor && conpuntos == 1){		
		puntos -= 1;
		conpuntos = 0;
	}
}





