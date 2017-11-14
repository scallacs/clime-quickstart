#!/usr/bin/env node
const APP_VERSION = '0.0.1';
const APP_NAME = 'Clime Quickstart';
import * as Path from 'path';
import { CLI, Shim } from 'clime';

// The second parameter is the path to folder that contains command modules.
let commandsDirectory = Path.resolve(__dirname, 'commands');
let cli = new CLI('clime-quickstart', commandsDirectory);
// Clime in its core provides an object-based command-line infrastructure.
// To have it work as a common CLI, a shim needs to be applied:
let shim = new Shim(cli);
shim.execute(process.argv);
