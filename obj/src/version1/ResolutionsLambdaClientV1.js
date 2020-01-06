"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class ResolutionsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('resolutions');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getResolutions(correlationId, filter, paging, callback) {
        this.callCommand('get_resolutions', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getResolutionById(correlationId, resolutionId, callback) {
        this.callCommand('get_resolution_by_id', correlationId, {
            resolution_id: resolutionId
        }, callback);
    }
    createResolution(correlationId, resolution, callback) {
        this.callCommand('create_resolution', correlationId, {
            resolution: resolution
        }, callback);
    }
    updateResolution(correlationId, resolution, callback) {
        this.callCommand('update_resolution', correlationId, {
            resolution: resolution
        }, callback);
    }
    deleteResolutionById(correlationId, resolutionId, callback) {
        this.callCommand('delete_resolution_by_id', correlationId, {
            resolution_id: resolutionId
        }, callback);
    }
    unsetRule(correlationId, orgId, ruleId, callback) {
        this.callCommand('unset_rule', correlationId, {
            org_id: orgId,
            rule_id: ruleId
        }, callback);
    }
}
exports.ResolutionsLambdaClientV1 = ResolutionsLambdaClientV1;
//# sourceMappingURL=ResolutionsLambdaClientV1.js.map