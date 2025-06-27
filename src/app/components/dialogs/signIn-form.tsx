import { type ChangeEvent, type FormEvent, useState } from 'react';

import { Button, Input, Notification } from '@/app/components/ui-kit';
import { cn } from '@/lib';
import { loginUser } from '@/services/auth';
import { useAuthStore } from '@/store';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await loginUser(email, password);

      if (result.success && result.user) {
        login(result.user.email);
        setError(null);
      } else {
        setError(result.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Invalid credentials');
      console.error(err);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(null);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col h-46 gap-6 mt-10.5">
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
          className={cn(
            isPasswordVisible ? 'tracking-normal' : 'letter-spacing-20',
            'placeholder:text-medium-gray placeholder:tracking-normal'
          )}
          type={isPasswordVisible ? 'text' : 'password'}
          rightIcon={isPasswordVisible ? 'eye' : 'hideEye'}
          rightIconClassname={isPasswordVisible ? 'text-[var(--color-gray)]' : 'text-[var(--color-black)]'}
          value={password}
          onChange={handlePasswordChange}
          onRightIconClick={() => setIsPasswordVisible((prev) => !prev)}
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
            disabled={!email || !password}
          >
            Sign in
          </Button>
        )}
      </div>
    </form>
  );
}
