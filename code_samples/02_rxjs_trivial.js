import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of(37, 42, 1, 102);

source$.pipe(
  map(val => val * 2),
).subscribe(val => {
  console.log(`The value: ${val}`);
});

// Outputs
// The value: 74
// The value: 84
// The value: 2
// The value: 204
