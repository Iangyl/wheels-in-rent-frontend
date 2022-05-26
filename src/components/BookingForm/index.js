import React, { useRef } from "react";
import styles from './index.module.scss';

import Button from '../Button';
import DateTimePicker from '../DateTimePicker';
import SelectSearch from "react-select-search";

const options = [
  {
    type: "group",
    name: "Atlanta",
    items: [
      { name: "Workshop One", value: "1" },
      { name: "Workshop Two", value: "2" },
    ],
  },
  {
    type: "group",
    name: "Charleston",
    items: [
      { name: "Workshop Three", value: "3" },
      { name: "Workshop Four", value: "4" },
      { name: "Workshop Five", value: "5" },
    ],
  },
  {
    type: "group",
    name: "Inactive",
    items: [{ name: "Inactive Workshop", value: "100" }],
  },
];

const BookingForm = ({ onSubmit, onChange }) => {
  const receive = useRef();
  const deliver = useRef();
  const handleChange = (...args) => {
    console.log("ARGS:", args);

    console.log("CHANGE:");
  };
  const handleFilter = (items) => {
    return (searchValue) => {
      if (searchValue.length === 0) {
        return options;
      }
      const updatedItems = items.map((list) => {
        const newItems = list.items.filter((item) => {
          return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return { ...list, items: newItems };
      });
      return updatedItems;
    };
  };

  return (
    <div className={styles.BookingForm}>
      <h3>Book now</h3>
      <form>
        <div className={styles.location}>
          <SelectSearch
            ref={receive}
            options={options}
            filterOptions={handleFilter}
            value=""
            name="Workshop"
            placeholder="Pick-up location"
            search
            onChange={handleChange}
          />
          <SelectSearch
            ref={deliver}
            options={options}
            filterOptions={handleFilter}
            value=""
            name="Workshop"
            placeholder="Return location"
            search
            onChange={handleChange}
          />
        </div>
        <div className={styles.datetime}>
          <DateTimePicker className={styles.datetimeItem} />
          <DateTimePicker className={styles.datetimeItem} />
        </div>
        <div className={styles.nameFieldContainer}>
          <input type='text' placeholder='Enter full name' className={styles.fullName} />
        </div>
        <div className={styles.contacts}>
          <input type='email' placeholder="Enter email" className={styles.contactItem} />
          <input type='tel' placeholder="Enter phone" className={styles.contactItem} />
        </div>
        <div className={styles.buttonContainer}>
          <Button type='submit' placeholder='Book Now' className={styles.button} />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
