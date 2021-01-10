import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
import Color from 'color';
import { NgselectComponent } from './ngselect.component';

describe('NgselectComponent', () => {
  let component: NgselectComponent;
  let fixture: ComponentFixture<NgselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("user Details",()=>
  {
    const a :HTMLElement=fixture.debugElement.query(By.css(".header")).nativeElement;
    expect(getComputedStyle(a).margin).toBe('2px'); 
    expect(getComputedStyle(a).padding).toBe('5px');
    expect(getComputedStyle(a).color).toBe('rgb(0, 0, 255)');
    expect(getComputedStyle(a).border).toBe('1px solid rgb(128, 128, 128)');
    const expectBackgroundColor = Color('#f4a460').string() 
    expect(getComputedStyle(a).backgroundColor).toBe(expectBackgroundColor);
    expect(getComputedStyle(a).visibility).toBe('hidden');

  })

  it("unit test case for hidden elements.",()=>{
    expect(fixture.debugElement.query(By.css('.header1'))).toBeNull();
  })

  // it('unit test case to check “users” is surrounded by h2 tag',()=>
  // {
  //   // const a :HTMLElement=fixture.debugElement.query(By.css("h2")).nativeElement;
  //   // expect(view.$el.html().indexOf('Admin') !== -1).toBe(true);
  //   const a=element.evaluate("//*[text()='Users')]", document, null, XPathResult.ANY_TYPE, null );
  //   expect(a).toBeTruthy();
    
  // })

  it("disabled  and enabled input",()=>{

    const btn=fixture.debugElement.query(By.css('#sub'));
    const nameInput = fixture.debugElement.query(By.css('input[type=text]'));
    btn.triggerEventHandler('click',{})
    fixture.detectChanges();
   
    expect(nameInput.nativeElement).toBeTruthy();
    expect(component.editmode).toBeFalsy();
  })

  it("disabled  input",()=>{

    const nameInput = fixture.debugElement.query(By.css('input[type=text]')).nativeElement;
    expect(nameInput.disabled).toBeTruthy();

  })

  it("radio button checked",()=>{
    const input = fixture.nativeElement.querySelector('input[id="age1"]');
    expect(input.checked).toBeTruthy();
  })
});
