import { gValid } from "./index";

// Sample
const validate = gValid({
  schema: {
    email: "isEmail:Invalid email",
    name: "hasMin:Invaild name:2",
    password: "isPassword:Invalid Password"
  },
  single: false
});

const validateSingle = gValid({
  schema: "isPassword:Invalid Password",
  single: true
});

console.log(validate({ email: "sp@gm.io", password: "12gma@!DF" }));
console.log(validateSingle("12gma@!DF"));
