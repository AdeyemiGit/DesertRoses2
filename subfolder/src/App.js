import React, {useRef} from 'react';
import './App.css';
import SignatureCanvas  from 'react-signature-canvas';


function App() {
  const signatureRef = useRef();
const handleClear = () => {
  if(signatureRef.current){
    signatureRef.current.clear();
  }
}



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
     className='flex flex-col px-[20px] gap-[30px] mb-[100px]'
    action="">
      {/* REGISTRATION INPUT */}
      <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
        Registration Date
    </h2>
    <input type="date" className='focus:outline-none w-[100%] bg-white py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Date</h2>
      </div>
      {/* FIRSTNAME & LASTNAME */}
      <div className='flex flex-col gap-[15px]'>
       
     <h2 className='text-[16px] text-left leading-[24px] font-[500] '>
      Name
    </h2>
    <div className='flex justify-between w-[100%]'>
      {/* First Name */}
      <div className='flex flex-col  gap-[15px] w-[48%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>First Name</h2>
     </div>
     {/* Second Name */}
     <div className='flex flex-col gap-[15px] w-[48%]'>
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
    <input type="date" className='focus:outline-none py-[10px] w-[100%] bg-white  px-[10px] border-[1px] border-[solid]
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
       <input type="text" className=' focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
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
      <div className='flex flex-col  gap-[15px] w-[48%]'>
     <input type="text" className='focus:outline-none py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>City</h2>
     </div>
     {/* Second Name */}
     <div className='flex flex-col gap-[15px] w-[48%]'>
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
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Google Meet
          </h2>
          </div>
          {/* Zoom */}
          <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Zoom
          </h2>
      </div>
      {/* Skype */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Skype
          </h2>
      </div>
      {/* Messenger */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Facebook Messenger
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Other
          </h2>
      </div>
      </div>
          </div>
          {/* WAYS TO PARTICIPATE */}
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500]'>
        Fun Ways to participate (Select all that apply)
      </h2>
      {/* Meet */}
      <div className='flex flex-col gap-[10px]'>
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Camping
          </h2>
          </div>
          {/* Zoom */}
          <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         Event
          </h2>
      </div>
      {/* Skype */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Travels
          </h2>
      </div>
      {/* Messenger */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         Virtual
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         Other
          </h2>
      </div>
      </div>
          </div>

          <div className = "flex flex-col gap-[30px] pb-[30px] border-b-[2px]">
            <h2 className = 'text-[16px] leading-[24px] font-[500] '>
              Club Packages
              </h2>
              <div className = 'flex flex-col gap-[20px]'>
     <div className ='flex gap-[10px] border-[2.5px] border-gray-200 py-[20px] 
     border-solid pl-[10px] pr-[30px]  rounded-[5px]'>
      {/* INPUT FIELD */}
      <div className ='h-[100%] flex justify-start'>
       <input type="checkbox" className ='w-[20px] h-[20px]' />
       </div>
       {/* TEXT FOR INPUT FIELD */}
      
        <div className ='flex flex-col gap-[8px]'>
          {/* Header */}
        <h2 className ='text-[16px] leading-[24px] font-[500]'>
          Bronze
        </h2>
        {/* Normal text */}
        <h2 className ='text-[16px] text-[#7C7C7C] leading-[24px] font-[500]'>
          Exclusive content 10% discount on merchandise
        </h2>
        <h2 className= 'text-[16px] leading-[24px] font-[700] text-blue-600'>
          $50.00
  </h2>
        </div>
       
     </div>
     {/* SILVER  */}
     <div className ='flex gap-[10px] border-[2.5px] border-gray-200 py-[20px] 
     border-solid pl-[10px] pr-[30px]  rounded-[5px]'>
      {/* INPUT FIELD */}
      <div className ='h-[100%] flex justify-start'>
       <input type="checkbox" className ='w-[20px] h-[20px]' />
       </div>
       {/* TEXT FOR INPUT FIELD */}
      
        <div className ='flex flex-col gap-[8px]'>
          {/* Header */}
        <h2 className ='text-[16px] leading-[24px] font-[500]'>
          Silver
        </h2>
        {/* Normal text */}
        <h2 className ='text-[16px] text-[#7C7C7C] leading-[24px] font-[500]'>
          Exclusive content 30% discount on merchandise
          Free ticket to 1 events Automatic reservation
        </h2>
        <h2 className= 'text-[16px]  leading-[24px] font-[700] text-blue-600'>
          $100.00
  </h2>
        </div>
       
     </div>
     {/* GOlD */}
     <div className ='flex gap-[10px] border-[2.5px] border-gray-200 py-[20px] 
     border-solid pl-[10px] pr-[30px]  rounded-[5px]'>
      {/* INPUT FIELD */}
      <div className ='h-[100%] flex justify-start'>
       <input type="checkbox" className ='w-[20px] h-[20px]' />
       </div>
       {/* TEXT FOR INPUT FIELD */}
      
        <div className ='flex flex-col gap-[8px]'>
          {/* Header */}
        <h2 className ='text-[16px] leading-[24px] font-[500]'>
          Gold
        </h2>
        {/* Normal text */}
        <h2 className ='text-[16px] text-[#7C7C7C] leading-[24px] font-[500]'>
          Exclusive content 50% discount on merchandise
          Free ticket to 3 events Automatic reservation
        </h2>
        <h2 className= 'text-[16px]  leading-[24px] font-[700] text-blue-600'>
          $150.00
  </h2>
        </div>
       
     </div>
     {/* JUST
     <div className = 'border-[1.2px]'></div> */}
              </div>
          </div>
          <div className = 'flex justify-between mt-[20px]'>
   <h2 className ='text-[16px] text-[#000]  leading-[24px] font-[500]'>
    Total 
    </h2>
   <h2 className ='text-[16px] text-[#000] leading-[24px] font-[500]'>
    $0.00
    </h2>
          </div>
          {/*  RADIO BUTTONS || Known as Payment method */}
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500]'>
        Payment Method
      </h2>
      {/* Cash */}
      <div className='flex flex-col gap-[10px]'>
      <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name ='p-method'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Cash
          </h2>
          </div>
          {/* Cheque */}
          <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name ='p-method'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         Cheque
          </h2>
      </div>
      {/* Credit Card */}
      <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name= 'p-method'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Credit Card
          </h2>
      </div>
      {/* Wire Transfer */}
      <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name ='p-method'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
        Wire Transfer
          </h2>
      </div>
      {/* Bank Transfer */}
      <div className='flex gap-[5px]'>
         <input type="radio" name ='p-method' className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Bank Transfer
          </h2>
      </div>
      {/* Purchase Order */}
      <div className='flex gap-[5px]'>
         <input type="radio" name='p-method' className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Purchase Order
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="radio" name = 'p-method' className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Other
          </h2>
      </div>
      </div>
          </div>
          {/* HOW DID YOU HEAR ABOUT US */}
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500]'>
        How did you hear about us?
      </h2>
      {/* Facebook */}
      <div className='flex flex-col gap-[10px]'>
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Facebook
          </h2>
          </div>
          {/*==== Twitter==== */}
          <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Twitter
          </h2>
      </div>
      {/* Instagram */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Instagram
          </h2>
      </div>
      {/* Referral */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
           Referral
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         Online Ads
          </h2>
      </div>
      {/* Google Ads */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Google Ads
          </h2>
      </div>
      {/* TV Commercial */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          TV Commercial
          </h2>
      </div>
      {/* Radio */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Radio
          </h2>
      </div>
      {/* Other */}
      <div className='flex gap-[5px]'>
         <input type="checkbox" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Other
          </h2>
      </div>
      </div>

          </div>
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500]'>
        Would you like to receive email coming from the club?
      </h2>
      {/* Cash */}
      <div className='flex flex-col gap-[10px]'>
      <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name ='email?'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
          Yes
          </h2>
          </div>
          <div className='flex gap-[5px]'>
         <input type="radio" className='w-[20px] h-[20px] border-[1px] border-[solid]
         border-blue-300' name ='email?'/>
         <h2 className='text-[16px] leading-[24px] font-[400]'>
         No
          </h2>
      </div>
      {/* Credit Card */}

      </div>
          </div>
          {/* Applicant's Signature */}
          <div className='flex flex-col gap-[15px] '>
    <h2 className='text-[16px] leading-[24px] font-[500]'>
  Applicant's Signature
    </h2>
    <div className='flex flex-col gap-[10px]'>
    <SignatureCanvas
    className =' border-[2.5px] border-gray-200 
    border-solid  rounded-[5px]'
    ref ={signatureRef}
    canvasProps = {{ width : 400, height: 120, className :'signatureCanva'  }}
    />

    <div className='flex justify-between'>
    <p className='text-[10px] leading-[14px] font-[400] text-start'>
   Powered by <span className='text-blue-400'> Desert Roses  Sign </span>
    </p>
    <button onClick={handleClear}
     className='text-[10px] leading-[14px] font-[400] px-[20px] py-[5px] bg-blue-200'>
  Clear
    </button>
    </div>
    </div>

    
          </div>
          {/* Date Signed */}
          <div className='flex flex-col gap-[15px]'>
      <h2 className='text-[16px] leading-[24px] font-[500] '>
        Date Signed
    </h2>
    <input type="date" className='focus:outline-none w-[100%] bg-white py-[10px] px-[10px] border-[1px] border-[solid]
     text-[16px] leading-[24px] font-[500] placeholder:text-[#7C7C7C] border-blue-300 rounded-[2px]' />
     <h2 className='text-[12px] leading-[18px] font-[400] text-gray-500'>Date</h2>
      </div>
      {/* AGREEMENT TO TERMS */}
      
         
         <span className='text-[16px] text-[#7C7C7C] leading-[24px] font-[400] mb-[100px]'>
         <input type="checkbox" className='w-[20px] h-[20px]
          self-start  mr-[10px] '/>
         I confirm that all information I entered in this form is accurate and true.
         I have read and understand the rules and regulations of the club.
          
      </span>
      <div className='flex flex-col gap-[30px]'>
  <h2 className='text-[16px] text-center text-[#000] leading-[24px] font-[400] pb-[40px] border-b-[2px]'>
   Thank you for joining the club!
  </h2>
  <div className='flex justify-center'>
  <button className='text-[16px] text-[#fff] leading-[24px] font-[400]
   px-[70px] py-[10px] bg-blue-400 rounded-[5px] text-center'>
  Submit
  </button>
  </div>
      </div>
    </form>
    </div>
  );
}

export default App;
