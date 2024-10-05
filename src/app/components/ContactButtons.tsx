import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export const ResumeButton = () => {
  return (
    <Link
      href="/ernesto-ballon-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="btn btn-primary">Check my resume</Button>
    </Link>
  );
};

export const EmailButton = () => {
  return (
    <Link
      href="mailto:ernestoballon@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="btn btn-primary">Send me an email</Button>
    </Link>
  );
};

export const CallMeButton = () => {
  return (
    <Link href="tel:8456712841" target="_blank" rel="noopener noreferrer">
      <Button className="btn btn-primary">Call me</Button>
    </Link>
  );
};

export default ResumeButton;
