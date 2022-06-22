import React from "react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      Telefone: "",
      Cep: "",
      CPF: "",
      DataNascimento: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Nome Completo"
          {...register("Nome Completo", { required: true })}
        />
        <input
          type="text"
          placeholder="E-mail"
          {...register("E-mail", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <Controller
          name="CPF"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <NumberFormat
                {...field}
                placeholder="000.000.000-00"
                format={"###.###.###-##"}
              />
            );
          }}
        />
        <Controller
          name="DataNascimento"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <NumberFormat
                {...field}
                placeholder="00/00/0000"
                format={"##/##/####"}
              />
            );
          }}
        />
        <input
          type="text"
          placeholder="Cidade"
          {...register("Cidade", { required: true })}
        />
        <input
          type="text"
          placeholder="Bairro"
          {...register("Bairro", { required: true })}
        />
        <Controller
          name="Cep"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <NumberFormat
                {...field}
                placeholder="00000-000"
                format={"#####-###"}
              />
            );
          }}
        />
        <input
          type="text"
          placeholder="Casa"
          {...register("Casa", { required: true })}
        />
        <Controller
          name="Telefone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <NumberFormat
                {...field}
                placeholder="(00) 00000-0000"
                format={"(##) #####-####"}
              />
            );
          }}
        />

        <input className="test" type="submit" />
      </div>
    </form>
  );
}
