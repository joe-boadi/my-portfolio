import React from "react";
import Link from 'next/link';
import { BsBuildingFill } from 'react-icons/bs';
import { GrLocationPin } from 'react-icons/gr';
import { RiTwitterFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri';

// Define the type for each item
type IconLink = {
  icon: JSX.Element;
  link: string;
  name: string;
};

// Define an array of IconLink objects
const iconLinks: IconLink[] = [
  {
    icon: <BsBuildingFill />,
    link: '/',
    name: 'Software Developer/AI',
  },
  {
    icon: <GrLocationPin />,
    link: 'https://en.wikipedia.org/wiki/Ghana',
    name: 'Ghana',
  },
  {
    icon: <RiLinkedinFill />,
    link: 'https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271/',
    name: 'LinkedIn',
  },
  {
    icon: <RiGithubFill />,
    link: 'https://github.com/joe-boadi',
    name: 'Github',
  },
  {
    icon: <RiTwitterFill />,
    link: 'https://www.x.com/joeboadiDev_',
    name: 'X',
  },
];

// Component to render all icon links
const IconLinks = () => (
    <>
      {/* Render location and building icons */}
      {iconLinks.map((item, index) => {
        if (item.name === 'Ghana' || item.name === 'Software Developer/AI') {
          return (
            <div key={index} className="m-0 p-1 text-sm ">
              <Link href={item.link}>
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              </Link>
            </div>
          );
        }
        return null;
      })}

      {/* Render social icons */}
      <div className="m-0 p-1 text-sm">
        {iconLinks.map((item, index) => {
          if (item.name !== 'Ghana' && item.name !== 'Software Developer/AI') {
            return (
              <Link key={index} href={item.link}>
                <div className="flex p-1  hover:underline hover:text-green-400">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </>
  );

  

export default IconLinks;
