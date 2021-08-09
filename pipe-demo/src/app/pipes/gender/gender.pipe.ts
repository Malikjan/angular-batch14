import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'gender',
    pure: true,   // by default pure
    // pure: false      // impure
})
export class GenderPipe implements PipeTransform {
    transform(value: any): string {
        console.log(value)
        if (value == 1) {
            return 'male'
        } else {
            return 'female'
        }
    }
}
