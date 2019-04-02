import { Subject } from 'rxjs';

const someValue = new Subject();
someValue.subscribe(val => console.log(`my value is: ${val}`));

someValue.next('hello'); // outputs: `my value is: hello`
someValue.next('world'); // outputs: `my value is: world`
