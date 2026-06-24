import { Pipe, PipeTransform } from '@angular/core';

/* A pipe in Angular is a function that transforms data for display in your templates. Pipes take input data, process it, and return a transformed output.

Key characteristics:

Format data: Pipes format strings, currency, dates, percentages, and more without changing the underlying component data
Template syntax: Use the pipe operator | in templates to apply a pipe
Chainable: You can combine multiple pipes in the same expression
Parametrizable: Many pipes accept parameters to customize their behavior
Common examples:

{{ price | currency }} — formats a number as currency
{{ message | uppercase }} — converts text to uppercase
{{ date | date: 'short' }} — formats a date

Custom pipes: You can create your own pipes by implementing the PipeTransform interface. In fact, I see you already have a convert-pipe.ts file in your project */

@Pipe({ // The name property defines the name of the pipe that will be used in templates. In this case, the pipe can be used with the name 'convert'.
  name: 'convert',
})

export class ConvertPipe implements PipeTransform { // PipeTransform is an interface that requires the implementation of the transform method. This method is where you define the logic for transforming the input value based on the provided arguments.
  transform(value: any, args: any): unknown { // The transform method takes two parameters: value (the input value to be transformed) and args (additional arguments that can be used to determine how the transformation should occur). The return type is unknown, which means it can return any type of value based on the transformation logic.
    
    if(args == 'upperCase') // This condition checks if the argument passed to the pipe is 'upperCase'. If it is, the pipe will convert the input value to uppercase.
    {
      return String(value).toUpperCase();
    }

    if(args == 'kgToGram') // This condition checks if the argument passed to the pipe is 'kgToGram'. If it is, the pipe will convert the input value from kilograms to grams by multiplying it by 1000.
    {
      return value*1000;
    }
    return;
  }
}
