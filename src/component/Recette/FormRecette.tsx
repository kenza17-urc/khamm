import React from 'react';
import { useForm } from 'react-hook-form';
import { Recette } from '../../lib/models/recette';

interface FormProps {
    onSubmit: (data: Recette) => void;
}



const FormRecette = ({ onSubmit }: FormProps) => {
    const { register, handleSubmit } = useForm<FormInputs>();

    const submitForm = (data: FormInputs) => {
        console.log(data)
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input style={{marginRight: "10px"}} type="text" {...register("titre", { required: true })} placeholder="titre" />
            <input style={{marginRight: "10px"}} type="text" {...register("description", { required: true })} placeholder="description" />
            <input style={{marginRight: "10px"}} type='text' {...register("image", { required: true })} placeholder="image" />
            <input style={{marginRight: "10px"}} type="number" {...register("duree", { required: true })} placeholder="durée" />
            <input style={{marginRight: "10px"}} type="text" {...register("tags", { required: true })} placeholder="tags" />
            
        </form>
    );
};

export default FormRecette;
