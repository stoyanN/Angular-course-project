import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MediaService } from '../services/media.service';

import { UserProfileComponent } from './user-profile.component';

class MediaServiceStub {
  userRecords(userId: string, collection: string): Observable<object[]> {
    return userId === '1' ? of([{ objectId: 1, title: 'Hello' }]) : of([]);
  }

  deleteRecord(collection: string, recordId: string): Observable<object> {
    return of({});
  }
}


describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      providers: [
        {
          provide: MediaService, useClass: MediaServiceStub
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have userId', () => {
    component.userId = '123';

    expect(component.userId).toBe('123');
  });

  it('should change isLoaded to TRUE', fakeAsync(() => {
    expect(component.isLoaded).toBeTrue();
  }))

  it('should have new userId', fakeAsync(() => {
    localStorage.setItem('userId', '1');
    
    // fixture.detectChanges();
    // tick(1000);

    expect(component.userId).toBe('1');
  }))

  it('should have article', fakeAsync(() => {
    
    localStorage.setItem('userId', '1');
    
    fixture.detectChanges();

    tick();

    expect(component.articles.length).toEqual(1);
  }));

  it('delete() should remove element when valid id provided', fakeAsync(() => {
    let elem = fixture.debugElement.nativeElement;
    localStorage.setItem('userId', '0');
    component.delete('1')

    fixture.detectChanges();


    expect(elem.innerText).not.toContain('Hello');
  }));

  it('delete() should NOT remove element when invalid id provided', fakeAsync(() => {
    let elem = fixture.debugElement.nativeElement.querySelector('tbody');
    component.delete('2');

    fixture.detectChanges();

    tick(100);

    expect(elem.textContent).toContain('Hello');
  }));


});
