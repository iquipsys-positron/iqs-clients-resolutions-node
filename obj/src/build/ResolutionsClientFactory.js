"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ResolutionsDirectClientV1_1 = require("../version1/ResolutionsDirectClientV1");
const ResolutionsNullClientV1_1 = require("../version1/ResolutionsNullClientV1");
const ResolutionsHttpClientV1_1 = require("../version1/ResolutionsHttpClientV1");
const ResolutionsLambdaClientV1_1 = require("../version1/ResolutionsLambdaClientV1");
class ResolutionsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ResolutionsClientFactory.DirectClientV1Descriptor, ResolutionsDirectClientV1_1.ResolutionsDirectClientV1);
        this.registerAsType(ResolutionsClientFactory.NullClientV1Descriptor, ResolutionsNullClientV1_1.ResolutionsNullClientV1);
        this.registerAsType(ResolutionsClientFactory.HttpClientV1Descriptor, ResolutionsHttpClientV1_1.ResolutionsHttpClientV1);
        this.registerAsType(ResolutionsClientFactory.LambdaClientV1Descriptor, ResolutionsLambdaClientV1_1.ResolutionsLambdaClientV1);
    }
}
exports.ResolutionsClientFactory = ResolutionsClientFactory;
ResolutionsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-resolutions', 'factory', 'default', 'default', '1.0');
ResolutionsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-resolutions', 'client', 'direct', 'default', '1.0');
ResolutionsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-resolutions', 'client', 'null', 'default', '1.0');
ResolutionsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-resolutions', 'client', 'http', 'default', '1.0');
ResolutionsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-resolutions', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=ResolutionsClientFactory.js.map