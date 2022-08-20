import { App } from "cdktf";
import { EC2Stack } from './lib/EC2-stack';
import dev_environment from './enums/environments/dev_environment';
const app = new App();
new EC2Stack(app, "aws_instance", {
  ...dev_environment
});
app.synth();