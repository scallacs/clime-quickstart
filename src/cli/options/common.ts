import {
    Command,
    command,
    param,
    option,
    Options,
    metadata
} from 'clime';

export class CommonOptions extends Options {
    @option({
        flag: 'd',
        description: 'this options is available for all commands',
        toggle: true,
        required: false,
        default: false
    })
    dryRun: boolean;
    
    @option({
        description: 'log level',
        toggle: true,
        required: false,
        default: false
    })
    loglevel: string;
}