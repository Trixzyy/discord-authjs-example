---

# Discord Auth.js Example

This repository demonstrates how to implement OAuth authentication using [Auth.js](https://authjs.dev/) and Discord, along with the [ShadCN](https://ui.shadcn.com/) component library in a Next.js application.

![Auth GIF Demo](https://github.com/Trixzyy/discord-authjs-example/assets/74984365/d6757039-47c2-4e3e-826e-82774460875a)

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [License](#license)

## Features
- **Authentication**: Implemented using Auth.js, replacing NextAuth for a more robust and flexible solution.
- **Themes**: Support for multiple themes to enhance user customization.
- **App Router**: Improved navigation using the app router.
- **ShadCN UI Library**: Modern and cohesive design system for the user interface.

## Getting Started
Follow these instructions to set up the project locally.

## Prerequisites
- Node.js installed on your machine
- Discord Developer account

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Trixzyy/discord-authjs-example.git
    cd discord-authjs-example
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration
1. **Configure Redirect URI in Discord Developer Console**:
    - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
    - Select your application.
    - Navigate to the "OAuth2" section.
    - Add `http://localhost:3000/api/auth/callback/discord` to the Redirects field.
    - Save the changes.

    

2. **Environment Variables**:
    Create a `.env.local` file in the root directory and add your Discord credentials:
    ```env
    AUTH_SECRET={AUTH_SECRET}

    AUTH_DISCORD_ID={YOUR_APPLICATION_ID}
    AUTH_DISCORD_SECRET={YOUR_SECRET_ID}
    ```
To create an auth secret use the command `npx auth secret`

## Running the Application
To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
