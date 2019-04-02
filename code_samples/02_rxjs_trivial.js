import { of } from 'rxjs';

const source$ = of(37, 42, 1, 102);

source$.pipe(
  map(val => val * 2)
).subscribe(val => {
  console.log(`The value: ${val}`);
});
