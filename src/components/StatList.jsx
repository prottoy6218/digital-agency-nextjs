import { FaPeopleGroup } from 'react-icons/fa6';
import { FaThumbsUp } from 'react-icons/fa6';
import { FaRegFaceGrinStars } from 'react-icons/fa6';
import { FaDiagramSuccessor } from 'react-icons/fa6';

async function getData() {
  const res =await fetch(process.env.BASE_URL + 'StatList');
  if (!res.ok) {
    throw new Error("StatList Calling Failed")
  }
  return res.json();
}

const StatList = async () => {
  const data = await getData();
  return <section className='container mx-auto'>
          {/* STATS LIST */}
          <div className='md:flex justify-evenly	my-20'>
        <div className="shadow-xl rounded-xl px-10 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><FaPeopleGroup /></div>
          <p className='font-semibold text-3xl'>{data["followers"]}</p>
          <p className='font-medium text-lg'>Followers</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-10 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><FaThumbsUp /></div>
          <p className='font-semibold text-3xl'>{data["solved"]}</p>
          <p className='font-medium text-lg'>Solved Problems</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-10 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><FaRegFaceGrinStars /></div>
          <p className='font-semibold text-3xl'>{data["customers"]}</p>
          <p className='font-medium text-lg'>Customers</p>
          </div>
        </div>
        <div className="shadow-xl rounded-xl px-10 py-10">
          <div className='flex flex-col items-center'>
          <div className='bg-secbrand h-24 w-24 rounded-2xl flex items-center justify-center text-4xl mb-5'><FaDiagramSuccessor /></div>
          <p className='font-semibold text-3xl'>{data["projects"]}</p>
          <p className='font-medium text-lg'>Projects</p>
          </div>
        </div>
      </div>
  </section>;
};
export default StatList;