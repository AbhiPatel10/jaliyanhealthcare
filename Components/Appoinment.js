import React, { useState } from 'react'
import { Name_REGEX, Mobile_REGEX } from "../helper/validation"


const Appoinment = () => {
    const [Name, setName] = useState('')
    const [NameError, setNameError] = useState('')
    const [Number, setNumber] = useState()
    const [NumberError, setNumberError] = useState()
    const [Date, setDate] = useState('')
    const [DateError, setDateError] = useState('')
    const [Time, setTime] = useState('')
    const [TimeError, setTimeError] = useState('')
    const [Message, setMessage] = useState('')

    console.log(NameError)

    function Projectvalidator() {
        let formIsValid = true;
        if (!Name_REGEX.test(Name) === true) {
            formIsValid = false;
            setNameError("Enter Valid Name");
        } if (!Mobile_REGEX === true) {
            formIsValid = false;
            setNumberError("Enter valid Number");
        } if (Date.length === 0) {
            formIsValid = false;
            setDateError("Please Select Valid Date");
        } if (Time.length === 0) {
            formIsValid = false;
            setTimeError("Please Select Between 9:00 AM to 10:00 PM");
        }
        return formIsValid;
    }
    const SumbitForm = async (event) => {
        console.log("Runnnnnn")
        event.preventDefault();
        if (Projectvalidator()) {
            const data = { Name, Number, Date, Time, Message }

            let res = await fetch(`http://localhost:3000/api/email`, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            let Response = await res.json()
            console.log("Response", Response)
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3670.04865702509!2d72.5425733!3d23.0953146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8380bb66990f%3A0x135309ce473c47b9!2sJaliyan%20Health%20Care!5e0!3m2!1sen!2sin!4v1666196227309!5m2!1sen!2sin" style={ { filter: "grayscale(1) contrast(1.2) opacity(0.4)" } }></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">6, Aristo Crest, opp. SARAL RESIDENCY, Gota, Ahmedabad, Gujarat 382481</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">jaliyanclinic@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 9722335066</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <form onSubmit={ SumbitForm }>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input onChange={ (e) => [setName(e.target.value), setNameError('')] } value={ Name } placeholder='Enter Your Name' type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span className='text-xs text-red-500'>{ NameError }</span>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="number" className="leading-7 text-sm text-gray-600">Number</label>
                                <input onChange={ (e) => [setNumber(e.target.value), setNumberError('')] } value={ Number } placeholder='Enter Your Number' type="number" id="number" name="number" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                <span className='text-xs text-red-500'>{ NumberError }</span>
                            </div>
                            <div className="relative mb-4 w-full flex">
                                <div className='w-1/2 pr-1'>
                                    <label htmlFor="date" className="leading-7 text-sm text-gray-600">Date</label>
                                    <input onChange={ (e) => [setDate(e.target.value), setDateError('')] } value={ Date } type="date" id="date" name="date" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <span className='text-xs text-red-500'>{ DateError }</span>
                                </div>
                                <div className='w-1/2'>
                                    <label htmlFor="time" className="leading-7 text-sm text-gray-600">Time</label>
                                    <input onChange={ (e) => [setTime(e.target.value), setTimeError('')] } value={ Time } type="time" id="time" name="time" min="09:00" max="22:00" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <span className='text-xs text-red-500'>{ TimeError }</span>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message (optional)</label>
                                <textarea onChange={ (e) => { setMessage(e.target.value) } } value={ Message } id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book Now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Appoinment