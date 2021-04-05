import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Hired() {

  let onsubmitForm=(e)=>{
    e.preventDefault()
    alert('Are you Confirm to Hire me?')
    

  }
    return (
        <div className='w-75 m-auto p-5'>
          <h1 className='text-center' >Hire Me</h1>
          <hr className='m-auto w-50 bg ' />
            <Form onSubmit={onsubmitForm} className='mt-5'>
      <FormGroup>
        <Label for="name" color='red'>Name</Label>
        <Input type="text" name="name" id="name" placeholder="Wite Your Name" />
      </FormGroup>
      <FormGroup>
        <Label for="OrganizationName">Organization Name</Label>
        <Input type="text" name="OrganizationName" id="OrganizationName" placeholder="Write Your Organization Name" />
      </FormGroup>
      
      
      <FormGroup>
        <Label for="textarea"> Purpose of Hire Me (150 Words) </Label>
        <Input type="textarea" name="text" id="textarea" placeholder='Write Your Proposal' />
      </FormGroup>
      
      
       
      <Button className='btn-success w-100'>Submit</Button>
    </Form>
            
        </div>
    )
}

export default Hired;
