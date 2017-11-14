import {
    Command,
    command,
    param,
    option,
    Options,
    metadata,
    Context
} from 'clime';
import { HelloOptions } from '../options/hello';

@command({
    description: 'This is a command to show an hello message',
})
export default class extends Command {

    @metadata
    execute(
        options: HelloOptions,
        context: Context
    ) {
        switch (options.language){
            case 'fr':
                return 'Bonjour!';
            case 'en':
            default:
                return 'Hello!';
        }
    }

}