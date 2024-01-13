import { TSignUpSchema, signUpSchema } from "./lib/FormSchema/signup";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(data);

    reset();
  };

  return (
    <>
      <div className="flex flex-col items-center mt-5 space-y-3">
        <h1 className="text-lg font-bold">REACT HOOK FORM with ZOD</h1>
        <div className="p-6 ring-1 rounded-sm ring-black w-1/3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("email")}
              placeholder="Email"
              className="p-3 rounded border-2 w-full"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
            <input
              {...register("password")}
              placeholder="Password"
              className="p-3 rounded border-2 w-full"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
            <input
              {...register("confirmPassword")}
              placeholder="Confirm password"
              className="p-3 rounded border-2 w-full"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-black text-white p-4 rounded-lg w-full"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
