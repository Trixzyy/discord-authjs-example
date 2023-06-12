# Discord Next.js Authentication Example

This is an example of how to use Discord for authentication in a Next.js app. The authentication system is built using next-auth, an open-source authentication solution for Next.js apps that provides tools for automatically handling the hard parts of authentication (OAuth flow, callback, auth endpoints, etc.) so developers can focus on building.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env.local` file and add your Discord client ID and secret:
```
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=a_random_string_of_jumbo
```


4. Run the app using `npm run dev`.

## Usage

1. Go to http://localhost:3000.
2. Click on the "Sign In" button.
3. Click on the "Login with Discord" button.
4. Authorize the app to access your Discord account.
5. You will be redirected back to the app and logged in.

## Demo

![Demo](/demo/demo.gif)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
