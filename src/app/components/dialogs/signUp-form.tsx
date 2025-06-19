import { Button, Input } from '@/app/components/ui-kit';

export default function SignInForm() {
  return (
    <form>
      <div className="flex flex-col gap-6 mt-10.5 max-h-48 overflow-y-auto scrollbar-hide">
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
        <Input
          placeholder="Enter"
          variant="auth"
          label="* repeat password"
          labelClassname="uppercase"
          className="placeholder:text-medium-gray placeholder:tracking-normal letter-spacing-20"
          type="password"
        />
      </div>
      <div className="mt-3">
        <Button className="uppercase w-full font-semibold" variant="grayBtn" type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
}
