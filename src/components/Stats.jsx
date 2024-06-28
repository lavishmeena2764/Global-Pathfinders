import { faBuildingColumns, faCircle, faGraduationCap, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { TbFlagStar } from "react-icons/tb";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { TbUserStar } from "react-icons/tb";

const Stats = () => {
  // Data values
  const collegesCount = 100;
  const studentsCount = 200;
  const expertsCount = 50;
  const satisfactionRate = 100;

  // Speed of counting animation (milliseconds)
  const duration = 2;

  // Function to simulate API fetch and update state
  useEffect(() => {
    // Simulate API fetch
    // This useEffect can be used if you need to fetch data asynchronously
    // and then update the state with the fetched data
  }, []);

  return (
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-row items-center justify-center p-6 rounded-lg shadow-lg text-center">
            {/* <FontAwesomeIcon icon={faBuildingColumns} className='w-16 h-16 object-cover rounded-full mr-3' /> */}
            <FaBuildingColumns size='4em' className='mr-4'/>
            <div className='text-left'>
            <h3 className="text-3xl font-bold">
              <CountUp end={collegesCount} duration={duration} />+
            </h3>
            <p className="text-lg">Colleges</p>
          
              </div></div>
          <div className="flex flex-row items-center justify-center p-6 rounded-lg shadow-lg text-center">
            {/* <i className="flaticon-student text-4xl mb-2"></i> */}

            {/* <FontAwesomeIcon icon={faGraduationCap} className='w-16 h-16 object-cover rounded-full mr-3' /> */}
            <FaUserGraduate size='4em' className='mr-4' />
            <div className='text-left'>
              <h3 className="text-3xl font-bold">
                <CountUp end={studentsCount} duration={duration} />+
              </h3>
              <p className="text-lg">Students Enrolled</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-6 rounded-lg shadow-lg text-center">
            {/* <i className="flaticon-student text-4xl mb-2"></i> */}
            <TbUserStar size='4em' className='mr-4' />
            {/* <FontAwesomeIcon icon={faUsers} className='w-16 h-16 object-cover rounded-full mr-3' /> */}
            <div className='text-left'>
            <h3 className="text-3xl font-bold">
              <CountUp end={expertsCount} duration={duration} />+
            </h3>
            <p className="text-lg">Experts</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center p-6 rounded-lg shadow-lg text-center">
            {/* <i className="flaticon-student text-4xl mb-2"></i> */}

            {/* <FontAwesomeIcon icon={faBuildingColumns} className='w-16 h-16 object-cover rounded-full mr-3' /> */}
            <TbFlagStar size='4em' className='mr-4' />
            <div className='text-left'>
            <h3 className="text-3xl font-bold">
              <CountUp end={satisfactionRate} duration={duration} suffix="%" />+
            </h3>
            <p className="text-lg">Satisfaction Rate</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
