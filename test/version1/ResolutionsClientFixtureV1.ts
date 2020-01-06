let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { ResolutionV1 } from '../../src/version1/ResolutionV1';
import { IResolutionsClientV1 } from '../../src/version1/IResolutionsClientV1';

let RESOLUTION1: ResolutionV1 = {
    id: '1',
    org_id: '1',
    rule_ids: ['1'],
    resolution: 'Resolution 1'
};
let RESOLUTION2: ResolutionV1 = {
    id: '2',
    org_id: '1',
    rule_ids: ['2'],
    resolution: 'Resolution 2'
};

export class ResolutionsClientFixtureV1 {
    private _client: IResolutionsClientV1;
    
    constructor(client: IResolutionsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let resolution1, resolution2;

        async.series([
        // Create one resolution
            (callback) => {
                this._client.createResolution(
                    null,
                    RESOLUTION1,
                    (err, resolution) => {
                        assert.isNull(err);

                        assert.isObject(resolution);
                        assert.equal(resolution.org_id, RESOLUTION1.org_id);
                        assert.sameMembers(resolution.rule_ids, RESOLUTION1.rule_ids);
                        assert.equal(resolution.resolution, RESOLUTION1.resolution);

                        resolution1 = resolution;

                        callback();
                    }
                );
            },
        // Create another resolution
            (callback) => {
                this._client.createResolution(
                    null,
                    RESOLUTION2,
                    (err, resolution) => {
                        assert.isNull(err);

                        assert.isObject(resolution);
                        assert.equal(resolution.org_id, RESOLUTION2.org_id);
                        assert.sameMembers(resolution.rule_ids, RESOLUTION2.rule_ids);
                        assert.equal(resolution.resolution, RESOLUTION2.resolution);

                        resolution2 = resolution;

                        callback();
                    }
                );
            },
        // Get all resolutions
            (callback) => {
                this._client.getResolutions(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, resolutions) => {
                        assert.isNull(err);

                        assert.isObject(resolutions);
                        assert.isTrue(resolutions.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the resolution
            (callback) => {
                resolution1.resolution = 'Updated resolution 1';

                this._client.updateResolution(
                    null,
                    resolution1,
                    (err, resolution) => {
                        assert.isNull(err);

                        assert.isObject(resolution);
                        assert.equal(resolution.resolution, 'Updated resolution 1');
                        assert.equal(resolution.org_id, RESOLUTION1.org_id);

                        resolution1 = resolution;

                        callback();
                    }
                );
            },
        // Delete resolution
            (callback) => {
                this._client.deleteResolutionById(
                    null,
                    resolution1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete resolution
            (callback) => {
                this._client.getResolutionById(
                    null,
                    resolution1.id,
                    (err, resolution) => {
                        assert.isNull(err);
                        
                        assert.isNull(resolution || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
