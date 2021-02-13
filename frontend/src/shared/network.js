export const baseUrl = process.env.APP_ENV == 'development' ?
	`http://localhost:${process.env.PORT}`: '';

export const fetchConfig = (props, stateFnName, {
		method = 'GET', params = {},
		formatData = data=>data, minStored = 0
	}={})=>{
	return {
	    setState: props[stateFnName],
	    setError: props.setError,
	    fetching: props.startFetching,
	    formatData: formatData,
	    method: method,
	    params: params,
	    minStored: minStored,
	};
}

export const fetchData = (url, config)=>{
	url = setUpURL(url, config);
	const cacheData = localStorage.getItem(url);
	if(cacheData){
		let data = JSON.parse(cacheData);
		if(timeDiffMinutes(data.date) > config.minStored){
			localStorage.removeItem(url);
			getData(url, config);
		}
		else{
			config.setState(config.formatData(data.data));
		}
	}
	else{
		config.fetching();
		let error = false;
		fetch(url, fetchInterface(config))
		.then(res=>{
			if(res.status != 200){
				if(res.status == 404){
					error = true;
					return res.json();
				}
				throw Error(res.statusText);
			}
			return res.json();
		})
		.then(data=>{
			if(!error){
				localStorage.setItem(url, JSON.stringify({
					date: Date.now(),
					data: data,
				}));
				config.setState(config.formatData(data));
			}
			else{
				config.setError(data.msg);
			}
		})
		.catch(error=>{
			config.setError(error.toString());
	    });
	}
}

const setUpURL = (url, config)=>{
	if(config.method == 'GET' &&
		Object.keys(config.params).length > 0){
		url +=`?${paramsToQueryString(config.params)}`;
	}
	return url;
}

const fetchInterface = (config)=>{
	let data = {
    	method: config.method,
	    mode: 'cors',
	    cache: 'no-cache',
	    credentials: 'same-origin',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    referrerPolicy: 'no-referrer'
	};
	if(config.method != 'GET'){
		data['body'] = JSON.stringify(config.params);
	}
	return data;
}

export const paramsToQueryString = (params) =>{
	return Object.keys(params)
		.map(key =>
			`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
		)
		.join('&');
}

export const timeDiffMinutes = (date)=>{
	let diffMs = (new Date() - date);
	return Math.round(((diffMs % 86400000) % 3600000) / 60000);
}
