"use client"
import { Button } from '@/components/ui/button'

function HomePage() {
    const onClick = () => {
        console.log('Button clicked')
    }
    return (
        <div className='flex flex-col justify-center items-center gap-2 h-[100vh]'>
            <div>HomePage</div>
            <Button className='btn1' variant={'default'} size={'lg'} onClick={onClick}>Shadcn Btn</Button>
        </div>
    )
}

export default HomePage