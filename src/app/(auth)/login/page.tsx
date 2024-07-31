import { login } from "@/src/lib/actions";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Page() {

  return (
  <>
    <h1 className="text-3xl">Login</h1>
    <form action={login} id="login" className="w-full flex flex-col gap-4">
      <Input label="Email" labelPlacement="outside" placeholder="Email" type="email" name="email"></Input>
      <Input label="Password" labelPlacement="outside" placeholder="Password" type="password" name="password"></Input>
    </form>
      <Button type="submit" color="default" form="login">Login</Button>
  </>
  );
}