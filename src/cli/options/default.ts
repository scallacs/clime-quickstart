import {
    Command,
    command,
    param,
    option,
    Options,
    metadata
} from 'clime';
import { CommonOptions } from './common';

export class DefaultOptions extends CommonOptions {

    @option({
        flag: 'v',
        description: 'print cli version',
        toggle: true,
        required: false,
        default: false
    })
    version: boolean;

    getVersion() {
        return "0.0.1";
    }
}