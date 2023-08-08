"use client"
import { Button } from '@/stories/Button/Button'
import { Navbar } from '@/stories/Navbar/Navbar'

export default function Home() {
  return (
    <>
      <Navbar leftOpen menuList={["Home", "About"]} />
      <div className='mt-10 p-10 xs:p-5'>
        <Button label='save' size='large' primary />
        <Button label='save' size='large' />
        <Button label="Small" size="small" />
      </div>
    </>

  )
}
