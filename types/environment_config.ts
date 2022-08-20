export interface EnvironmentConfig {
    environment: "DEV" | "STG" | "PRD",
    EC2Props: {
        ami: string;
        instanceType: string;
        tags: {
            Name: string,
            Environment: string,
            Managedby: string
        }
    }
}