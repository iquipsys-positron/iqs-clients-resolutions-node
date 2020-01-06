import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { ResolutionV1 } from './ResolutionV1';
import { IResolutionsClientV1 } from './IResolutionsClientV1';

export class ResolutionsHttpClientV1 extends CommandableHttpClient implements IResolutionsClientV1 {       
    
    constructor(config?: any) {
        super('v1/resolutions');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getResolutions(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ResolutionV1>) => void): void {
        this.callCommand( 
            'get_resolutions', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getResolutionById(correlationId: string, resolutionId: string,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        this.callCommand( 
            'get_resolution_by_id',
            correlationId,
            {
                resolution_id: resolutionId
            }, 
            callback
        );        
    }

    public createResolution(correlationId: string, resolution: ResolutionV1,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        this.callCommand(
            'create_resolution',
            correlationId,
            {
                resolution: resolution
            }, 
            callback
        );
    }

    public updateResolution(correlationId: string, resolution: ResolutionV1,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        this.callCommand(
            'update_resolution', 
            correlationId,
            {
                resolution: resolution
            }, 
            callback
        );
    }

    public deleteResolutionById(correlationId: string, resolutionId: string,
        callback: (err: any, resolution: ResolutionV1) => void): void {
        this.callCommand(
            'delete_resolution_by_id', 
            correlationId,
            {
                resolution_id: resolutionId
            }, 
            callback
        );
    }

    public unsetRule(correlationId: string, orgId: string, ruleId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'unset_rule', 
            correlationId,
            {
                org_id: orgId,
                rule_id: ruleId
            }, 
            callback
        );
    }
    
}
