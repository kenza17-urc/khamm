import React from 'react';
import { useForm } from 'react-hook-form';

interface FormInputs {
    titre: string;
    image: string;
    duree: number;
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
            <input style={{marginRight: "10px"}} {...register("titre", { required: true })} placeholder="Nom" />
            <input style={{marginRight: "10px"}} {...register("image", { required: true })} placeholder="Lien photo" />
            <input style={{marginRight: "10px"}} {...register("duree", { required: true })} placeholder="Temps de préparation" type="number" />
            <input type="submit" value="Valider" />
        </form>
    );
};

export default FormRecette;
