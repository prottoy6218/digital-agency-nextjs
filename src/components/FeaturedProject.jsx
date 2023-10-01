import Image from "next/image";


async function getData() {
  const res = await fetch(process.env.BASE_URL + 'FeaturedProject');
  if (!res.ok) {
    throw new Error('FeaturedProject Calling Error');
  }
  return res.json();
}


const FeaturedProject = async () => {
  const data = await getData();
  
  return <section className="bg-[#F0FDF4]">
    <div className="container mx-auto py-16 text-base">
      <div>
      <p className="uppercase text-brand font-medium mb-4">Featured Project</p>
      <p className="font-semibold text-3xl max-w-lg mb-12">We provide the Perfect Solution to your business growth</p>
      </div>
    <div className="md:grid grid-cols-2 items-start gap-8">
      <div>
        <Image src="/img/Mask.png" alt="" height={531} width={603}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-2xl">Redesign channel website landng page</p>
      </div>
        <div className="grid grid-cols-2 gap-5">
          {
            data.map((item, i) => {
              return (
                <div key={i}>
        <Image className="rounded-3xl" src={item["image"]} alt="" height={188} width={287}/>
                  <p className="text-sm text-[#2E3E5C] mt-4 mb-2">{item["remark"]} - {item["created_at"]}</p>
        <p className="font-bold text-lg">{item["title"]}</p>
          </div>
              )
            })
          }
        
      </div>
    </div>
    </div>
  </section>;
};
export default FeaturedProject;