import { type ChangeEvent, type FormEvent, useState } from 'react';

import { Button, Input, Notification } from '@/app/components/ui-kit';
import { registerUser } from '@/services/auth';

interface Props {
  onSuccess?: () => void;
  accepted: boolean;
}

export default function SignInForm({ onSuccess, accepted }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(null);
  };

  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await registerUser(email, password);

      if (res.success) {
        setError(null);
        onSuccess?.();
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-6 mt-10.5 max-h-47 overflow-y-auto scrollbar-hide">
        <Input
          placeholder="Enter"
          variant="auth"
          label="* enter email or phone number"
          labelClassname="uppercase"
          className="placeholder:text-medium-gray"
          type="email"
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          onChange={handlePasswordChange}
        />
        <Input
          placeholder="Enter"
          variant="auth"
          label="* repeat password"
          labelClassname="uppercase"
          className="placeholder:text-medium-gray placeholder:tracking-normal letter-spacing-20"
          type="password"
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
        />
      </div>
      <div className="h-9">
        {error ? (
          <Notification variant="negative" label={error} />
        ) : (
          <Button
            className="uppercase w-full font-semibold"
            variant="grayBtn"
            type="submit"
            disabled={!email || !password || !repeatPassword || !accepted}
          >
            Sign up
          </Button>
        )}
      </div>
    </form>
  );
}
