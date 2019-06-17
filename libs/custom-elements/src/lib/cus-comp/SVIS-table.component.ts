import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'SVIS-Table',
    template:`
            <p-table
            #dt
            [columns]="StructureColumns"
            class=""
            [value]="DataList"
            [(selection)]="SelectItemData"
            [dataKey]="DataKey"
            [responsive]="ResponsiveView"
            [scrollable]="ScrollView"
            [scrollHeight]="ScrollHeight"
            (onRowSelect)="onRowSelect($event)"
            >

            <ng-template pTemplate="caption" *ngIf="SearchField">
                <div class="filter-section form-row row">
                    <div class="group-control ui-inputgroup ui-float-label">
                        <input type="text" pInputText placeholder="" (input)="dt.filterGlobal($event.target.value, 'contains')">
                        <i class="icon fa fa-search"></i>
                        <label> {{ 'Dispatch.vehicleSearch.searchByKeyword' | translate }}</label>
                        </div>
                </div>
            </ng-template>


            <ng-template pTemplate="header" let-columns>
                <tr>
                <th>#</th>
                <th *ngFor="let col of columns" [pSortableColumn]="col.field">
                    {{ col.header }}
                    <p-sortIcon [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
                </th>
                </tr>
            </ng-template>


            <ng-template pTemplate="body" let-rowData let-columns="columns">
                <tr [pSelectableRow]="rowData">
                    <td><p-tableRadioButton [value]="rowData"></p-tableRadioButton></td>
                    <td *ngFor="let col of columns">
                        <span class="ui-column-title"> {{col.header}} </span>
                        <div class="td-data">
                            <span>
                                {{
                                    col.field.indexOf('.') !== -1
                                    ? rowData[col.field.substr(0, col.field.indexOf('.'))] !==
                                        null
                                        ? rowData[col.field.substr(0, col.field.indexOf('.'))][
                                            col.field.substr(col.field.indexOf('.') + 1)
                                        ]
                                        : null
                                    : col.field !== '' ? rowData[col.field] : ''
                                }}
                                {{
                                    col.field3.indexOf('.') !== -1
                                    ? '-' + rowData[col.field3.substr(0, col.field3.indexOf('.'))] !==
                                        null
                                        ? rowData[col.field3.substr(0, col.field3.indexOf('.'))][
                                            col.field3.substr(col.field3.indexOf('.') + 1)
                                        ]
                                        : null
                                    : col.field3 !== '' ? '-' + rowData[col.field3] : ''
                                }}
                                </span>
                                <span>
                                {{
                                    col.field2 !== ''
                                    ? col.field2.indexOf('.') !== -1
                                        ? rowData[col.field2.substr(0, col.field2.indexOf('.'))] !==
                                        null
                                        ? rowData[col.field2.substr(0, col.field2.indexOf('.'))][
                                            col.field2.substr(col.field2.indexOf('.') + 1)
                                            ]
                                        : null
                                        : rowData[col.field2]
                                    : ''
                                }}
                                </span>
                        </div>
                    </td>
                </tr>
            </ng-template>
            </p-table>
    
    `
})


export class SVISTableComponent implements OnInit  {


    @Input() DataList;
    @Input() StructureColumns;
    @Input() SearchField = false;
    @Output() SelectItemView  = new EventEmitter<any>();
    @Input() SelectItemData;
    @Input() ResponsiveView;
    @Input() ScrollView;
    @Input() ScrollHeight;
    @Input() DataKey = "id";



    constructor(){}

    ngOnInit(){}

    onRowSelect() {
        this.SelectItemView.next(this.SelectItemData)
    }
}