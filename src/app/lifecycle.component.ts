import { Component, Input, ViewChild, ContentChild,  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr/>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() bindable = 1000

  @ViewChild('boundParagraph') boundParagraph: HTMLElement

  @ContentChild('boundContent') boundContent: HTMLElement

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
    console.log(this.boundContent)
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
    console.log(this.boundParagraph)
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
    console.log(this.boundParagraph)
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  private log(hook: string) {
    console.log(hook)
  }
}
