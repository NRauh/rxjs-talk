import { fromEvent } from 'rxjs';
import { debounceTime, tap, delay } from 'rxjs/operators';

const button = document.querySelector('button');
const output = document.querySelector('h1');

const clickEvent$ = fromEvent(button, 'click');
const manipulatedSource$ = clickEvent$.pipe(
  debounceTime(200),
  tap(() => console.log('user clicked the button')),
  delay(500),
);

manipulatedSource$.subscribe((e) => {
  output.textContent = `Was clicked at ${e.timeStamp}`;
});
