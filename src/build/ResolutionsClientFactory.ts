import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ResolutionsDirectClientV1 } from '../version1/ResolutionsDirectClientV1';
import { ResolutionsNullClientV1 } from '../version1/ResolutionsNullClientV1';
import { ResolutionsHttpClientV1 } from '../version1/ResolutionsHttpClientV1';
import { ResolutionsLambdaClientV1 } from '../version1/ResolutionsLambdaClientV1';

export class ResolutionsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-resolutions', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-resolutions', 'client', 'direct', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-resolutions', 'client', 'null', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-resolutions', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-resolutions', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ResolutionsClientFactory.DirectClientV1Descriptor, ResolutionsDirectClientV1);
		this.registerAsType(ResolutionsClientFactory.NullClientV1Descriptor, ResolutionsNullClientV1);
		this.registerAsType(ResolutionsClientFactory.HttpClientV1Descriptor, ResolutionsHttpClientV1);
		this.registerAsType(ResolutionsClientFactory.LambdaClientV1Descriptor, ResolutionsLambdaClientV1);
	}
	
}
