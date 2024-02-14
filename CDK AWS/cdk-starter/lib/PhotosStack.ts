import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket,CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Fn } from 'aws-cdk-lib';
export class PhotosStack extends cdk.Stack {
    private stackSuffix : string;
    public readonly photosBucketArn : string   
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      this.initializeSuffix();
       const photosBucket = new Bucket(this, "PhotoBucket2",{
        bucketName : `photos-bucket-${this.stackSuffix}`
      });
      this.photosBucketArn = photosBucket.bucketArn;
      new cdk.CfnOutput(this,'photos-bucket',{
        value : photosBucket.bucketArn,
        exportName : 'photos-bucket'
      })
    }
    private initializeSuffix(){
        const shortStackId = Fn.select(2,Fn.split('/',this.stackId));
        this.stackSuffix = Fn.select(4,Fn.split('-',shortStackId));
    }
}