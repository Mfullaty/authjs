import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/current-user"

const ServerPage = async () => {
     const user = await currentUser();
  return (
    <UserInfo user={user} label="💻 Server Component" />
  )
}

export default ServerPage
