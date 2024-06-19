import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5 // seconds;
// export const dynamic: "force-dynamic" | "force-static" = "force-dynamic"; // force-dynamic = cache: "no-store" | force-static = default

export default async function MessagesPage() {
  // unstable_noStore(); // disabled cache by component

  // const response = await fetch(`${process.env.API_EXTERNAL_URL}/messages`, {
  //   headers: {
  //     "X-ID": "page",
  //   },
  //   next: {
  //     tags: ["msg"],
  //   },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
