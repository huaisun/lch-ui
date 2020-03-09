import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomainService } from './domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {


  private url: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router, private service: DomainService) {
    this.url = route.url.pipe(map(segments => segments.join('')));
  }

  ngOnInit(): void {
    this.judgePath();
  }

  /**
   * 进行判断路径是否正常
   */
  judgePath() {
    this.url.subscribe(async u => {
      // 这里做请求。进行path认证
      let flag: boolean = false;
      await this.service.getDomain(u).toPromise().then(res => {
        res.domains.map(element => {
          if (element === u) {
            flag = true;
          }
        });
      })
      if (!flag) {
        this.router.navigate(["404"]);
      }
    })
  }
}
