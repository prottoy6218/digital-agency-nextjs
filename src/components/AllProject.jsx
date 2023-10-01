import Image from "next/image";


async function getData() {
      const res = await fetch(process.env.BASE_URL + 'AllProject');
      if (!res.ok) {
            throw new Error('Error')
      }
      return res.json();
}


const AllProject = async () => {
      const data = await getData();

  return <section className="container mx-auto py-16 text-base">
  <div>
  <p className="uppercase text-brand font-medium mb-4">Our All Project</p>
  <p className="font-semibold text-3xl max-w-lg mb-12">Better Agency/SEO Solution At Your Fingertips</p>
  </div>
        <div className="md:grid grid-cols-2 gap-8">
              {
                    data.map((item, i) => {
                          return (
                                <div key={i } className="shadow-lg rounded-[20px] p-7">
                              <Image className="rounded-xl" src={item['image']} alt="" height="472" width="544" />
                              <p className="font-semibold text-2xl pt-6 uppercase">{item['title']}</p>
                        </div>
                          )
                    })
              }
    
  </div>
</section>;
};
export default AllProject;