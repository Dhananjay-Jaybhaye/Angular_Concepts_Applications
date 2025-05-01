import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(_value: any, ...args: any[]): string {
    let str: string;

    if (args[0] == 'PPA') {
      str = 'Batch which covers fundamentals of programming';
    } 
    else if (args[0] =='LB') {
      str = 'Batch which covers programming logic';
    } 
    else if (args[0] == 'Angular') {
      str = 'Batch which covers web development';
    } 
    else {
      str = 'Unknown batch type';
    }

    return str;
  }

}
