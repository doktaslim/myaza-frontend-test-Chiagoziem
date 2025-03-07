import Image from 'next/image';

type LogoProps = {
  classname?: string;
}

export function Logo({classname}: LogoProps) {
  return (
    <div className='h-9 w-32'>
      <Image
        priority
        src={"/logo.png"}
        width={300}
        height={200}
        alt="Logo"
        className={`h-full w-auto ${classname}`}
      />
    </div>
  );
}