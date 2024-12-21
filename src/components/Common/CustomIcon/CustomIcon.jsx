import { CiHeart, CiStar } from 'react-icons/ci';
import {
  BsDiagram3,
  BsCupHot,
  BsFuelPumpDiesel,
  BsGrid1X2,
  BsGrid3X3Gap,
} from 'react-icons/bs';
import { LuWind, LuRefrigerator, LuMicrowave } from 'react-icons/lu';
import { MdOutlineRadio } from 'react-icons/md';
import { PiShowerLight } from 'react-icons/pi';
import { IoWaterOutline } from 'react-icons/io5';
import { GiGasStove } from 'react-icons/gi';
import { FaTv } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

const CustomIcon = ({
  iconName,
  ariaLabel,
  styleClass,
  customWidth = '32',
  customHeight = '32',
}) => {
  const icons = {
    heart: <CiHeart className={styleClass} aria-label={ariaLabel} />,
    star: <CiStar className={styleClass} aria-label={ariaLabel} />,
    diagram: (
      <BsDiagram3
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    wind: (
      <LuWind
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    hotCup: (
      <BsCupHot
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    radio: (
      <MdOutlineRadio
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    petrol: (
      <BsFuelPumpDiesel
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    shower: (
      <PiShowerLight
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    refrigerator: (
      <LuRefrigerator
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    microwave: (
      <LuMicrowave
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    water: (
      <IoWaterOutline
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    gas: (
      <GiGasStove
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    tv: (
      <FaTv
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    grid1X2: (
      <BsGrid1X2
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    grid2X2: (
      <HiOutlineViewGrid
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
    grid3X3: (
      <BsGrid3X3Gap
        className={styleClass}
        aria-label={ariaLabel}
        width={customWidth}
        height={customHeight}
      />
    ),
  };

  return <div>{icons[iconName] || <span>Icon not found</span>}</div>;
};

export default CustomIcon;
