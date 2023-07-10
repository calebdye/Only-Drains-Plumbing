import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Home = () => {

 
  return (
    <>
      <Navbar />
        <div className="relative">
        <div className="relative">
          <div className="py-24 z-50 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center text-white text-center">
            <h1 className="text-[44px] md:text-[64px] font-bold my-4 animate__zoomIn" >{`Drain Cleaning at it's Best`}</h1>
            <p className="text-[20px] md:text-[26px] mb-3">Fair and Honest Service covering the Wasatch Front</p>
          </div>
          <div
            className="h-[420px] w-full ">

          </div>
          
          <div className="absolute bg-[#0f2b5b99] top-0 left-0 right-0 bottom-0"/>
        </div>
        <div className="absolute top-50 bottom-0 left-0 right-0 z-50">
        </div>
      </div>
      <div className="bg-white shadow md:mx-5 rounded-md py-8 my-5">
        <h2 className="text-blue-500 font-bold text-[30px] text-center">{`What area's do we service? What do we specialize in?`}</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-center py-2" style={{ fontSize: '16px' }}>
          Here at Only Drains we take pride in fairness and an understanding that drain issues can occur at very inconvenient and unfortunate times.
          Let us resolve those issues at a resonable and fair cost with guaranteed professional service. 
        </p>
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
         
          <div className='"md:max-w-md  rounded-sm overflow-hidden 
        shadow-lg bg-gray-200 md:h-[430px] text-deepBlue"'>
      <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2 text-deepBlue">Things that we specialize in</div>
            
            <div className="display: inline-block ">
              <ul className='list-disc marker:text-blue-500 list-outside'>
                <li>Main Sewer Drains</li>
                <li>Kitchen Sink Drains</li>
                <li>Laundry Drains</li>
                <li>Bathroom Sink Drains</li>
                <li>Tub/Shower Drains</li>
                <li>Floor Drains</li>
              </ul>
            </div>

              <p className='font-bold text-lg'>
              Seriously, Only Drains!
              </p>
                
            
      </div>
    </div>


    <div className='"md:max-w-md  rounded-sm overflow-hidden 
        shadow-lg bg-gray-200 md:h-[430px] text-deepBlue"'>
      <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2 text-deepBlue">Our Areas of Service</div>
            <div className="display: inline-block ">
              <ul className='list-disc marker:text-blue-500 list-outside'>
                  <li>Salt Lake County</li>
                  <li>Utah County</li>
                  <li>Davis County</li>
                  <li>Weber County</li>
                </ul>
            </div>
      </div>
    </div>
         
         </div>
        </div>

      </div>
     
    <Footer />
    </>
  );
};

export default Home;
