/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import moment from 'moment';

export const name = 'telemetry';
export const description = 'Get the clusters stats from the Kibana server';
export const method = 'POST';
export const path = '/api/telemetry/v2/clusters/_stats';

export const body = { timeRange: moment().valueOf(), unencrypted: true };
