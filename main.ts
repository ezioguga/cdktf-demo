import { STG_Environment } from './config/stg_environment';
import { DEV_Environment } from './config/dev_environment';
import { App } from "cdktf";
import { EC2Stack } from './lib/EC2-stack';

const app = new App();

new EC2Stack(app, "cdk-demo-instance-dev", DEV_Environment);

new EC2Stack(app, "cdk-demo-instance-stg", STG_Environment);

app.synth();