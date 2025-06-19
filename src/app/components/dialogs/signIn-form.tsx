import { Button, Input } from '@/app/components/ui-kit';

export default function SignInForm() {
  return (
    <form className="max-h-70">
      <div className="flex flex-col gap-6 mt-10.5">
        <Input
          placeholder="Enter"
          variant="auth"
          label="* enter email or phone number"
          labelClassname="uppercase"
          className="placeholder:text-medium-gray"
          type="email"
        />
        <Input
          placeholder="Enter"
          variant="auth"
          label="* password"
          labelClassname="uppercase"
          className="placeholder:text-medium-gray placeholder:tracking-normal letter-spacing-20"
          type="password"
          rightIcon="eye"
          rightIconColor="var(--color-gray)"
        />
      </div>
      <div className="mt-13">
        <Button className="uppercase w-full font-semibold" variant="grayBtn" type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
}
