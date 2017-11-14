import {
    Command,
    command,
    param,
    option,
    Options,
    metadata
} from 'clime';
import { DefaultOptions } from '../options/default';

@command({
    description: 'This is a command for printing a greeting message',
})
export default class extends Command {

    @metadata
    execute(
        options: DefaultOptions,
    ) {
        if (options.version) {
            console.log(options.getVersion());
        }
    }

}