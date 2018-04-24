import {
    Command,
    command,
    param,
    option,
    Options,
    metadata
} from 'clime';
import { CommonOptions } from './common';

export class HelloOptions extends CommonOptions {
    @option({
        flag: 'l',
        description: 'Language message',
        toggle: false,
        required: false,
        default: 'en'
    })
    language: 'en' | 'fr' = 'en';

}