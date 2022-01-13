// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './commands';

export const CYPRESS_CONFIG = {
	retries: {
		runMode: 2,
		openMode: 1
	}
};

export const APP_URL = '/';
export const PARTICIPANTS_FORM = '/participants-form';
export const PARTICIPANTS_ASSIGNMENTS = '/participants-assignments';
export const SECRET_SANTA_REVEAL = '/secret';
