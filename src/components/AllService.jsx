import Image from "next/image";


async function getData() {
  const res = await fetch(process.env.BASE_URL + 'AllService');
  if (!res.ok) {
    throw new Error('Error');
  }
  return res.json();
}



const AllService = async () => {
  const data = await getData();

  return <section className="container mx-auto py-16 text-base">
   <div>
   <p className="uppercase text-brand font-medium mb-4">Our All Services</p>
   <p className="font-semibold text-3xl max-w-lg mb-12">We Provide BestWeb design services</p>
   </div>
   <div className="md:grid grid-cols-2 gap-8">
      {
        data.map((item, i) => {
          return (
            <div key={i} className="shadow-lg rounded-[20px] px-7 py-10">
            <p className="font-semibold text-2xl pb-5 uppercase">{item["title"]}</p>
            <p className="pb-12 text-[#9D9D9D] font-normal ">{item["des"]}</p>
                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-4"><Image className="h-full w-full object-cover rounded-lg shadow-lg" src={item["image1"]} alt="" height={164} width={358}/></div>
                    <div className="col-span-2"><Image className="h-full w-full object-cover rounded-lg shadow-lg" src={item["image2"]} alt="" height={164} width={144}/></div>
                    <div className="col-span-3"><Image className="h-full w-full object-cover rounded-lg shadow-lg" src={item["image3"]} alt="" height={264} width={264}/></div>
                    <div className="col-span-3"><Image className="h-full w-full object-cover rounded-lg shadow-lg" src={item["image4"]} alt="" height={264} width={264}/></div>
            </div>
          </div>
          )
        })
     }
      
      
      
      
      
   </div>
 </section>;
};
export default AllService;