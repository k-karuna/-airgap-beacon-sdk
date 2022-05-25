// const client = new WalletClient({ name: 'My Wallet' })
// await client.init() // Establish P2P connection

// client
//   .connect(async (message) => {
//     // Example: Handle PermissionRequest. A wallet should handle all request types
//     if (message.type === BeaconMessageType.PermissionRequest) {
//       // Show a UI to the user where he can confirm sharing an account with the DApp

//       const response: PermissionResponseInput = {
//         type: BeaconMessageType.PermissionResponse,
//         network: message.network, // Use the same network that the user requested
//         scopes: [PermissionScope.OPERATION_REQUEST], // Ignore the scopes that have been requested and instead give only operation permissions
//         id: message.id,
//         publicKey: 'tezos public key'
//       }

//       // Send response back to DApp
//       await client.respond(response)
//     }
//   })
//   .catch((error) => console.error('connect error', error))
