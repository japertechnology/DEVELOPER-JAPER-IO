# developer.japer.io

Welcome to the official public repository for the JAPER Technology API, where you’ll find reference materials and sample requests to help developers integrate with JAPER.

- /ping
Check the status of JAPER AWS API Gateway.

/v1/ping
Check the status of JAPER AWS Lambda.

/v1/x/nexus/status
Check the status of JAPER Nexus.

/v1/x/device/create
Create a new JAPER Device.

/v1/x/device/status
Retrieve the status of a JAPER Device.

/v1/x/device/purge
Remove all validations from a JAPER Device.

/v1/x/device/kill
Permanently disable a JAPER Device.

/v1/x/encrypt
Encrypt data to generate JAPER Data

/v1/x/decrypt
Decrypt JAPER Data (aliases: lookup, execute).

/v1/x/validation/attempt
Conduct PIN validation from email or sms.

/v1/x/validate/domain
Conduct domain validation via DNS TXT record.

/v1/x/validate/email
Send a validation email PIN.

/v1/x/validate/sms
Dispatch a validation SMS PIN.

/v1/x/validation/status
Check a JAPER Customer's opt-out status.

## Getting Started

1. Sign up for an account at [www.japer.technology](https://www.japer.technology/shop) and purchase your API key.
2. Read the API documentation at [developer.japer.io](https://developer.japer.io) and understand out interface.
3. Use this GitHub documentation to quick start your implementation.

## Contributing and Feedback

Contributions are welcome! Feel free to open issues or submit pull requests if you find problems or want to suggest improvements. For direct feedback, use the contact information on [developer.japer.io](https://developer.japer.io).

## License

This repository is released under the [MIT License](LICENSE). By contributing, you agree that your contributions will be licensed under the MIT License as well.
