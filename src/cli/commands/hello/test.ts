import {
    Command,
    command,
    param,
    option,
    Options,
    metadata
} from 'clime';
import { CommonOptions } from '../../options/common';

@command({
    description: 'This is a sub command',
})
export default class extends Command {

    @metadata
    execute(
        options: CommonOptions,
    ) {
        return 'Sub command hello';
    }

}