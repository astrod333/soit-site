import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/SOIT.svg"
            alt="SOIT Logo"
            width={80}
            height={28}
            className={cn('h-7 w-auto dark:invert', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/SOIT.svg"
            alt="SOIT Logo"
            width={80}
            height={28}
            className={cn('h-7 w-auto dark:invert', className)}
        />
    )
}
