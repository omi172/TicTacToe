import {Stack, StackProps} from 'aws-cdk-lib';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { ITable } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Runtime ,Function} from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import {Construct} from 'constructs';
import { join } from 'path';

interface LambdaStackProps extends StackProps{
    spacesTable : ITable
}

export class LambdaStack extends Stack{

    public readonly helloLambdaIntegration : LambdaIntegration;

    constructor(scope: Construct, id: string, props?: LambdaStackProps){
        super(scope,id,props);

      const helloLambda = new NodejsFunction(this,"HelloLambda",{
            runtime:Runtime.NODEJS_18_X,
            handler:'hello.main',
            entry: (join(__dirname, '..','..','services')),
            environment:{
                TABLE_NAME : props.spacesTable.tableName
            }
        })

        this.helloLambdaIntegration = new LambdaIntegration(helloLambda);
    }
}