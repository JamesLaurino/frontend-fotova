import React, {FunctionComponent, useEffect, useState} from 'react';
import AddressService from "../service/AddressService";
import Address from "../model/Address";

const AddressList:FunctionComponent = ()  => {

    const [address, setAddress] = useState<Address[]>([]);

    useEffect(() => {
        AddressService.getPosts().then(addresses => setAddress(addresses));
    }, [])

    return (
        <>
            { address.map((address) => {
                return <div>
                    <p key={address.id}>Id : {address.id}</p>
                    <p key={address.id}>City : {address.city}</p>
                    <p key={address.id}>Country : {address.country}</p>
                    <p key={address.id}>Number : {address.number}</p>
                    <p key={address.id}>Street : {address.street}</p>
                </div>
            })}
        </>
    )
}
export default AddressList;