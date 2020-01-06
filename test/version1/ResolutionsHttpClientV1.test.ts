let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ResolutionsMemoryPersistence } from 'iqs-services-resolutions-node';
import { ResolutionsController } from 'iqs-services-resolutions-node';
import { ResolutionsHttpServiceV1 } from 'iqs-services-resolutions-node';
import { IResolutionsClientV1 } from '../../src/version1/IResolutionsClientV1';
import { ResolutionsHttpClientV1 } from '../../src/version1/ResolutionsHttpClientV1';
import { ResolutionsClientFixtureV1 } from './ResolutionsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ResolutionsRestClientV1', ()=> {
    let service: ResolutionsHttpServiceV1;
    let client: ResolutionsHttpClientV1;
    let fixture: ResolutionsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ResolutionsMemoryPersistence();
        let controller = new ResolutionsController();

        service = new ResolutionsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-resolutions', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-resolutions', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-resolutions', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ResolutionsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ResolutionsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
