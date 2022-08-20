import { TerraformStack, TerraformOutput } from "cdktf";
import { Construct } from 'constructs';
import EC2Props from "../enums/EC2Props";
import { AwsProvider, ec2 } from "@cdktf/provider-aws";
interface MyCDKTFAppStackProps {
  EC2Props: EC2Props;
}
export class EC2Stack extends TerraformStack {
    constructor(scope: Construct, id: string, props: MyCDKTFAppStackProps) {
      super(scope, id);
  
      new AwsProvider(this, "AWS", {
        region: "us-east-1",
      });
  
      const instance = new ec2.Instance(this, "my-cdktf-learning", {
        ...props.EC2Props
      });
  
      new TerraformOutput(this, "public_ip", {
        value: instance.publicIp,
      });
    }
  }