import { HamburgerSlider } from 'react-animated-burgers'

function HamburgerButton({open, toggle}) {


  return (
    <div 
    // css={{
    //   [md]: {
    //     display: 'none'
    //   }
    // }}
    >
      <HamburgerSlider buttonWidth={25} isActive={open} toggleButton={toggle} barColor="black" />
    </div>
  )
}

export default HamburgerButton;
