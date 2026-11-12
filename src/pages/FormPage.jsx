import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, number, array } from "yup";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function FormPage() {
    const schema = object({
        nama: string().min(4).required(),
        umur: number().min(18).required(),
        "jenis-kelamin": string().required(),
        perokok: string().required(),
        merek: array().optional(),
    });

    const { handleSubmit, register, formState, reset, watch } = useForm({
        defaultValues: {
            nama: "",
            umur: 0,
            "jenis-kelamin": "Laki-laki",
            perokok: "Perokok",
            merek: [],
        },
        resolver: yupResolver(schema),
    });

    let [prevData, setPrevData] = useState([]);
    useEffect(() => {
        let data = [];
        try {
            data = JSON.parse(localStorage.getItem("data") || "[]");
        } catch {
            console.log(
                "failed to load prev data, using default empty storage",
            );
        }
        setPrevData(data);
    }, []);

    const perokok = watch("perokok");
    useEffect(() => {}, [formState]);

    function saveData(values) {
        localStorage.setItem(
            "data",
            JSON.stringify([
                ...prevData,
                { id: prevData.length + 1, ...values },
            ]),
        );
        reset();
    }

    return (
        <div className="w-full bg-slate-100 h-fit pt-12 flex flex-col justify-start items-center">
            <form
                onSubmit={handleSubmit(saveData)}
                className="p-3 gap-6 flex justify-center items-start flex-col max-w-200 w-full"
                action=""
            >
                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <label htmlFor="name" className="text-xl">
                        Siapa nama anda?
                    </label>
                    <input
                        className="border-b w-full p-4 outline-0 border-b-slate-600"
                        {...register("nama", { required: true })}
                        id="name"
                        type="text"
                    />
                    {formState.errors["nama"] && (
                        <span className="w-full text-start text-red-500">
                            {formState.errors["nama"].message}
                        </span>
                    )}
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <label htmlFor="age" className="text-xl">
                        Berapa umur anda?
                    </label>
                    <input
                        className="border-b w-full p-4 outline-0 border-b-slate-600"
                        {...register("umur")}
                        id="age"
                        type="number"
                    />
                    {formState.errors["umur"] && (
                        <span className="w-full text-start text-red-500">
                            {formState.errors["umur"].message}
                        </span>
                    )}
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <span className="text-xl">Apa jenis kelamin anda?</span>
                    <div className="w-full flex justify-between items-start flex-col">
                        <div className="flex items-center gap-3 flex-row">
                            <input
                                {...register("jenis-kelamin")}
                                id="male"
                                type="radio"
                                value="Laki-laki"
                                defaultChecked
                            />
                            <label htmlFor="male">Laki-laki</label>
                        </div>
                        <div className="flex items-center gap-3 flex-row">
                            <input
                                {...register("jenis-kelamin")}
                                id="female"
                                type="radio"
                                value="Perempuan"
                            />
                            <label htmlFor="female">Perempuan</label>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                    <span className="text-xl">Apakah anda perokok?</span>
                    <div className="w-full flex justify-between items-start flex-col">
                        <div className="flex items-center gap-3 flex-row">
                            <input
                                defaultChecked
                                {...register("perokok")}
                                id="smoker"
                                type="radio"
                                value="Perokok"
                            />
                            <label htmlFor="smoker">Ya</label>
                        </div>
                        <div className="flex items-center gap-3 flex-row">
                            <input
                                {...register("perokok")}
                                id="notsmoker"
                                type="radio"
                                value="Bukan perokok"
                            />
                            <label htmlFor="notsmoker">Tidak</label>
                        </div>
                    </div>
                </div>

                {perokok === "Perokok" && (
                    <div className="w-full bg-white rounded-xl p-6 flex flex-col justify-center gap-4 items-start">
                        <span className="text-xl">
                            Jika anda perokok, rokok apa yang pernah anda coba?
                        </span>
                        <div className="w-full flex justify-between items-start flex-col">
                            <div className="flex items-center gap-3 flex-row">
                                <input
                                    type="checkbox"
                                    id="m1"
                                    {...register("merek")}
                                    value="Gudang garam filter"
                                />
                                <label htmlFor="m1">Gudang garam filter</label>
                            </div>
                            <div className="flex items-center gap-3 flex-row">
                                <input
                                    type="checkbox"
                                    id="m2"
                                    {...register("merek")}
                                    value="Luck Strike"
                                />
                                <label htmlFor="m2">Luck Strike</label>
                            </div>
                            <div className="flex items-center gap-3 flex-row">
                                <input
                                    type="checkbox"
                                    id="m3"
                                    {...register("merek")}
                                    value="Marioboro"
                                />
                                <label htmlFor="m3">Marioboro</label>
                            </div>
                            <div className="flex items-center gap-3 flex-row">
                                <input
                                    type="checkbox"
                                    id="m4"
                                    {...register("merek")}
                                    value="Esse"
                                />
                                <label htmlFor="m4">Esse</label>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full flex justify-between items-center h-fit">
                    <button
                        type="submit"
                        className="p-4 bg-slate-800 text-white rounded-xl cursor-pointer font-bold"
                    >
                        Submit
                    </button>
                    <button
                        type="reset"
                        className="p-4 text-slate-800 rounded-xl cursor-pointer font-bold"
                    >
                        Reset
                    </button>
                </div>
                <div className="w-full p-6 flex items-center justify-center flex-row">
                    <Link to="/result">See the result</Link>
                </div>
            </form>
        </div>
    );
}
