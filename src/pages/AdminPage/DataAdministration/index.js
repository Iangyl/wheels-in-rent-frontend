import React, {useState, useEffect, useCallback} from "react";
import styles from './index.module.scss';

import {CommonDataForm, DataHeap, ModelForm, CarForm} from '../../../components';
import { addBrand, getAllBrands } from "../../../api/brands";
import { addComfortType, addOffices, getComfortTypes, getOffices } from "../../../api/others";
import { useAppDispatch, useAppSelector } from "../../../modules/store/hooks";
import { useToast } from "../../../components/ToastProvider";
import { saveBrands } from "../../../modules/store/carReducer";
import { saveComfortTypes, saveOffices } from "../../../modules/store/otherReducer";

const DataAdministration = () => {
  const dispatch = useAppDispatch();
  const brandsList = useAppSelector(state => state.car.brands);
  const comfortTypesList = useAppSelector(state => state.other.comfortTypes);
  const officesList = useAppSelector(state => state.other.offices);
  const { addToast } = useToast();
  const [cars, setCars] = useState({
    id_number: '',
    carMOdels: '',
    price: '',
    comfortTypeId: '',
    img: '',
    carStatus: ''
  });
  const [models, setModels] = useState({
    brand: '',
    name: '',
    engine_power: '',
    fuel_consumption: '',
    fuel_type: '',
    transmission: '',
    max_speed: '',
    trunk_volume: '',
    body_type: '',
    edition_year: '',
    description: ''
  });
  const [brands, setBrands] = useState('');
  const [office, setOffices] = useState('');
  const [comfortType, setComfortType] = useState('');

  const handleChangeBrand = (event) => {
    event.preventDefault();

    setBrands(event.target.value)
  }

  const submitBrands = (event) => {
    event.preventDefault();
    addBrand({name: brands})
  }

  const handleChangeOffice = (event) => {
    event.preventDefault();

    setOffices(event.target.value)
  }

  const submitOffice = (event) => {
    event.preventDefault();
    addOffices({name: office})
  }

  const handleChangeComfortTypes = (event) => {
    event.preventDefault();

    setComfortType(event.target.value)
  }

  const submitComfortTypes = (event) => {
    event.preventDefault();
    addComfortType({name: comfortType})
  }

  const fetchAllBrands = useCallback(async () => {
    try {
      const { data } = await getAllBrands();
      if (data) {

      }
      dispatch(saveBrands({brands: data?.brands}))
    } catch (error) {
      addToast('Error in fetching brand data!', 'error', 5000);
    }
  }, [addToast, dispatch])

  const fetchAllOffices = useCallback(async () => {
    try {
      const { data } = await getOffices();
      if (data) {

      }
      dispatch(saveOffices({offices: data?.offices}))
    } catch (error) {
      addToast('Error in fetching offices data!', 'error', 5000);
    }
  }, [addToast, dispatch])

  const fetchAllComfortTypes = useCallback(async () => {
    try {
      const { data } = await getComfortTypes();
      if (data) {

      }
      dispatch(saveComfortTypes({comfortTypes: data?.comfortTypes}))
    } catch (error) {
      addToast('Error in fetching comfort types data!', 'error', 5000);
    }
  }, [addToast, dispatch])

  useEffect(() => {
    fetchAllBrands()
      .then(() => fetchAllComfortTypes()
        .then(() => fetchAllOffices()))
  }, [fetchAllBrands, fetchAllComfortTypes, fetchAllOffices])

  return (
    <div className={styles.DataAdministration}>
      <h3>Brands</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm value={brands} onChange={handleChangeBrand} submit={submitBrands} />
        <DataHeap data={brandsList} />
      </div>
      <h3>Models</h3>
      <div className={styles.brandsContainer}>
        <ModelForm />
        <DataHeap />
      </div>
      <h3>Cars</h3>
      <div className={styles.brandsContainer}>
        <CarForm />
        <DataHeap />
      </div>
      <h3>Comfort Types</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm value={comfortType} onChange={handleChangeComfortTypes} submit={submitComfortTypes} />
        <DataHeap data={comfortTypesList} />
      </div>
      <h3>Offices</h3>
      <div className={styles.brandsContainer}>
        <CommonDataForm value={office} onChange={handleChangeOffice} submit={submitOffice} />
        <DataHeap data={officesList} />
      </div>
    </div>
  )
}

export default DataAdministration
