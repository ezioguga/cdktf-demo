import { EnvironmentConfig } from './../types/environment_config';

export const DEV_Environment: EnvironmentConfig = {
    environment: "DEV",
    EC2Props: {
        ami: "ami-090fa75af13c156b4",
        instanceType: "t2.micro",
        tags: {
            Name: "cdktf-demo-dev",
            Environment: "Development",
            Managedby: "Terraform-CDK"
        }
    }
}