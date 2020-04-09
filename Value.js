function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if(res instanceof Error) {
        document.getElementById("alerte").style.display = "block";
			setTimeout(function(){document.getElementById("alerte").style.display = "none";},2500);
      } else {
			var ladate = res.match("Cree le: (.*); Nom:");
			var lenom = res.match("; Nom:(.*); Prenom:");
			var leprenom = res.match("Prenom:(.*); Naissance:");
			var leborn = res.match("Naissance:(.*); Adresse:");
			var adresse = res.match("Adresse:(.*); Sortie:");
			var sortie = res.match("Sortie:(.*); Motifs:");
			var raison = res. match("Motifs:(.*)");
			
			document.getElementById("creation").innerHTML = ladate[1];
			document.getElementById("homfem").innerHTML = leprenom[1] + lenom[1];
			document.getElementById("naissance").innerHTML = leborn[1];
			document.getElementById("demeure").innerHTML = adresse[1];
			document.getElementById("quand").innerHTML = sortie[1];
			document.getElementById("raison").innerHTML = raison[1];

			document.getElementById("raison").style.color = "#000000";
			document.getElementById("quand").style.color = "#000000";
			document.getElementById("demeure").style.color = "#000000";
			document.getElementById("naissance").style.color = "#000000";
			document.getElementById("homfem").style.color = "#000000";
			document.getElementById("creation").style.color = "#000000";
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}


function test() {
	alert("hello");
}
