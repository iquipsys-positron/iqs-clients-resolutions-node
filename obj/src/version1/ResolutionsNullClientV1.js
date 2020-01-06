"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ResolutionsNullClientV1 {
    getResolutions(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getResolutionById(correlationId, resolutionId, callback) {
        callback(null, null);
    }
    createResolution(correlationId, resolution, callback) {
        callback(null, resolution);
    }
    updateResolution(correlationId, resolution, callback) {
        callback(null, resolution);
    }
    deleteResolutionById(correlationId, resolutionId, callback) {
        if (callback)
            callback(null, null);
    }
    unsetRule(correlationId, orgId, ruleId, callback) {
        if (callback)
            callback(null);
    }
}
exports.ResolutionsNullClientV1 = ResolutionsNullClientV1;
//# sourceMappingURL=ResolutionsNullClientV1.js.map