import EnvironmentConfig from "../EnvironmentConfig";
const dev_environment: EnvironmentConfig = {
    EC2Props: {
        ami: 'ami-090fa75af13c156b4',
        instanceType: 't2.micro',
        tags : {
            Name: 'cdktf-demo',
            Environment: 'Development',
            Managedby: 'Terraform-CDK'
        }
    }
};
export default dev_environment;