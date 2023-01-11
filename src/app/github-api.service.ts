import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GithubAPIService {

	constructor(private http: HttpClient) { }

	getData() {
		const url = "https://api.github.com/users/mattishere/repos"

		return this.http.get(
			url
		)
	}
}
