#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStarterStack } from '../lib/cdk-starter-stack';
import { PhotosStack } from '../lib/PhotosStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';
import { BucketTagger } from './Tagger';

const app = new cdk.App();
new CdkStarterStack(app, 'CdkStarterStack');
const photostack = new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app,'PhotosHandlerStack',{
     targetBucketArn : photostack.photosBucketArn,
});

const tagger = new BucketTagger('level','test');
cdk.Aspects.of(app);