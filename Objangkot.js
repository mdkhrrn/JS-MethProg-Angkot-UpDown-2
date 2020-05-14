// membuat Object Angkot - Constructor
function Angkot (sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	// Penumpang naik
	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}


	// Penumpang Turun
	this.penumpangTurun = function(namaPenumpang, bayar){

		// Jika Angkot kosong
		if ( this.penumpang.length === 0 ){
			alert('Angkot masih kosong !');
			return false;
		}

		// Jika tidak kosong
		for ( var i = 0 ; i < this.penumpang.length ; i++ ){
			// Ada nama penumpang tertentu didalam
			if ( this.penumpang[i] === namaPenumpang ){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}

	}


}

// Sopir Angkot
var angkot1 = new Angkot('Sandhika', ['JKT', 'BDG'], [], 0);
var angkot2 = new Angkot('Galih', ['BDG', 'JKT'], [], 0);

