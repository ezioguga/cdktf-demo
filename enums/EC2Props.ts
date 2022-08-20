type EC2Props = {
    ami: string;
    instanceType: string;
    tags : {
        Name: string,
        Environment: string,
        Managedby: string
    }
}
export default EC2Props;