import { signIn, auth } from "@/auth"

import { Button } from "@/components/ui/button"
import { DiscordLogoIcon } from "@radix-ui/react-icons"
import { UserNav } from "./user-nav"


export async function SignIn() {
    const session = await auth()
    if (!session) return (
        <div>
            <form
                action={async () => {
                    "use server"
                    await signIn("discord",  { redirectTo: "/dashboard" })
                }}
            >
                <Button type="submit">
                <DiscordLogoIcon className="mr-2 h-4 w-4" /> Login with Discord
            </Button>
            </form>
        </div>
    )
    
    return (
        <UserNav></UserNav>
    )
} 