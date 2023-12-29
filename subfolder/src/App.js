
import './App.css';

function App() {
  return (
    <div className="">
      <div className='flex flex-col mb-[80px]'>
      <h2 className='text-white bg-blue-400 text-[20px] text-center 
      font-[500] leading-[30px] pt-[70px] pb-[20px]'>
        DESERT ROSES FAN CLUB
        </h2>
        <h2 className='text-white  text-[30px]  leading-[47px] text-center font-[500] py-[40px]
         px-[30px] bg-gray-300'>Virtual Fan Club Registration Form</h2>
        </div>
    <form onSubmit={(e) => {
      e.preventDefault();
    }}
     className='flex flex-col px-[15px] gap-[30px] mb-[100px]'
    action="">
      {/* REGISTRATION INPUT */}
      <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
        Registration Date
    </h2>
    <input type="date" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Date</h2>
      </div>
      {/* FIRSTNAME & LASTNAME */}
      <div className='flex flex-col gap-[15px]'>
       
     <h2 className='text-[16px] text-left leading-[24px] font-[500] '>
      Name
    </h2>
    <div className='flex justify-between gap-[10px] w-[100%]'>
      {/* First Name */}
      <div className='flex flex-col  gap-[15px] w-[50%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>First Name</h2>
     </div>
     {/* Second Name */}
     <div className='flex flex-col gap-[15px] w-[50%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px] ' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Last Name</h2>
     </div>
    </div>
    <div>

    </div>
      </div>
      {/* END OF FIRSTNAME AND LASTNAME */}
      <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
        Date of Birth
    </h2>
    <input type="date" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Date</h2>
      </div>
      {/* PHONE NUMBER */}
      <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
      Phone Number
    </h2>
    <input type="tel" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]'
     maxLength={11} inputMode='numeric' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Date</h2>
      </div>
      {/* ADDRESS */}

      <div className='flex flex-col gap-[15px]'>
       <h2 className='text-[16px] text-left leading-[24px] font-[500] '>
        Address
      </h2>
      <div className='flex flex-col gap-[15px] w-[100%]'>
        {/* First Address Name */}
        <div className='flex flex-col  gap-[15px] w-[100%]'>
       <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
       text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
       <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Street Address</h2>
       </div>
       {/* Second Address Name */}
       <div className='flex flex-col gap-[15px] w-[100%]'>
       <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
       text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px] ' />
       <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Street Address Line 2</h2>
       </div>
      </div>
      {/* 3rd Address Information */}
      <div className='flex justify-between gap-[10px] w-[100%]'>
      {/* First Name */}
      <div className='flex flex-col  gap-[15px] w-[50%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>City</h2>
     </div>
     {/* Second Name */}
     <div className='flex flex-col gap-[15px] w-[50%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px] ' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>State / Province</h2>
     </div>
    </div>
    {/* Postal Code */}
    <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
      Postal Code
    </h2>
    <input onInput={( e => {
      const numbersOnly = e.target.value.replace(/\D/g, '');
      e.target.value = numbersOnly;
    })}
     type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]'
     maxLength={5} inputMode='numeric' />
      </div>
        </div>
        {/* Nationality */}
        <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
       Nationality
    </h2>
    <input type="text" className='focus:outline-none py-[10px] px-[10px] 
    border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     </div>
     {/* Reason Message */}
     <div className='flex flex-col gap-[15px]'>
     <h2 className='text-[16px] leading-[24px] font-[500] '>
      Reason for Joining
    </h2>
     <textarea name="" id="" cols="80%" rows="5" className="focus:outline-none 
     py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] border-blue-300 rounded-[2px]" 
          placeholder="Type here"></textarea>
          </div>
          {/* Mode of Meetings */}
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500]'>
        Which do you Prefer online or virtual meetings
      </h2>
      {/* Meet */}
      <div className='flex flex-col gap-[10px]'>
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[30px] h-[30px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[500]'>
          Google Meet
          </h2>
          </div>
          {/* Zoom */}
          <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[30px] h-[30px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[500]'>
          Zoom
          </h2>
      </div>
      {/* Skype */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[30px] h-[30px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[500]'>
          Skype
          </h2>
      </div>
      {/* Messenger */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[30px] h-[30px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[500]'>
          Facebook Messenger
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[30px] h-[30px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[500]'>
          Other
          </h2>
      </div>
      </div>
          </div>
    </form>
    </div>
  );
}

export default App;
