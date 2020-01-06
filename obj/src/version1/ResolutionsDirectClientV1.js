"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class ResolutionsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-resolutions", "controller", "*", "*", "*"));
    }
    getResolutions(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'resolutions.get_resolutions');
        this._controller.getResolutions(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getResolutionById(correlationId, resolutionId, callback) {
        let timing = this.instrument(correlationId, 'resolutions.get_resolution_by_id');
        this._controller.getResolutionById(correlationId, resolutionId, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }
    createResolution(correlationId, resolution, callback) {
        let timing = this.instrument(correlationId, 'resolutions.create_resolution');
        this._controller.createResolution(correlationId, resolution, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }
    updateResolution(correlationId, resolution, callback) {
        let timing = this.instrument(correlationId, 'resolutions.update_resolution');
        this._controller.updateResolution(correlationId, resolution, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }
    deleteResolutionById(correlationId, resolutionId, callback) {
        let timing = this.instrument(correlationId, 'resolutions.delete_resolution_by_id');
        this._controller.deleteResolutionById(correlationId, resolutionId, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }
    unsetRule(correlationId, orgId, ruleId, callback) {
        let timing = this.instrument(correlationId, 'resolutions.unset_rule');
        this._controller.unsetRule(correlationId, orgId, ruleId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.ResolutionsDirectClientV1 = ResolutionsDirectClientV1;
//# sourceMappingURL=ResolutionsDirectClientV1.js.map