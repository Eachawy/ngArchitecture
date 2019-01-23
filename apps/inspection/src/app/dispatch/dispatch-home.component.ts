import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dispatch-home',
  templateUrl: './dispatch-home.component.html'
})
export class DispatchHomeComponent implements OnInit {
  items = 'items';
  favouriteList = [];
  /******** Start Main List Services ********/
  mainList = [
    {
      id: '0',
      value: 'VTP Information Management',
      favourite: false,
      url: '/inspection/VehicleSearch'
    },
    {
      id: '1',
      value: 'Renewal Test',
      favourite: false,
      url: '#!'
    },
    {
      id: '2',
      value: 'Defect partial service',
      favourite: false,
      url: '#!'
    },
    {
      id: '3',
      value: 'Registration Test',
      favourite: false,
      url: '#!'
    },
    {
      id: '4',
      value: 'VTP Information Test',
      favourite: false,
      url: '#!'
    },
    {
      id: '5',
      value: 'Renewal Info Test',
      favourite: false,
      url: '#!'
    },
    {
      id: '6',
      value: 'Defect partial service info',
      favourite: false,
      url: '#!'
    },
    {
      id: '7',
      value: 'Registration Test info',
      favourite: false,
      url: '#!'
    }
  ];
  /******** End Main List Services ********/

  constructor(private dragulaService: DragulaService) {

  }

  /******** Start Remove Item From Favourite List ********/
  removeItem($event, item) {
    $event.target.remove();
    let arr = this.favouriteList.indexOf(item);
    this.favouriteList.splice(arr, 1);
    for (let index = 0; index < this.mainList.length; index++) {
      const selectitem = this.mainList[index];
      if (selectitem === item) {
        item.favourite = false;
      }
    }
  }
  /******** End Remove Item From Favourite List ********/

  /******** Start Toggle Between Item ********/
  toggleFav(item) {
    item.favourite = !item.favourite;
    if (item.favourite) {
      this.favouriteList.push(item);
    } else {
      let removeobj = this.favouriteList.indexOf(item);
      this.favouriteList.splice(removeobj, 1);
    }
  }
  /******** End Toggle Between Item ********/
  ngOnInit() {

    /******** Start ng2 dragula config ********/
    this.dragulaService.createGroup(this.items, {
      copy: (el, source) => {
        return source.id === 'mainService';
      },
      accepts: (element, target, source, sibling) => {
        let CaseA = true;
        this.favouriteList.filter(function(el) {
          if (
            el.value.indexOf(element.querySelector('.desc').textContent) > -1
          ) {
            CaseA = false;
          }
        });
        if (CaseA) {
          for (let index = 0; index < this.mainList.length; index++) {
            const item = this.mainList[index];
            if (item.value === element.querySelector('.desc').textContent) {
              item.favourite = true;
            }
          }
        }
        return CaseA;
      },
      copyItem: el => {
        return el;
      }
    });
    /******** End ng2 dragula config ********/
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.dragulaService.destroy(this.items);
  }
}
