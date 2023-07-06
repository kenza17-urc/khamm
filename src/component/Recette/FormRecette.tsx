import React from 'react';
import { useForm } from 'react-hook-form';

interface FormInputs {
    name: string;
    photo: string;
    time: number;
}

interface FormProps {
    onSubmit: (data: FormInputs) => void;
}

const FormRecette = ({ onSubmit }: FormProps) => {
    const { register, handleSubmit } = useForm<FormInputs>();

    const submitForm = (data: FormInputs) => {
        console.log(data)
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input style={{marginRight: "10px"}} {...register("name", { required: true })} placeholder="Nom" />
            <input style={{marginRight: "10px"}} {...register("photo", { required: true })} placeholder="Lien photo" />
            <input style={{marginRight: "10px"}} {...register("time", { required: true })} placeholder="Temps de préparation" type="number" />
            <input type="submit" value="Valider" />
        </form>
    );
};

export default FormRecette;
