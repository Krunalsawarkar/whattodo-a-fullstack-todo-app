import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/ui/todo/tasks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center p-24">
      <h1>Login</h1>
      <form action={signInAction}>
        <Button>Submit</Button>
      </form>
    </main>
  );
}
