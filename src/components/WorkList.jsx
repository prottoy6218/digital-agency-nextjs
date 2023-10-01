import { BsArrowRight } from 'react-icons/bs';
import { GrGroup } from 'react-icons/gr';


async function getData() {
  const res = await fetch(process.env.BASE_URL + 'WorkList');
  if (!res.ok) {
    throw new Error ("Work List Calling Failed")
  }
  return res.json();
}



const WorkList = async () => {
  const data = await getData();

  return <section className="container mx-auto my-16 text-base">
      <div>
        <p className="uppercase text-brand font-medium mb-4">Work List</p>
        <p className="font-semibold text-3xl max-w-lg mb-6">We provide the Perfect Solution to your business growth</p>
      </div>
    <div className='md:flex gap-11'>
      {
        data.map((item, i) => {
          return (
              <div key={i} className="group">
                <div className='px-6 py-20 hover:shadow-lg group-hover:rounded-4xl'>
                  <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><GrGroup /></div>
                    <div>
                     <p className="font-semibold text-2xl mb-5">{item['title']}</p>
                     <p className="text-lg mb-10">{item['des']}</p>
                    </div>
                    <button className='flex items-center gap-3 group-hover:bg-sec px-6 py-3 rounded-lg group-hover:text-white'>Learn More <BsArrowRight/></button>
                </div>
              </div>
          )
        })
      }
        
      </div>
    </section>;
};
export default WorkList;