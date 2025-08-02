import React from 'react';
import ReactDatePicker from 'react-datepicker';
import {useColorMode} from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({
                      selectedDate,
                      onChange,
                      isClearable = false,
                      showPopperArrow = false,
                      ...props
                    }) => {
  const isLight = useColorMode().colorMode === 'light';
  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <ReactDatePicker
        selected={selectedDate}
        placeholder={'When do you plan to travel'}
        onChange={onChange}
        isClearable={isClearable}
        showPopperArrow={showPopperArrow}
        className="react-datapicker__input-text"
        {...props}
      />
    </div>
  );
};

export default DatePicker;
