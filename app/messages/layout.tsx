import { getMessages } from "@/lib/messages";
import { ReactNode } from "react";

export default async function MessagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const response = await fetch(`${process.env.API_EXTERNAL_URL}/messages`, {
  //   headers: {
  //     "X-ID": "layout",
  //   },
  // });
  // const messages = await response.json();
  const messages = await getMessages();
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
