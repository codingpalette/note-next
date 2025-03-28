import { signIn } from "@/auth";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="">
      </div>
      <form
        action={async (formData) => {
          "use server"
          await signIn("resend", formData)
        }}
      >
        <input type="text" name="email" placeholder="Email" />
        <button type="submit">Signin with Resend</button>
      </form>
    </>
  );
}
