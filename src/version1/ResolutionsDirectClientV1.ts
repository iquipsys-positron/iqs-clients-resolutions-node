import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IResolutionsClientV1 } from './IResolutionsClientV1';
//import { IResolutionsController } from 'iqs-services-resolutions-node';
import { ResolutionV1 } from './ResolutionV1';

export class ResolutionsDirectClientV1 extends DirectClient<any> implements IResolutionsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-resolutions", "controller", "*", "*", "*"))
    }

    public getResolutions(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ResolutionV1>) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.get_resolutions');
        this._controller.getResolutions(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getResolutionById(correlationId: string, resolutionId: string, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.get_resolution_by_id');
        this._controller.getResolutionById(correlationId, resolutionId, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }

    public createResolution(correlationId: string, resolution: ResolutionV1, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.create_resolution');
        this._controller.createResolution(correlationId, resolution, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }

    public updateResolution(correlationId: string, resolution: ResolutionV1, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.update_resolution');
        this._controller.updateResolution(correlationId, resolution, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }

    public deleteResolutionById(correlationId: string, resolutionId: string,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.delete_resolution_by_id');
        this._controller.deleteResolutionById(correlationId, resolutionId, (err, resolution) => {
            timing.endTiming();
            callback(err, resolution);
        });
    }

    public unsetRule(correlationId: string, orgId: string, ruleId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'resolutions.unset_rule');
        this._controller.unsetRule(correlationId, orgId, ruleId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}