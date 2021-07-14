import React from 'react';
import NavBar from '../../components/NavBar';
import "./Add.css"
import AddForm from '../../components/AddForm';

export default function Add(props) {
  return (
  <>
    <NavBar page="add"/>
    <AddForm/>
  </>
  )
}
