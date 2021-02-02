//translates normal text into uwu speak
// https://github.com/Schotsl/Uwuifier-node
import { Uwuifier } from 'uwuifier';
const uwuifier = new Uwuifier({
    spaces: {
        faces: 0.55,
        actions: 0.075,
        stutters: 0.1
    },
    words: 1,
    exclamations: 1
});

var stwing = 'hello, who are you?'


export function uwuify(string) {
    stwing = string
    stwing = uwuifier.uwuifySentence(string)
    return stwing
}
