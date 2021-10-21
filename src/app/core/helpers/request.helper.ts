import * as QueryString from "query-string";

export class RequestHelper {
	public static Format(data: any): string {
		for (var key in data) {
			if (typeof (data[key]) === 'object') {
				data[key] = JSON.stringify(data[key]);
			}
		}
		var param = QueryString.stringify(data);
		return param;
	}
}
