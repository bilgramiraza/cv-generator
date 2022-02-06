import React, { Component } from 'react';
import InputCarouselSelector from './components/InputCarouselSelector';
import InputGroup from './components/InputGroup';

export default class InputExperience extends Component {
    handleSubmit=(event)=>{
        const form = document.querySelector('.experience.needs-validation');
        form.classList.add('was-validated');
        if(form.checkValidity()){   
            this.props.updateStatus(true);
            event.target.classList.remove('btn-primary')
            event.target.classList.add('btn-success');
        }
    }
    handleAdd=(e)=>{
        e.preventDefault();        
        const form = document.querySelector('.experience.needs-validation');
        if(form.checkValidity())   
            this.props.addExperience();
        else
            form.classList.add('was-validated');
    }
    render() {
        return (
            <div>   
                <form className='experience needs-validation' noValidate='novalidate'>
                    <fieldset disabled={this.props.disable?'disabled':''}>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Company Name'
                                        inputGroupType='text'
                                        inputGroupName='companyName'
                                        inputGroupPlaceHolder='Example Industries'
                                        inputGroupValue={this.props.data.companyName}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Title'
                                        inputGroupType='text'
                                        inputGroupName='role'
                                        inputGroupPlaceHolder='Assistant to the General Manager'
                                        inputGroupValue={this.props.data.role}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='Details'
                                        inputGroupType='textarea'
                                        inputGroupName='details'
                                        inputGroupPlaceHolder='Enter Details here...'
                                        inputGroupValue={this.props.data.details}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="input-group">
                            <InputGroup inputGroupLabel='From'
                                        inputGroupType='date'
                                        inputGroupName='from'
                                        pattern='\d{1,2}/\d{1,2}/\d{4}'
                                        inputGroupValue={this.props.data.from}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                            <InputGroup inputGroupLabel='To'
                                        inputGroupType='date'
                                        inputGroupName='to'
                                        pattern='\d{1,2}/\d{1,2}/\d{4}'
                                        inputGroupValue={this.props.data.to}
                                        handleChange={this.props.handleChange}
                                        required={true}
                                        />
                        </div>
                        <div className="my-2 d-flex justify-content-between">
                            <button className='my-auto btn btn-success' 
                                    onClick={this.handleAdd}>
                                Add Experience
                            </button>
                            <InputCarouselSelector currentIndex={this.props.currentItemIndex}
                                                totalItems={this.props.totalItems}
                                                category='experience'
                                                handleTracker={this.props.handleTracker}
                            />
                            <button type='button'
                                    className='my-auto btn btn-danger' 
                                    onClick={this.props.removeExperience}>
                                Remove Experience
                            </button>
                        </div>
                    </fieldset>
                </form>
                <div className="my-2 d-flex justify-content-center">
                    <button type='button' 
                            className='btn btn-primary' 
                            onClick={this.handleSubmit}>
                        Submit Experience
                    </button>
                </div>
            </div>
        );
    }
}
