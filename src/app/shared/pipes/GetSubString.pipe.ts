import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "GetSubstring"
})

export class ConvertHyphensPipe implements PipeTransform {
    
    textToReturn: string = "";
    
    transform(value: string, character: string, whichpart: string) {
        
        this.textToReturn = whichpart == '' ? value.substring(value.indexOf(character), 0) : 
            value.substring(value.indexOf(character) + 1, value.length);

        return this.textToReturn;
    }
}
