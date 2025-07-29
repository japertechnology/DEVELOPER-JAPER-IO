# DEVELOPER-JAPER-IO

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![AI](https://img.shields.io/badge/Assisted-Development-2b2bff?logo=openai&logoColor=white) 

The official public repository of **resources** for use with the JAPER Technology API.

JAPER is a security-focused platform that helps developers manage devices, validate users, and protect data. The API supports secure device creation and lifecycle management, multi-channel validation via email, SMS, or domain checks, and robust encryption and decryption services. Typical use cases include controlling devices for IoT deployments, verifying customer identities, and safeguarding sensitive information.

## Getting Started

1. Sign up for an account at [www.japer.technology](https://www.japer.technology/shop) and purchase your API key.
2. Read the API documentation at [developer.japer.io](https://developer.japer.io) and understand **our** interface.
3. Use this GitHub documentation to quick start your implementation.

## API Overview

`/ping` Check the status of JAPER AWS API Gateway.

`/v1/ping` Check the status of JAPER AWS Lambda.

`/v1/x/nexus/status` Check the status of JAPER Nexus.

`/v1/x/device/create` Create a new JAPER Device.

`/v1/x/device/status` Retrieve the status of a JAPER Device.

`/v1/x/device/purge` Remove all validations from a JAPER Device.

`/v1/x/device/kill` Permanently disable a JAPER Device.

`/v1/x/encrypt` Encrypt data to generate JAPER Data

`/v1/x/decrypt` Decrypt JAPER Data (aliases: lookup, execute).

`/v1/x/validation/attempt` Conduct PIN validation from email or sms.

`/v1/x/validate/domain` Conduct domain validation via DNS TXT record.

`/v1/x/validate/email` Send a validation email PIN.

`/v1/x/validate/sms` Dispatch a validation SMS PIN.

`/v1/x/validation/status` Check a JAPER Customer's opt-out status.

## Examples

The [examples/node](examples/node) folder contains a simple Node.js script.
Set the `NODE_API_KEY` environment variable and run `node ping.js` to
ping the API.

## Contributing and Feedback

Contributions are welcome! Feel free to open issues or submit pull requests if you find problems or want to suggest improvements. For direct feedback, use the contact information on [developer.japer.io](https://developer.japer.io).

## License

This repository is released under the [MIT License](LICENSE.md). By contributing, you agree that your contributions will be licensed under the MIT License as well.

![JAPER](https://github.com/japertechnology/DEVELOPER-JAPER-IO/blob/df569f40620c4f737ecd81938f2bcf0df4760f3b/asset/images/JAPER-White.png)
