'use client';

import Image from 'next/image';

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Input,
  RadioGroup,
  RadioGroupItem,
  icons,
} from '@/app/components/ui-kit';
import { cn } from '@/lib/utils';

import AuthImage from '../../../../public/assets/auth-img.jpg';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: Props) {
  const InfoIcon = icons.info;
  const CrissCross = icons.crissCross;
  const socials = [
    { color: 'bg-button-red', icon: icons.google },
    { color: 'bg-blue', icon: icons.facebook },
    { color: 'bg-black', icon: icons.x },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-256 h-170 rounded-none p-0 border-0" showCloseButton={false}>
        <div className="flex">
          <div className="flex flex-col gap-10.5 w-1/2 px-21.5 py-15">
            <DialogHeader>
              <RadioGroup defaultValue="option1" className="flex justify-center gap-16.5">
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="option1"
                    id="option1"
                    className="peer w-4 h-4 rounded-[4px] border-1 border-black data-[state=checked]:bg-green-flash data-[state=unchecked]:bg-medium-gray 
                    data-[state=unchecked]:border-medium-gray"
                  />
                  <label
                    htmlFor="option1"
                    className="font-semibold uppercase peer-data-[state=unchecked]:text-medium-gray"
                  >
                    Sign in
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="option2"
                    id="option2"
                    className="peer w-4 h-4 rounded-[4px] border-1 border-black data-[state=checked]:bg-green-flash data-[state=unchecked]:bg-medium-gray 
                    data-[state=unchecked]:border-medium-gray"
                  />
                  <label
                    htmlFor="option2"
                    className="font-semibold uppercase peer-data-[state=unchecked]:text-medium-gray"
                  >
                    Sign up
                  </label>
                </div>
              </RadioGroup>
            </DialogHeader>
            <div>
              <DialogTitle className="uppercase text-2xl! text-center">Welcome back!</DialogTitle>
              <form>
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
              <div className="uppercase flex gap-2.5 items-center mt-8 cursor-pointer">
                <InfoIcon className="mt-0.5" color="var(--color-gray)" width={20} height={20} />
                Forgot password
              </div>
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
                      className={cn(social.color, 'h-10 w-22 flex items-center justify-center cursor-pointer')}
                    >
                      <IconComponent color="white" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <Image
              src={AuthImage}
              alt="image"
              className="h-full object-cover"
              style={{ objectPosition: '45% center' }}
            />
          </div>
        </div>
        <button
          className="absolute right-10 top-10 w-8 h-8 flex items-center justify-center bg-white cursor-pointer"
          onClick={() => onOpenChange(false)}
        >
          <CrissCross />
        </button>
      </DialogContent>
    </Dialog>
  );
}
