import { fakeAsync, flushMicrotasks, inject, TestBed } from '@angular/core/testing';
import backendless from 'backendless';
import Backendless from 'backendless';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { UserService } from './user.service';


class BackendlessServiceMock {

  UserService = {
    getCurrentUser(): Promise<object> {
      console.log('i was here');

      let test: Backendless.User = { username: 'Ivan', ___class: 'test' };
      let name = { name: "Ivan" };
      return Promise.resolve(test);
    }
  }


}

describe('GetUserService', () => {
  let service: UserService;

  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: backendless, useClass: BackendlessServiceMock
        },
        provideMockStore({ initialState })
      ],
      imports: []
    });
    store = TestBed.inject(MockStore);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getUser() should return user', fakeAsync(inject([UserService, Backendless], (service: UserService, backendless: BackendlessServiceMock) => {
  //   spyOn(backendless.UserService, 'getCurrentUser').and.callThrough();

  //   let result: any;
  //   let errors;

  //   service.getUser().then(value => {
  //     result = value;
  //     console.log(result, '=====================================================');
  //   }).catch(err => errors = err);

  //   flushMicrotasks();

  //   expect(result).toEqual('user');
  // })))
});
