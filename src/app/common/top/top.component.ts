import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  menus: { key: string, name: string, icon: string, select: boolean }[];
  private url: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.url = route.url.pipe(map(segments => segments.join('')));
  }

  ngOnInit(): void {
    this.menus = [{
      key: '',
      name: '我的',
      icon: 'home',
      select: true
    }, {
      key: 'collect',
      name: '我的收藏',
      icon: 'heart',
      select: false
    }, {
      key: 'private',
      name: '私人',
      icon: 'lock',
      select: false
    }, {
      key: 'exp',
      name: '实验性',
      icon: 'bulb',
      select: false
    }]
  }

  /**
   * menu点击跳转路由
   */
  menuClick(key) {

    this.url.subscribe(res => {
      if (key === '') {
        this.router.navigate([res]);
      } else {
        this.router.navigate([res, key]);
      }
    })
  }

}
