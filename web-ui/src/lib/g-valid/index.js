import * as validator from "./validator";

import { Config, Result, SingleResult } from "./types";
import { vError } from "./error";

/**
 * Validator Schema
 * Test Case: "case:message:test"
 * You can use a "|" to add more Test Case to schema
 * eg. "isRequired:Field is required|hasMin:Field is greater than two:2"
 *
 * Sample Schema: {
 *  email: "isEmail:Invalid email",
 *  name: "hasMin:Is greater than 2 charaters|hasMax:30:Is lesser than 30 charaters:2"
 * }
 *
 * @param param0
 * @author Godstime Israel
 */
export function gValid({ schema, single }) {
  if (single && typeof schema == "object")
    return (v) => vError.badSchemaTypeObject;

  if (!single && typeof schema == "string")
    return (v) => vError.badSchemaTypeString;

  if (single) return (value) => validateSingle(schema, value);

  return (value) => validateMultiple(schema, value);
}

export function validateMultiple(schema, value) {
  const errors = {};
  for (let item in schema) {
    const { error } = validateSingle(schema[item], value[item]);
    if (error && error.length) errors[item] = error;
  }
  return { errors, valid: validator.isEmpty(errors) };
}

export function validateSingle(schema, value) {
  let error = null;

  schema.split("|").forEach((op) => {
    const [testCase, message, test] = op.split(":");
    if (test) {
      if (!validator[testCase](value, test)) error = message;
    } else {
      if (!validator[testCase](value)) error = message;
    }
  });

  return { error, valid: validator.isEmpty(error) };
}

const gvalid = gValid;
export default gValid;
