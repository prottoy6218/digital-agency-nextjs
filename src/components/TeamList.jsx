import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";


async function getData() {
  const res = await fetch(process.env.BASE_URL + 'TeamList');
  if (!res.ok) {
    throw new Error ('Error');
  }
  return res.json();
}

const TeamList = async () => {
  const data = await getData();


  return <section className="container mx-auto py-16 text-base">
      <div>
      <p className="uppercase text-brand font-medium mb-4">Our Team Member</p>
      <p className="font-semibold text-3xl max-w-lg mb-12">Check our awesome team members</p>
      </div>
    <div className="md:grid grid-cols-3 gap-8">
      {
        data.map((item, i) => {
          return (
            <div key={i} className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
              <div className="relative">
                <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 text-gray-600 absolute top-[75%] left-[50%] translate-x-[-50%]"><a href={item["facebook"]}><FaFacebookF /></a> | <a href={item["twitter"]}><FaXTwitter /></a> | <a href={item["instagram"]}><FaInstagram /></a></div>
                <Image className="rounded-t-[20px] max-h-[380px] object-cover" src={item["image"]} alt="" height="387" width="392" />
                </div>
              <p className="font-semibold text-3xl pb-12">{item["name"]}</p>
            </div>
          )
        })
      }
      


        
      </div>
      </section>;
};
export default TeamList;