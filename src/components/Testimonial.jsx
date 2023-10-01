import Image from "next/image"



async function getData() {
    const res = await fetch(process.env.BASE_URL + 'TestimonialList');
    if (!res.ok) {
          throw new Error('Error')
    }
    return res.json();
}


const Testimonial = async () => {
    const data = await getData();

    return <section className="container mx-auto py-16 text-base">
        <div>
            <p className="uppercase text-brand font-medium mb-4">Testimonial List</p>
            <p className="font-semibold text-3xl max-w-lg mb-12">Better Agency/SEO Solution At Your Fingertips</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {
                data.map((item, i) => {
                    return (
                        <div key={i} className="shadow-lg rounded-[20px] p-7 flex flex-col items-center">
                            <Image
                                className="rounded-lg w-24 h-24 object-cover"
                                src={item["image"]}
                                alt=""
                                width={100}
                                height={100} />
                            <p className='text-center py-7 text-[#9D9D9D]'>{item["msg"]}</p>
                            <p className="font-semibold text-2xl pb-3 uppercase">{item["name"]}</p>
                            <p className='text-[#16px]'>{item["designation"]}</p>
                        </div>
                    )
                })
            }
            
        </div>
    </section>;
};
export default Testimonial;