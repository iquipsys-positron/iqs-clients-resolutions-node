let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ResolutionsMemoryPersistence } from 'iqs-services-resolutions-node';
import { ResolutionsController } from 'iqs-services-resolutions-node';
import { IResolutionsClientV1 } from '../../src/version1/IResolutionsClientV1';
import { ResolutionsDirectClientV1 } from '../../src/version1/ResolutionsDirectClientV1';
import { ResolutionsClientFixtureV1 } from './ResolutionsClientFixtureV1';

suite('ResolutionsDirectClientV1', ()=> {
    let client: ResolutionsDirectClientV1;
    let fixture: ResolutionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ResolutionsMemoryPersistence();
        let controller = new ResolutionsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-resolutions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-resolutions', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ResolutionsDirectClientV1();
        client.setReferences(references);

        fixture = new ResolutionsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
