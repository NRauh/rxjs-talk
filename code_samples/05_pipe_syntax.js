// new syntax
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of('hello', 'world').pipe(
  map(val => val.toUpperCase()),
);

// old syntax
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const source$ = Observable.of('hello', 'world')
                          .map(val => val.toUpperCase());
