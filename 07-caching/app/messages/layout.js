import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";
// export const revalidate = 5S
// export const dynamic = 'force-dynamic'

export default  function MessagesLayout({ children }) {
  // const response = await fetch('http://localhost:8080/messages');
  // unstable_noStore()
  // const messages = await response.json();
  const messages = getMessages()
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
