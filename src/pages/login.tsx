/* eslint-disable */
import { Vue, Component } from "vue-property-decorator";
type FormData = {
  username: string;
  password: string;
};
@Component
export default class Login extends Vue {
  private username?: string = "账户";
  private password?: string = "密码";
  private formData?: FormData = { username: "", password: "" };
  private changeUsername(value: string) {
    this.formData!.username = value;
  }
  private changePassword(value: string) {
    this.formData!.password = value;
  }
  private submit() {
    this.$message({
      message: "登陆成功",
      type: "success",
    });
  }
  private reset() {
    this.formData = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <el-form ref="form" label-width="80px">
          <h1 style={{ textAlign: "center" }}>登陆</h1>
          <el-form-item label={this.username}>
            <el-input
              autofocus
              value={this.formData?.username}
              onInput={this.changeUsername}
            ></el-input>
          </el-form-item>
          <el-form-item label={this.password}>
            <el-input
              value={this.formData?.password}
              onInput={this.changePassword}
            ></el-input>
          </el-form-item>
        </el-form>
        <div style={{ textAlign: "center" }}>
          <el-button type="primary" onClick={this.submit}>
            登陆
          </el-button>
          <el-button onClick={this.reset}>重置</el-button>
        </div>
      </div>
    );
  }
}
