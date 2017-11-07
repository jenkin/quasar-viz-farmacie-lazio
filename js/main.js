$(function() {
	d3.json(
		"http://dati.lazio.it/catalog/api/action/datastore_search?resource_id=e0497f9d-ddec-4983-b8d1-9701266d0631&limit=100",
		function(err,data) {
			console.log(data);
			var cards = d3.select("#viz")
				.selectAll("div")
				.data(data.result.records)
				.enter()
				.append("div")
				.attr("class","col-3 single-pharmacy")
				.append("div")
				.attr("class","card")
				.append("div")
				.attr("class","card-body");

			cards.append("h4")
				.attr("class","card-title")
				.text(function(d) { return d["DESCRIZIONEFARMACIA"]; });

			cards.append("p")
				.attr("class","card-text")
				.text(function(d) { return d["INDIRIZZO"] + " " + d["DESCRIZIONECOMUNE"]; });
		}
	);
});