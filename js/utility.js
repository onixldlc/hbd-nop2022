function parseURLParams(url) {
	var queryStart = url.indexOf("?") + 1,
		queryEnd	 = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		pairs = query.replace(/\+/g, " ").split("&"),
		parms = {}, i, n, v, nv;

	if (query === url || query === "") return;

	for (i = 0; i < pairs.length; i++) {
		// nv = pairs[i].split("=", 2);
		index = pairs[i].indexOf("=")
		nv = [pairs[i].substring(0, index), pairs[i].substring(index+1)]
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);

		if (!parms.hasOwnProperty(n)){
			parms[n]=v;
		}
	}
	return parms;
}
