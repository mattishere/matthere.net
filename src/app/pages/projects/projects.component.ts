import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GithubAPIService } from 'src/app/github-api.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	data$: any;
	data: any;
	repos: any = [];
	noProjects: boolean = false

	constructor(private ghService: GithubAPIService, private titleService: Title) {
		titleService.setTitle("MattHere :: Projects")
	}

	ngOnInit(): void {
		this.data$ = this.ghService.getData()
		this.data$.subscribe((res: any) => {
			this.data = res;

			if (this.data === undefined) {
				this.noProjects = true;
			} else {
				for (var i = 0; i < this.data.length; i++) {
					this.repos.push(this.data[i]);
				}
				let sorted = this.repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
				this.repos = sorted.splice(0, 4);
			}
		});
	}
}
