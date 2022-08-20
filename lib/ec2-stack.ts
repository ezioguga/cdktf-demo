import { EnvironmentConfig } from './../types/environment_config';
import { TerraformStack, S3Backend, TerraformOutput } from "cdktf";
import { Construct } from 'constructs';
import { AwsProvider, ec2 } from "@cdktf/provider-aws";
export class EC2Stack extends TerraformStack {
    constructor(scope: Construct, id: string, props: EnvironmentConfig) {
      super(scope, id);

      // Initiate the s3 backend to store the terraform statefile
      new S3Backend(this, {
        bucket: "ec2-cdktf-demo-bucket",
        key: `${props.environment}/ec2stack/terraform.state`,
        region: "us-east-1"
      })
  
      // AWS Provider
      new AwsProvider(this, "AWS", {
        region: "us-east-1",
      });
  
      // Creating new EC2 Instance
      const instance = new ec2.Instance(this, `${props.environment}-CDKTF-EC2`, {
        ...props.EC2Props
      });
  
      // Output Terraform Values
      new TerraformOutput(this, "public_ip", {
        value: instance.publicIp,
      });
    }
  }