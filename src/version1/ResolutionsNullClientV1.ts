import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IResolutionsClientV1 } from './IResolutionsClientV1';
import { ResolutionV1 } from './ResolutionV1';

export class ResolutionsNullClientV1 implements IResolutionsClientV1 {
            
    public getResolutions(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ResolutionV1>) => void): void {
        callback(null, new DataPage<ResolutionV1>([], 0));
    }

    public getResolutionById(correlationId: string, resolutionId: string, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        callback(null, null);
    }

    public createResolution(correlationId: string, resolution: ResolutionV1, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        callback(null, resolution);
    }

    public updateResolution(correlationId: string, resolution: ResolutionV1, 
        callback: (err: any, resolution: ResolutionV1) => void): void {
        callback(null, resolution);
    }

    public deleteResolutionById(correlationId: string, resolutionId: string,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        if (callback) callback(null, null);
    }

    public unsetRule(correlationId: string, orgId: string, ruleId: string,
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}