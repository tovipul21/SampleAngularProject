import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "ConvertHyphens"
})

export class ConvertHyphensPipe implements PipeTransform {
    // transform(value: string, character: string) : string {
    //     return value.substring(value.indexOf(character) + 1, value.length);
    // }

    transform(value: string, character: string, whichpart: string) {
        //textToReturn: String;

        if (whichpart == 'left') {
            return value.substring(value.indexOf(character), 0);
        } else {
            return value.substring(value.indexOf(character) + 1, value.length);
        }
    }
}