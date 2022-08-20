import { EnvironmentConfig } from './../types/environment_config';

export const STG_Environment: EnvironmentConfig = {
    environment: "STG",
    EC2Props: {
        ami: "ami-090fa75af13c156b4",
        instanceType: "t2.micro",
        tags: {
            Name: "cdktf-demo-stg",
            Environment: "Staging",
            Managedby: "Terraform-CDK"
        }
    }
}