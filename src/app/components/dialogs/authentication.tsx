'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  RadioGroup,
  RadioGroupItem,
  icons,
} from '@/app/components/ui-kit';
import { cn } from '@/lib';
import { useAuthStore } from '@/store';

import SignInImg from '../../../../public/assets/images/sign-in.jpg';
import SignUpImg from '../../../../public/assets/images/sign-up.jpg';
import SuccessImg from '../../../../public/assets/images/success.png';
import SignInForm from './signIn-form';
import SignUpForm from './signUp-form';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: Props) {
  useEffect(() => {
    if (open) {
      setAuthType('sign in');
    }
  }, [open]);

  const InfoIcon = icons.info;
  const CrissCross = icons.crissCross;

  const [authType, setAuthType] = useState<'sign in' | 'sign up'>('sign in');
  const [justRegistered, setJustRegistered] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const socials = [
    { color: 'bg-button-red', icon: icons.google },
    { color: 'bg-blue', icon: icons.facebook },
    { color: 'bg-black', icon: icons.x },
  ];

  const handleDialogChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      setJustRegistered(false);
    }
    if (accepted) {
      setAccepted(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent
        className="w-256 h-170 rounded-none p-0 border-0 max-lg:w-[calc(100%-3rem)]"
        showCloseButton={false}
      >
        <div className="flex max-lg:block">
          {!isLoggedIn && !justRegistered ? (
            <div className="flex flex-col gap-10.5 lg:w-1/2 lg:px-21.5 lg:py-15 max-lg:px-6 max-lg:pt-15 max-lg:pb-6">
              <DialogHeader>
                <RadioGroup
                  defaultValue="sign in"
                  onValueChange={(value) => setAuthType(value as 'sign in' | 'sign up')}
                  className="flex justify-center gap-16.5"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="sign in"
                      id="sign in"
                      className="peer w-4 h-4 rounded-[4px] border-1 border-black data-[state=checked]:bg-green-flash data-[state=unchecked]:bg-medium-gray 
                    data-[state=unchecked]:border-medium-gray"
                    />
                    <label
                      htmlFor="sign in"
                      className="font-semibold uppercase peer-data-[state=unchecked]:text-medium-gray"
                    >
                      Sign in
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="sign up"
                      id="sign up"
                      className="peer w-4 h-4 rounded-[4px] border-1 border-black data-[state=checked]:bg-green-flash data-[state=unchecked]:bg-medium-gray 
                    data-[state=unchecked]:border-medium-gray"
                    />
                    <label
                      htmlFor="sign up"
                      className="font-semibold uppercase peer-data-[state=unchecked]:text-medium-gray"
                    >
                      Sign up
                    </label>
                  </div>
                </RadioGroup>
              </DialogHeader>
              <div>
                {authType === 'sign in' ? (
                  <>
                    <DialogTitle className="uppercase text-2xl! text-center">Welcome back!</DialogTitle>
                    <SignInForm />
                  </>
                ) : (
                  <>
                    <DialogTitle className="uppercase text-2xl! text-center">Create an account</DialogTitle>
                    <SignUpForm onSuccess={() => setJustRegistered(true)} accepted={accepted} />
                  </>
                )}
                {authType === 'sign in' ? (
                  <div className="h-6 uppercase flex gap-2.5 items-center mt-8 cursor-pointer">
                    <InfoIcon className="mt-0.5" color="var(--color-gray)" width={20} height={20} />
                    Forgot password
                  </div>
                ) : (
                  <div className="h-6 uppercase flex gap-2.5 items-center mt-8 mb-4 text-sm">
                    <Checkbox
                      checked={accepted}
                      onCheckedChange={(checked) => setAccepted(checked === true)}
                      className="rounded-none border-black data-[state=checked]:bg-green-flash data-[state=checked]:border-0"
                      indicatorClassname="text-black"
                    />
                    I accept the terms of the license agreement
                  </div>
                )}

                <div className="flex items-center mt-8">
                  <hr className="flex-1" />
                  <span className="text-medium-gray font-light px-3">OR</span>
                  <hr className="flex-1" />
                </div>
                <div className="w-full flex justify-between mt-8">
                  {socials.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <div
                        key={index}
                        className={cn(
                          social.color,
                          'h-10 w-22 max-lg:w-19 flex items-center justify-center cursor-pointer'
                        )}
                      >
                        <IconComponent color="white" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-28.5 max-lg:gap-15 items-center justify-center lg:w-1/2 max-lg:h-full wrap-break-word">
              <DialogTitle className="uppercase text-2xl! lg:max-w-80 text-center leading-normal">
                {justRegistered ? 'You have successfully created an account' : 'You have successfully sign in'}
              </DialogTitle>
              <Image src={SuccessImg} alt="success img" />
            </div>
          )}

          <div className="flex w-1/2 max-lg:hidden">
            <Image
              src={authType === 'sign in' ? SignInImg : SignUpImg}
              alt="image"
              className="h-full object-cover"
              style={{ objectPosition: '45% center' }}
            />
          </div>
        </div>
        <button
          className="absolute right-10 top-10 w-8 h-8 max-lg:top-2 max-lg:right-2 flex items-center justify-center bg-white cursor-pointer"
          onClick={() => handleDialogChange(false)}
        >
          <CrissCross />
        </button>
      </DialogContent>
    </Dialog>
  );
}
