import {App} from "aws-cdk-lib";
import { DataStack } from "./DataStack";
import { LambdaStack } from "./LambdaStack";
import { ApiStack } from "./ApiStack";


const app = new App();
const dataStack = new DataStack(app, 'DataStack');
const LambdaStacks = new LambdaStack(app, 'LambdaStack',{
    spacesTable: dataStack.spacesTable
});
new ApiStack(app, 'Api',{
    helloLambdaIntegration : LambdaStacks.helloLambdaIntegration
})