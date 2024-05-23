import { Link } from 'react-router-dom'
function SettingPage () {
  return (
    <div className='p-4 md:px-20 w-full flex flex-col items-center justify-center'>
      <div className='bg-red-500 w-full p-2 flex flex-col items-center justify-center rounded-sm'>
        <h1 className='p-2 w-full rounded-sm text-2xl text-white text-center '>
          Setting
        </h1>
        <p className='text-neutral-400 text-sm '>
          Customized All The User Setting
        </p>
      </div>
      <div className='flex py-4 items-center justify-center w-96'>
        <ul className='flex items-center justify-center flex-col gap-5 p-2 md:p-2'>
          <li className=' text-red-500 hover:text-neutral-50 hover:bg-red-500 border-2 border-red-500 rounded-md p-2'>
            <Link className='flex items-center justify-center gap-4'>
              <div className='text-center text-3xl border-r-2 flex items-center justify-center px-2'>
                <ion-icon name='people-outline'></ion-icon>
              </div>
              <div className='px-2'>
                <h1 className='text-center font-bold'>Update User Detail</h1>
                <p className='text-neutral-400 text-center text-[12px]'>
                  Customize Your Profile Change Your Detail Of Your Profile
                </p>
              </div>
            </Link>
          </li>
          <li className=' text-red-500 hover:text-neutral-50 hover:bg-red-500 border-2 border-red-500 rounded-md p-2'>
            <Link to={"/changepassword"} className='flex items-center justify-center gap-4'>
              <div className='text-center text-3xl border-r-2 flex items-center justify-center px-2'>
                <ion-icon name='document-lock-outline'></ion-icon>
              </div>
              <div className='px-2'>
                <h1 className='text-center font-bold'>Change Your Password</h1>
                <p className='text-neutral-400 text-center text-[12px]'>
                  Replace Your Old Password With New One And Enhance Your
                  Security
                </p>
              </div>
            </Link>
          </li>
          <li className=' text-red-500 hover:text-neutral-50 hover:bg-red-500 border-2 border-red-500 rounded-md p-2'>
            <Link className='flex items-center justify-center gap-4'>
              <div className='text-center text-3xl border-r-2 flex items-center justify-center px-2'>
                <ion-icon name='camera-outline'></ion-icon>
              </div>
              <div className='px-2'>
                <h1 className='text-center font-bold'>
                  Update Your Profile Picture
                </h1>
                <p className='text-neutral-400 text-center text-[12px]'>
                  Upload Your Current Image get People To Know You
                </p>
              </div>
            </Link>
          </li>
          <li className=' text-red-500 hover:text-neutral-50 hover:bg-red-500 border-2 border-red-500 rounded-md p-2'>
            <Link className='flex items-center justify-center gap-4'>
              <div className='text-center text-3xl border-r-2 flex items-center justify-center px-2'>
                <ion-icon name='finger-print-outline'></ion-icon>
              </div>
              <div className='px-2'>
                <h1 className='text-center font-bold'>Your Privacy</h1>
                <p className='text-neutral-400 text-center text-[12px]'>
                  Check The Blocking And The User You Want To Block
                </p>
              </div>
            </Link>
          </li>
          <li className=' text-red-500 hover:text-neutral-50 hover:bg-red-500 border-2 border-red-500 rounded-md p-2'>
            <Link className='flex items-center justify-center gap-4'>
              <div className='text-center text-3xl border-r-2 flex items-center justify-center px-2'>
                <ion-icon name='trash-outline'></ion-icon>
              </div>
              <div className='px-2'>
                <h1 className='text-center font-bold'>Delete Your Account</h1>
                <p className='text-neutral-400 text-center text-[12px]'>
                  Parmanentally Deleta Your Account And Make All Your Data Will
                  Disappear
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SettingPage
