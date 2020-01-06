import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { ResolutionV1 } from './ResolutionV1';
import { IResolutionsClientV1 } from './IResolutionsClientV1';
export declare class ResolutionsHttpClientV1 extends CommandableHttpClient implements IResolutionsClientV1 {
    constructor(config?: any);
    getResolutions(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ResolutionV1>) => void): void;
    getResolutionById(correlationId: string, resolutionId: string, callback: (err: any, resolution: ResolutionV1) => void): void;
    createResolution(correlationId: string, resolution: ResolutionV1, callback: (err: any, resolution: ResolutionV1) => void): void;
    updateResolution(correlationId: string, resolution: ResolutionV1, callback: (err: any, resolution: ResolutionV1) => void): void;
    deleteResolutionById(correlationId: string, resolutionId: string, callback: (err: any, resolution: ResolutionV1) => void): void;
    unsetRule(correlationId: string, orgId: string, ruleId: string, callback: (err: any) => void): void;
}
