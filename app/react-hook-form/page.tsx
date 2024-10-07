'use client'

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  gender: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Submit button clicked");
    console.log("Form data:", data);
  };

  return (
    <div className="items-center justify-items-center p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-4">React Hook Form</h1>
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        type="text"
        placeholder="名前を入力"
        className="mb-4 p-2 text-black border border-gray-300 rounded"
        {
          ...register("name", 
            { required: "名前は必須です", 
              maxLength: { value: 10, message: "名前は10文字以内で入力してください" }
            }
          )
        }
      />
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="male"
            className="mr-1"
            {...register("gender")}
          />
          男
        </label>
        <label>
          <input
            type="radio"
            value="female"
            className="mr-1"
            {...register("gender")}
          />
          女
        </label>
      </div>
      <button
        type="button"
        className="p-2"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </div>
  );
}