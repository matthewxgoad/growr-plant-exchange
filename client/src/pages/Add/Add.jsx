import React from 'react';
import NavBar from '../../components/NavBar';
import AddForm from '../../components/AddForm';
import "./Add.css"


export default function Add(props) {
  return (
  <>
    <NavBar page="add"/>
    <AddForm/>
  </>
  )
}
