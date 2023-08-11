"use client"
import { Button } from '@/stories/Button/Button'
import { Checkbox } from '@/stories/Checkbox/Checkbox'
import { FileInput } from '@/stories/FileInput/FileInput'
import { Navbar } from '@/stories/Navbar/Navbar'
import { RadioButton } from '@/stories/RadioButton/RadioButton'
import { Sidebar } from '@/stories/Sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <div>
        <h1 className='bg-black text-white p-5'>Checkbox Button</h1>
        <FileInput
          imgSrc="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          label="Choose File"
          size="large"
        />
      </div>
      <div>
        <h1 className='bg-black text-white p-5'>Checkbox Button</h1>
        <Checkbox
          checkedImage="https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png"
          design="upper"
          idForName="vehical1"
          label="Bike"
          type="checkbox"
          unCheckedImage="https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png"
          value="male"
        />
        <Checkbox
          type='checkbox'
          checkedImage="https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png"
          design="medium"
          idForName="vehical2"
          label="Car"
          unCheckedImage="https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png"
          value="female"
        />
        <Checkbox
          type='checkbox'
          checkedImage="https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png"
          design="lower"
          idForName="vehical3"
          label="Bus"
          unCheckedImage="https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png"
          value="others"
        />
      </div>
      <div>
        <h1 className='bg-black text-white p-5'>Radio Button</h1>
        <RadioButton
          checkedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png"
          design="upper"
          htmlForId="male"
          label="Male"
          radioBtnName="gender"
          unCheckedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png"
          value="male"
        />
        <RadioButton
          checkedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png"
          design="medium"
          htmlForId="female"
          label="Female"
          radioBtnName="gender"
          unCheckedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png"
          value="female"
        />
        <RadioButton
          checkedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png"
          design="lower"
          htmlForId="others"
          label="Others"
          radioBtnName="gender"
          unCheckedImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png"
          value="others"
        />
      </div>
      <div>
        <h1 className='bg-black text-white p-5'>Sidebar</h1>
        <Sidebar halfClose menuList={["Home", "About Us", "Services", "Portfolio", "Vendor", "User", "Contact"]} />
        <Sidebar menuList={["Home", "About Us", "Services", "Portfolio", "Vendor", "User", "Contact"]} />
      </div>
      <div>
        <h1 className='bg-black text-white p-5'>Navbar</h1>
        <Navbar leftOpen menuList={["Home", "About"]} />
      </div>
      <div>
        <h1 className='bg-black text-white p-5'>Button</h1>
        <Button label='save' size='large' primary />
        <Button label='save' size='large' />
        <Button label="Small" size="small" />
      </div>
    </>
  )
}
